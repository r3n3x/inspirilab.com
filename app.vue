<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { nav, links, address, services } from '~/data/site'

const currentYear = computed(() => new Date().getFullYear())
const menuOpen = ref(false)
const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <UApp>
    <div class="min-h-screen bg-[var(--paper)] flex flex-col">
      <!-- Navigation -->
      <nav class="sticky top-0 w-full z-50 bg-[var(--paper)] border-b border-[var(--line)]">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <NuxtLink to="/" class="flex items-center" aria-label="Inspirilab home">
              <span class="inline-flex items-center justify-center h-11 px-3 rounded-[10px] bg-[var(--ink)]">
                <img src="/logo.png" alt="Inspirilab" class="h-9 w-auto" />
              </span>
            </NuxtLink>

            <div class="hidden md:flex items-center gap-7 ml-auto mr-8">
              <NuxtLink
                v-for="item in nav"
                :key="item.to"
                :to="item.to"
                class="relative text-sm font-medium text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors"
                exact-active-class="!text-[var(--ink)] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[3px] after:rounded-full after:bg-[var(--ink)]"
              >
                {{ item.label }}
              </NuxtLink>
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
