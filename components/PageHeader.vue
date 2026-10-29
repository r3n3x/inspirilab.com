<script setup lang="ts">
defineProps<{ title: string; highlight?: string; subtitle?: string }>()
</script>

<template>
  <section class="relative py-20 overflow-hidden bg-gradient-to-br from-[#23b573]/10 to-white">
    <div class="absolute inset-0 opacity-40"
      style="background-image: radial-gradient(circle at 30px 30px, #23b573 2px, transparent 2px); background-size: 60px 60px;">
    </div>
    <div class="relative max-w-4xl mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        {{ title }} <span v-if="highlight" class="text-[#23b573]">{{ highlight }}</span>
      </h1>
      <p v-if="subtitle" class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{{ subtitle }}</p>
    </div>
  </section>
</template>
