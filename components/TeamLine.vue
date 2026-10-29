<script setup lang="ts">
import { team } from '~/data/site'
</script>

<template>
  <!-- The team as one line with four stations -->
  <ol class="relative grid gap-8 md:grid-cols-4 md:gap-6">
    <span class="absolute hidden md:block left-0 right-0 top-[1.4rem] h-2 rounded-full bg-[var(--ink)]" aria-hidden="true" />
    <span class="absolute md:hidden left-[1.15rem] top-2 bottom-2 w-2 rounded-full bg-[var(--ink)]" aria-hidden="true" />
    <li v-for="p in team" :key="p.name" class="relative flex md:block gap-5">
      <span class="relative z-10 shrink-0 grid place-items-center w-12 h-12 rounded-full bg-[var(--paper)] border-[6px] border-[var(--ink)] text-sm font-bold">
        {{ p.initials }}
      </span>
      <div class="md:mt-4">
        <p class="text-lg font-bold leading-tight">{{ p.name }}</p>
        <p class="mt-1 text-sm font-medium text-[var(--brand-deep)]">{{ p.role }}</p>
        <p v-if="p.note" class="mt-1 text-sm text-[var(--ink-2)]">{{ p.note }}</p>
        <a :href="p.linkedin" target="_blank" rel="noopener noreferrer"
          class="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] underline decoration-[var(--line)] hover:decoration-[var(--ink)]">
          LinkedIn <UIcon name="i-heroicons-arrow-up-right" class="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </li>
  </ol>
</template>
