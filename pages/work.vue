<script setup lang="ts">
import { projects } from '~/data/site'

useHead({ title: 'Our Work | Inspirilab' })
</script>

<template>
  <div>
    <PageHeader title="Our" highlight="Work"
      subtitle="A selection of products, websites and solutions we have built and run for our clients and partners." />

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8">
          <ProjectCard v-for="p in projects" :key="p.name" :project="p" />
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
