<script setup lang="ts">
import type { Project } from '~/data/site'
defineProps<{ project: Project }>()
</script>

<template>
  <a
    v-if="project.url"
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
    class="group block h-full rounded-[14px] border border-[var(--line)] bg-[var(--paper)] p-6 md:p-8 transition-all duration-200 hover:shadow-[0_10px_30px_-12px_rgba(13,31,23,0.25)] hover:border-[var(--ink)] focus-visible:outline-2 focus-visible:outline-[var(--brand)] focus-visible:outline-offset-2"
  >
    <div class="flex items-center justify-between mb-3">
      <span class="text-sm text-[var(--ink-2)]">{{ project.category }}</span>
      <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 text-[var(--ink-2)]" />
    </div>
    <h3 class="text-2xl font-semibold text-[var(--ink)] tracking-[-0.03em] mb-3 text-wrap-balance">{{ project.name }}</h3>
    <p class="text-[var(--ink-2)] text-base leading-relaxed mb-4">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="text-xs px-2.5 py-1 rounded-full bg-[var(--mist)] text-[var(--ink-2)]"
      >{{ tag }}</span>
    </div>
  </a>
  <div
    v-else
    class="block h-full rounded-[14px] border border-[var(--line)] bg-[var(--paper)] p-6 md:p-8"
  >
    <div class="flex items-center justify-between mb-3">
      <span class="text-sm text-[var(--ink-2)]">{{ project.category }}</span>
    </div>
    <h3 class="text-2xl font-semibold text-[var(--ink)] tracking-[-0.03em] mb-3 text-wrap-balance">{{ project.name }}</h3>
    <p class="text-[var(--ink-2)] text-base leading-relaxed mb-4">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="text-xs px-2.5 py-1 rounded-full bg-[var(--mist)] text-[var(--ink-2)]"
      >{{ tag }}</span>
    </div>
  </div>
</template>
