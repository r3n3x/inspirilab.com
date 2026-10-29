<script setup lang="ts">
defineProps<{ title: string; highlight?: string; subtitle?: string; color?: string }>()
</script>

<template>
  <section class="pt-10 md:pt-14 pb-10 md:pb-14">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="station-sign max-w-4xl">
        <h1 class="text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.03] font-bold text-white">
          {{ title }}{{ highlight ? ' ' : '' }}<span v-if="highlight" :style="{ color: color ?? 'var(--brand)' }">{{ highlight }}</span>
        </h1>
        <p v-if="subtitle" class="mt-4 text-lg text-[var(--ink-band-secondary)] max-w-2xl">{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>
