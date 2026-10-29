<script setup lang="ts">
withDefaults(defineProps<{ title?: string; text?: string; to?: string; label?: string }>(), {
  title: 'Have a project in mind?',
  text: 'Tell us what you need and we will get back to you with how we can help.',
  to: '/contact',
  label: 'Get in touch'
})
</script>

<template>
  <section class="py-20 bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ title }}</h2>
      <p class="text-gray-400 text-lg mb-8">{{ text }}</p>
      <NuxtLink :to="to"
        class="inline-flex items-center px-6 py-3 rounded-lg bg-[#23b573] text-white font-medium hover:bg-[#1ea065] transition-colors">
        {{ label }}
        <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
      </NuxtLink>
    </div>
  </section>
</template>
