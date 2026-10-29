<script setup lang="ts">
import type { Project } from '~/data/site'
defineProps<{ project: Project }>()
</script>

<template>
  <UCard class="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <p class="text-xs font-medium tracking-widest text-[#23b573] uppercase mb-2">{{ project.category }}</p>
    <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ project.name }}</h3>
    <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span v-for="tag in project.tags" :key="tag"
        class="text-xs px-2 py-1 rounded-full bg-[#23b573]/10 text-[#1ea065]">{{ tag }}</span>
    </div>
    <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer"
      class="inline-flex items-center text-[#23b573] hover:text-[#1ea065] transition-colors text-sm font-medium">
      Visit site
      <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 ml-2" />
    </a>
  </UCard>
</template>
