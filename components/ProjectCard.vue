<script setup lang="ts">
import { computed } from 'vue'
import { services, type Project } from '~/data/site'

const props = defineProps<{ project: Project; line?: { color: string; short: string } }>()
const l = computed(() => props.line ?? services.find((s) => s.slug === props.project.service))
</script>

<template>
  <!-- The whole card is clickable via the title link's ::after; the partner link sits above it -->
  <article class="group relative flex flex-col h-full overflow-hidden rounded-xl border-2 border-[var(--line)] bg-[var(--paper)] transition-colors"
    :class="project.url ? 'hover:border-[var(--ink)]' : ''">
    <div class="h-40 flex items-center justify-center px-6 py-4 border-b-2 border-[var(--line)]"
      :class="project.logoBg ? '' : project.logoOnDark ? 'bg-[var(--ink)]' : 'bg-[var(--mist)]'"
      :style="project.logoBg ? { background: project.logoBg } : undefined">
      <img v-if="project.logo" :src="project.logo" :alt="`${project.name} logo`" loading="lazy"
        class="h-full max-w-[85%] object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
      <span v-else class="text-2xl font-bold tracking-tight text-[var(--ink)]">{{ project.name }}</span>
    </div>
    <div class="p-6 md:p-7 flex-1">
      <div class="flex items-center justify-between gap-3 mb-4">
        <span v-if="l" class="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink-2)]">
          <span class="w-6 h-2.5 rounded-full" :style="{ background: l.color }" aria-hidden="true" />{{ l.short }} line
        </span>
        <UIcon v-if="project.url" name="i-heroicons-arrow-up-right" class="w-4 h-4 text-[var(--ink-2)] group-hover:text-[var(--ink)]" aria-hidden="true" />
      </div>
      <h3 class="flex items-center gap-3 text-2xl font-bold">
        <span class="w-5 h-5 shrink-0 rounded-full bg-[var(--paper)] border-[5px] border-[var(--ink)]" aria-hidden="true" />
        <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer"
          class="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">{{ project.name }}</a>
        <span v-else>{{ project.name }}</span>
      </h3>
      <p v-if="project.status" class="mt-3 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-[var(--ink-2)] px-3 py-0.5 text-xs font-semibold text-[var(--ink)]">
        <span class="w-2 h-2 rounded-full bg-[var(--line-amber)]" aria-hidden="true" />{{ project.status }}
      </p>
      <p class="mt-3 text-[var(--ink-2)] leading-relaxed">{{ project.description }}</p>
      <p v-if="project.partner" class="mt-3 text-sm text-[var(--ink-2)]">
        In collaboration with
        <a :href="project.partner.url" target="_blank" rel="noopener noreferrer"
          class="relative z-10 font-semibold text-[var(--brand-deep)] underline underline-offset-2 hover:text-[var(--ink)]">{{ project.partner.name }}</a>
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="text-xs px-2.5 py-1 rounded-full bg-[var(--mist)] text-[var(--ink-2)]">{{ tag }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
article:has(a:focus-visible) { outline: 2px solid var(--brand); outline-offset: 2px; }
</style>
