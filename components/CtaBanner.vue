<script setup lang="ts">
withDefaults(defineProps<{ title?: string; text?: string; to?: string; label?: string }>(), {
  title: 'Talk to Rene about your next step',
  text: 'Book a consultation on blockchain, AI or digital innovation, or tell us about a product you want built.',
  to: '/contact?type=consulting',
  label: 'Book a consultation'
})
</script>

<template>
  <section class="bg-[var(--ink)] text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div class="md:grid md:grid-cols-2 md:gap-12 items-center">
        <div>
          <h2 class="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-wrap-balance mb-4">{{ title }}</h2>
          <p class="text-[#b7cfc3] text-lg leading-relaxed max-w-prose">{{ text }}</p>
        </div>
        <div class="mt-8 md:mt-0 md:justify-self-end">
          <NuxtLink
            :to="to"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] bg-[var(--brand)] text-[var(--ink)] font-medium transition-colors duration-150 hover:bg-[var(--brand-deep)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
          >
            {{ label }}
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
