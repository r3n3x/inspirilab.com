<script setup lang="ts">
import { computed } from 'vue'
import { services, type Project } from '~/data/site'

const props = defineProps<{ project: Project; line?: { color: string; short: string } }>()
const l = computed(() => props.line ?? services.find((s) => s.slug === props.project.service))
</script>

<template>
  <component :is="project.url ? 'a' : 'div'" :href="project.url" :target="project.url ? '_blank' : undefined"
    :rel="project.url ? 'noopener noreferrer' : undefined"
    class="group flex flex-col h-full overflow-hidden rounded-xl border-2 border-[var(--line)] bg-[var(--paper)] transition-colors"
    :class="project.url ? 'hover:border-[var(--ink)]' : ''">
    <div class="h-32 flex items-center justify-center px-8 border-b-2 border-[var(--line)]" :class="project.logoOnDark ? 'bg-[var(--ink)]' : 'bg-[var(--mist)]'">
      <img v-if="project.logo" :src="project.logo" :alt="`${project.name} logo`" loading="lazy"
        class="max-h-16 max-w-[70%] object-contain transition-transform duration-300 ease-out group-hover:scale-105" />
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
      {{ project.name }}
    </h3>
    <p class="mt-3 text-[var(--ink-2)] leading-relaxed">{{ project.description }}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      <span v-for="tag in project.tags" :key="tag" class="text-xs px-2.5 py-1 rounded-full bg-[var(--mist)] text-[var(--ink-2)]">{{ tag }}</span>
    </div>
    </div>
  </component>
</template>
