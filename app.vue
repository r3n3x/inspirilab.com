<script setup lang="ts">
import { computed, ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { nav, links, address, services } from '~/data/site'

const currentYear = computed(() => new Date().getFullYear())
const menuOpen = ref(false)
const route = useRoute()

// Nav "train": one marker that rides along the track to the current page's link.
const navEl = ref<HTMLElement | null>(null)
const marker = ref({ x: 0, w: 0, show: false })
const normal = (p: string) => (p.length > 1 ? p.replace(/\/$/, '') : p)
function placeMarker() {
  const wrap = navEl.value
  const link = wrap?.querySelector<HTMLElement>(`[data-to="${normal(route.path)}"]`)
  if (!wrap || !link) { marker.value = { ...marker.value, show: false }; return }
  const base = wrap.getBoundingClientRect()
  const r = link.getBoundingClientRect()
  marker.value = { x: r.left - base.left, w: r.width, show: true }
}

// Nav lifts off the page once you scroll.
const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 8 }

onMounted(() => {
  placeMarker()
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', placeMarker)
  document.fonts?.ready.then(placeMarker)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', placeMarker)
})
watch(() => route.path, () => { menuOpen.value = false; nextTick(placeMarker) })
</script>

<template>
  <UApp>
    <div class="min-h-screen bg-[var(--paper)] flex flex-col">
      <!-- Navigation -->
      <NuxtLoadingIndicator :height="4" :throttle="0"
        color="linear-gradient(90deg, #e4002b 0 20%, #23b573 20% 40%, #0072bc 40% 60%, #f5a800 60% 80%, #7b3fa0 80%)" />
      <nav class="site-nav sticky top-0 w-full z-50 bg-[var(--paper)] border-b" :class="scrolled ? 'is-scrolled' : ''">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <NuxtLink to="/" class="flex items-center" aria-label="Inspirilab home">
              <span class="inline-flex items-center justify-center h-11 px-3 rounded-[10px] bg-[var(--ink)]">
                <img src="/logo.png" alt="Inspirilab" class="h-9 w-auto" />
              </span>
            </NuxtLink>

            <div ref="navEl" class="nav-track hidden md:flex items-center gap-7 ml-auto mr-8 relative">
              <NuxtLink
                v-for="item in nav"
                :key="item.to"
                :to="item.to"
                :data-to="item.to"
                class="nav-link relative py-2 text-sm font-medium text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors"
                :class="normal(route.path) === item.to ? '!text-[var(--ink)]' : ''"
              >
                {{ item.label }}
              </NuxtLink>
              <span class="nav-train" :class="marker.show ? 'is-on' : ''" aria-hidden="true"
                :style="{ transform: `translateX(${marker.x}px)`, width: `${marker.w}px` }" />
            </div>

            <div class="hidden md:block">
              <NuxtLink
                to="/contact?type=consulting"
                class="btn-primary justify-center text-sm"
              >
                Book a consultation
              </NuxtLink>
            </div>

            <button
              class="md:hidden text-[var(--ink)] p-2 -mr-2"
              aria-label="Toggle menu"
              :aria-expanded="menuOpen ? 'true' : 'false'"
              @click="menuOpen = !menuOpen"
            >
              <UIcon :name="menuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
            </button>
          </div>
        </div>

        <Transition name="menu">
        <div v-if="menuOpen" class="md:hidden border-t border-[var(--line)] px-4 py-4 space-y-1">
          <NuxtLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="block py-2 text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors"
            exact-active-class="!text-[var(--ink)]"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="pt-3">
            <NuxtLink
              to="/contact?type=consulting"
              class="btn-primary w-full justify-center text-sm"
            >
              Book a consultation
            </NuxtLink>
          </div>
        </div>
        </Transition>
      </nav>

      <main class="flex-1">
        <NuxtPage />
      </main>

      <!-- Footer -->
      <footer class="bg-[var(--ink)] text-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-12 pb-10 border-b border-white/10">
            <div>
              <span class="inline-flex items-center justify-center h-9 px-3 rounded-full bg-white/10 mb-4">
                <img src="/logo.png" alt="Inspirilab" class="h-12 w-auto -ml-1" />
              </span>
              <p class="text-[#b7cfc3] text-sm leading-relaxed max-w-xs">
                Technology consulting and product development for blockchain, AI and digital innovation.
              </p>
            </div>

            <div>
              <p class="text-xs font-medium tracking-widest text-[#b7cfc3] uppercase mb-4">Company</p>
              <ul class="space-y-3">
                <li v-for="item in nav" :key="item.to">
                  <NuxtLink :to="item.to" class="text-[#b7cfc3] text-sm hover:text-white transition-colors">{{ item.label }}</NuxtLink>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs font-medium tracking-widest text-[#b7cfc3] uppercase mb-4">Services</p>
              <ul class="space-y-3">
                <li v-for="s in services" :key="s.slug">
                  <NuxtLink :to="`/services#${s.slug}`" class="text-[#b7cfc3] text-sm hover:text-white transition-colors">{{ s.title }}</NuxtLink>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs font-medium tracking-widest text-[#b7cfc3] uppercase mb-4">Contact</p>
              <address class="text-[#b7cfc3] text-sm not-italic leading-relaxed mb-5">
                <template v-for="line in address" :key="line">{{ line }}<br /></template>
              </address>
              <a v-if="links.email" :href="`mailto:${links.email}`" class="block text-[#b7cfc3] text-sm hover:text-white mb-4">
                {{ links.email }}
              </a>
              <a :href="links.companyLinkedIn" target="_blank" rel="noopener noreferrer" class="text-[#b7cfc3] text-sm hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div class="pt-8">
            <p class="text-[#b7cfc3] text-sm">&copy; {{ currentYear }} Inspirilab Sdn. Bhd.</p>
          </div>
        </div>
      </footer>
    </div>
  </UApp>
</template>
