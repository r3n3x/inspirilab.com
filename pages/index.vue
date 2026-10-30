<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { services, projects, partners, rene, offerings } from '~/data/site'

useHead({ title: 'Inspirilab | Technology consulting & product development' })

const lineOf = (slug: string) => services.find((s) => s.slug === slug)

// Route spine: fills down the page as you scroll; each section's stop lights when reached.
const spine = ref<HTMLElement | null>(null)
let frame = 0
function update() {
  frame = 0
  const el = spine.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const mark = window.innerHeight * 0.6
  const pct = Math.min(100, Math.max(0, ((mark - r.top) / r.height) * 100))
  el.style.setProperty('--fill-s', String(pct / 100))
  el.querySelectorAll<HTMLElement>('.stop').forEach((s) => s.classList.toggle('reached', s.getBoundingClientRect().top < mark))
}
const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
onMounted(() => {
  spine.value?.classList.add('live')
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <div>
    <!-- First viewport: station sign + the network -->
    <section class="pt-10 md:pt-14 pb-14">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="station-sign rise max-w-3xl">
          <h1 class="text-[clamp(2.2rem,5vw,4rem)] leading-[1.03] font-bold text-white">
            Every <span class="text-[var(--brand)]">successful</span> project starts with one conversation.
          </h1>
          <p class="mt-4 text-lg text-[var(--ink-band-secondary)] max-w-2xl">
            Book a free first consultation with the Inspirilab team in Cyberjaya. We help you see what is worth building, then build it with you:
            SaaS and AI products, websites, blockchain and decentralised AI.
          </p>
        </div>

        <p class="mt-10 text-[var(--ink-2)] max-w-2xl">How we work, drawn as a transit map: every project starts at the consultation, then travels along one of our service lines. Each station is a project we have built.</p>
        <div class="mt-6 md:mt-4">
          <RouteMap />
        </div>
        <div class="mt-6 md:mt-4 md:text-right">
          <NuxtLink to="/services" class="inline-flex items-center gap-1.5 font-medium text-[var(--brand-deep)] hover:underline">
            Explore all service lines <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- The route continues: every section is a stop -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="spine" class="spine pb-6">
        <div class="spine-fill" aria-hidden="true" />
        <!-- Stop 1: the interchange -->
        <section class="py-16 md:py-20 border-t border-[var(--line)]">
          <div class="grid lg:grid-cols-12 gap-10">
            <div class="lg:col-span-5">
              <h2 class="stop text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.1] font-bold">Where every project starts</h2>
              <p class="mt-5 text-lg text-[var(--ink-2)]">A free first consultation with our team. We look at where your business stands, what is changing in technology and what is actually worth doing, so fear of missing out or fear of change turns into a clear next step.</p>
              <div class="mt-8 flex flex-wrap gap-3">
                <NuxtLink to="/contact?type=consulting" class="btn-primary">Book a free first consultation</NuxtLink>
                <NuxtLink to="/consulting" class="btn-secondary">About our consulting</NuxtLink>
              </div>
            </div>
            <div class="lg:col-span-7">
              <h3 class="text-base font-semibold text-[var(--ink-2)] mb-2">What we advise on</h3>
              <ul v-reveal class="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                <li v-for="o in offerings" :key="o.title" class="flex gap-4 py-4">
                  <UIcon :name="o.icon" class="w-5 h-5 mt-0.5 shrink-0 text-[var(--ink)]" aria-hidden="true" />
                  <div>
                    <p class="font-semibold">{{ o.title }}</p>
                    <p class="text-[0.95rem] text-[var(--ink-2)]">{{ o.text }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Stop: the team -->
        <section class="py-16 md:py-20 border-t border-[var(--line)]">
          <h2 class="stop text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.1] font-bold">The team</h2>
          <p class="mt-4 text-lg text-[var(--ink-2)] max-w-2xl">Inspirilab is run by a leadership team that brings together software, partnerships, strategy and risk.</p>
          <div class="mt-10"><TeamLine /></div>
        </section>

        <!-- Stop 2: the lines -->
        <section class="py-16 md:py-20 border-t border-[var(--line)]">
          <h2 class="stop text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.1] font-bold">Five lines, one team</h2>
          <p class="mt-4 text-lg text-[var(--ink-2)] max-w-2xl">From strategy to a live product: we design, build and run the software behind each line.</p>
          <div v-reveal class="mt-10 space-y-3">
            <NuxtLink v-for="s in services" :key="s.slug" :to="`/services#${s.slug}`"
              class="group grid md:grid-cols-12 gap-3 md:gap-6 items-center rounded-xl border-2 border-transparent hover:border-[var(--ink)] p-4 md:p-5 transition-colors">
              <span class="md:col-span-1 h-3.5 w-14 rounded-full" :style="{ background: s.color }" aria-hidden="true" />
              <span class="md:col-span-4 text-xl font-bold">{{ s.title }}</span>
              <span class="md:col-span-6 text-[var(--ink-2)]">{{ s.summary }}</span>
              <UIcon name="i-heroicons-arrow-right" class="hidden md:block md:col-span-1 justify-self-end w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </NuxtLink>
          </div>
        </section>

        <!-- Stop 3: stations -->
        <section class="py-16 md:py-20 border-t border-[var(--line)]">
          <div class="flex flex-wrap items-end justify-between gap-4">
            <h2 class="stop text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.1] font-bold">Stations we've built</h2>
            <NuxtLink to="/work" class="inline-flex items-center gap-1.5 font-medium text-[var(--brand-deep)] hover:underline">
              All projects <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>
          <div v-reveal class="mt-10 grid md:grid-cols-2 gap-5">
            <ProjectCard v-for="p in projects" :key="p.name" :project="p" :line="lineOf(p.service)" />
          </div>
        </section>

        <!-- Stop 4: connecting lines -->
        <section class="py-16 md:py-20 border-t border-[var(--line)]">
          <h2 class="stop text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.1] font-bold">Connecting lines</h2>
          <p class="mt-3 text-[var(--ink-2)]">Our flagship open-source partners.</p>
          <div class="mt-8 grid md:grid-cols-2 gap-x-10">
            <a v-for="p in partners" :key="p.name" :href="p.url" target="_blank" rel="noopener noreferrer"
              class="group flex items-start justify-between gap-4 py-4 border-t border-[var(--line)]">
              <span>
                <span class="block font-semibold group-hover:text-[var(--brand-deep)]">{{ p.name }}</span>
                <span class="block text-[0.95rem] text-[var(--ink-2)]">{{ p.description }}</span>
              </span>
              <UIcon name="i-heroicons-arrow-up-right" class="w-4 h-4 mt-1 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>
    </div>

    <CtaBanner />
  </div>
</template>
