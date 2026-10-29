<script setup lang="ts">
defineProps<{ title: string; highlight?: string; subtitle?: string }>()
</script>

<template>
  <section class="bg-[var(--mist)] pt-16 pb-14 md:pt-24 md:pb-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] tracking-[-0.03em] font-semibold text-[var(--ink)] text-balance mb-6">
        {{ title }}{{ highlight ? ' ' : '' }}<span v-if="highlight" class="text-[var(--brand-deep)]">{{ highlight }}</span>
      </h1>
      <p v-if="subtitle" class="text-lg text-[var(--ink-2)] max-w-2xl leading-relaxed">{{ subtitle }}</p>
    </div>
  </section>
</template>
