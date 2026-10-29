<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects } from '~/data/site'

useHead({ title: 'Our Work | Inspirilab' })

const categories = computed(() => {
  const set = new Set(projects.map((p) => p.category))
  return Array.from(set)
})

const active = ref('All')

const filtered = computed(() => {
  if (active.value === 'All') return projects
  return projects.filter((p) => p.category === active.value)
})
</script>

<template>
  <div>
    <PageHeader
      title="Our"
      highlight="work"
      subtitle="Products, websites and solutions we have built and run for clients and partners."
    />

    <section class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by category">
          <button
            type="button"
            :aria-pressed="active === 'All'"
            :class="[
              'px-4 py-2 rounded-[10px] text-sm font-medium transition-colors duration-150 border',
              active === 'All'
                ? 'bg-[var(--ink)] text-white border-[var(--ink)]'
                : 'bg-transparent text-[var(--ink-2)] border-[var(--line)] hover:border-[var(--ink)]'
            ]"
            @click="active = 'All'"
          >
            All
          </button>
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            :aria-pressed="active === cat"
            :class="[
              'px-4 py-2 rounded-[10px] text-sm font-medium transition-colors duration-150 border',
              active === cat
                ? 'bg-[var(--ink)] text-white border-[var(--ink)]'
                : 'bg-transparent text-[var(--ink-2)] border-[var(--line)] hover:border-[var(--ink)]'
            ]"
            @click="active = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <ProjectCard v-for="p in filtered" :key="p.name" :project="p" />
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
