<script setup lang="ts">
withDefaults(defineProps<{ title?: string; text?: string; to?: string; label?: string }>(), {
  title: 'Talk to us about your next step',
  text: 'Book a free first consultation with our team on blockchain, AI or digital innovation, or tell us about a product you want built.',
  to: '/contact?type=consulting',
  label: 'Book a free first consultation'
})
</script>

<template>
  <section class="bg-[var(--ink)] text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div class="flex items-center gap-3 mb-8" aria-hidden="true">
        <span class="w-6 h-6 rounded-full bg-[var(--ink)] border-[6px] border-white" />
        <span class="h-2 flex-1 max-w-xs rounded-full bg-white/80" />
        <span class="text-sm font-medium text-[var(--ink-band-secondary)]">Terminus · Interchange</span>
      </div>
      <div class="md:grid md:grid-cols-2 md:gap-12 items-center">
        <div>
          <h2 class="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] font-bold">{{ title }}</h2>
          <p class="mt-4 text-[var(--ink-band-secondary)] text-lg max-w-prose">{{ text }}</p>
        </div>
        <div class="mt-8 md:mt-0 md:justify-self-end">
          <NuxtLink :to="to" class="btn-primary !border-white">
            {{ label }} <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
