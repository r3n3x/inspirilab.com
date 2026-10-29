<script setup lang="ts">
import { services, projects } from '~/data/site'

useHead({ title: 'Services | Inspirilab' })
const projectsFor = (slug: string) => projects.filter(p => p.service === slug)
</script>

<template>
  <div>
    <PageHeader title="Our" highlight="Services"
      subtitle="We build and run software products, websites and blockchain solutions, and advise on the technology behind them." />

    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div v-for="(s, i) in services" :id="s.slug" :key="s.slug"
          class="grid md:grid-cols-5 gap-8 items-start pb-12" :class="{ 'border-b border-gray-100': i < services.length - 1 }">
          <div class="md:col-span-3">
            <div class="w-12 h-12 bg-[#23b573]/10 rounded-lg flex items-center justify-center mb-4">
              <UIcon :name="s.icon" class="w-6 h-6 text-[#23b573]" />
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ s.title }}</h2>
            <p class="text-gray-600 text-lg mb-6">{{ s.summary }}</p>
            <ul class="space-y-2">
              <li v-for="pt in s.points" :key="pt" class="flex items-start text-gray-700">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-[#23b573] mr-3 mt-0.5 shrink-0" />
                {{ pt }}
              </li>
            </ul>
            <NuxtLink v-if="s.slug === 'consulting'" to="/consulting"
              class="inline-flex items-center mt-6 text-[#23b573] hover:text-[#1ea065] font-medium">
              More on consulting <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
            </NuxtLink>
          </div>
          <div class="md:col-span-2">
            <template v-if="projectsFor(s.slug).length">
              <p class="text-xs font-medium tracking-widest text-gray-500 uppercase mb-4">Related work</p>
              <div class="space-y-3">
                <NuxtLink v-for="p in projectsFor(s.slug)" :key="p.name" to="/work"
                  class="block rounded-lg border border-gray-200 p-4 hover:border-[#23b573] transition-colors">
                  <p class="font-semibold text-gray-900">{{ p.name }}</p>
                  <p class="text-sm text-gray-500">{{ p.category }}</p>
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
