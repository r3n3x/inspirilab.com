<script setup lang="ts">
import { computed, ref } from 'vue'
import { services, projects } from '~/data/site'

interface Station { name: string; href: string; external: boolean; ghost?: boolean }

const active = ref<string | null>(null)

// Map geometry (viewBox 1200 x 440). Lines leave the interchange and run east.
const IX = 300
const IY = 220
const ROWS = [70, 170, 270, 370]
const FIRST = 640
const GAP = 170

const lines = computed(() =>
  services.map((s, i) => {
    const y = ROWS[i] ?? 370
    let stations: Station[]
    if (s.slug === 'consulting') {
      stations = ['Strategy', 'Idea reviews', 'Keynotes'].map((name) => ({ name, href: '/consulting', external: false }))
    } else {
      stations = projects
        .filter((p) => p.service === s.slug)
        .map((p) => ({ name: p.name.replace(' GBP Audit', ''), href: p.url ?? '/work', external: Boolean(p.url) }))
    }
    stations = stations.slice(0, 3)
    stations.push({ name: 'Your project', href: '/contact', external: false, ghost: true })
    const end = Math.min(FIRST + (stations.length - 1) * GAP + 50, 1172)
    return {
      ...s,
      y,
      d: `M${IX} ${IY} C ${IX + 120} ${IY} ${IX + 140} ${y} ${IX + 260} ${y} L ${end} ${y}`,
      stations: stations.map((st, j) => ({ ...st, x: FIRST + j * GAP }))
    }
  })
)

const dim = (slug: string) => active.value !== null && active.value !== slug

function go(st: Station) {
  if (st.external) window.open(st.href, '_blank', 'noopener')
  else navigateTo(st.href)
}
</script>

<template>
  <div>
    <!-- Desktop / tablet: the full map -->
    <div class="relative hidden md:block">
      <svg viewBox="0 0 1200 440" class="w-full h-auto" role="group" aria-label="Inspirilab route map: four service lines leaving one consultation interchange">
        <line x1="250" :y1="IY" :x2="IX" :y2="IY" stroke="var(--ink)" stroke-width="10" stroke-linecap="round" />
        <g v-for="l in lines" :key="l.slug" class="transition-opacity duration-200" :opacity="dim(l.slug) ? 0.16 : 1"
          @mouseenter="active = l.slug" @mouseleave="active = null">
          <path :d="l.d" :stroke="l.color" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <text :x="IX + 270" :y="l.y - 20" class="map-line">{{ l.short }}</text>
          <a v-for="st in l.stations" :key="st.name" :href="st.href" :target="st.external ? '_blank' : undefined"
            :rel="st.external ? 'noopener' : undefined" class="map-station" @click.prevent="go(st)">
            <title>{{ st.ghost ? 'Your project: get in touch' : st.name }}</title>
            <circle :cx="st.x" :cy="l.y" r="13" fill="var(--paper)" :stroke="st.ghost ? l.color : 'var(--ink)'"
              :stroke-width="st.ghost ? 4 : 6" :stroke-dasharray="st.ghost ? '5 5' : undefined" />
            <text :x="st.x" :y="l.y + 38" text-anchor="middle" :class="st.ghost ? 'map-ghost' : 'map-stop'">{{ st.name }}</text>
          </a>
        </g>
        <circle :cx="IX" :cy="IY" r="30" fill="var(--paper)" stroke="var(--ink)" stroke-width="12" />
        <circle :cx="IX" :cy="IY" r="9" fill="var(--ink)" />
      </svg>
      <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[21%]">
        <p class="text-sm font-medium text-[var(--ink-2)] mb-2">Interchange</p>
        <NuxtLink to="/contact?type=consulting" class="btn-primary w-full justify-center text-center leading-snug">
          Start here: book a consultation
        </NuxtLink>
      </div>
    </div>

    <!-- Phone: the same network read as a strip map -->
    <div class="md:hidden">
      <NuxtLink to="/contact?type=consulting" class="btn-primary w-full justify-center">Start here: book a consultation</NuxtLink>
      <ol class="mt-8 space-y-7">
        <li v-for="l in lines" :key="l.slug">
          <NuxtLink :to="`/services#${l.slug}`" class="flex items-center gap-3 font-semibold text-[var(--ink)]">
            <span class="w-9 h-3.5 rounded-full" :style="{ background: l.color }" aria-hidden="true" />{{ l.short }}
          </NuxtLink>
          <div class="relative mt-3 ml-4 pl-7">
            <span class="absolute left-0 top-1 bottom-1 w-2 rounded-full" :style="{ background: l.color }" aria-hidden="true" />
            <a v-for="st in l.stations" :key="st.name" :href="st.href" :target="st.external ? '_blank' : undefined"
              class="relative flex items-center py-1.5 text-[0.95rem]" :class="st.ghost ? 'text-[var(--ink-2)] italic' : 'text-[var(--ink)]'"
              @click.prevent="go(st)">
              <span class="absolute -left-[1.6rem] w-4 h-4 rounded-full bg-[var(--paper)]"
                :class="st.ghost ? 'border-2 border-dashed' : 'border-[3px] border-[var(--ink)]'" :style="st.ghost ? { borderColor: l.color } : undefined" aria-hidden="true" />
              {{ st.name }}
            </a>
          </div>
        </li>
      </ol>
    </div>

    <!-- Legend: the signature interaction (hover or focus a line to isolate it) -->
    <div class="hidden md:flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 pt-5 border-t border-[var(--line)]">
      <NuxtLink v-for="l in lines" :key="l.slug" :to="`/services#${l.slug}`"
        class="flex items-center gap-2.5 text-sm font-medium text-[var(--ink)] rounded-md px-1"
        @mouseenter="active = l.slug" @mouseleave="active = null" @focus="active = l.slug" @blur="active = null">
        <span class="w-8 h-3 rounded-full" :style="{ background: l.color }" aria-hidden="true" />{{ l.short }}
      </NuxtLink>
      <span class="flex items-center gap-2.5 text-sm text-[var(--ink-2)]">
        <span class="w-4 h-4 rounded-full border-2 border-dashed border-[var(--ink-2)]" aria-hidden="true" />Planned stop: your project
      </span>
    </div>
  </div>
</template>

<style scoped>
.map-line { font: 700 17px 'Schibsted Grotesk Variable', sans-serif; fill: var(--ink); letter-spacing: -0.01em; }
.map-stop { font: 500 15px 'Public Sans Variable', sans-serif; fill: var(--ink); }
.map-ghost { font: italic 500 14px 'Public Sans Variable', sans-serif; fill: var(--ink-2); }
.map-station { cursor: pointer; outline: none; }
.map-station:hover circle, .map-station:focus-visible circle { r: 16; }
.map-station:focus-visible text { text-decoration: underline; }
</style>
