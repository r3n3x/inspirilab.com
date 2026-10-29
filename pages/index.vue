<script setup lang="ts">
import { services, projects, partners, rene, offerings } from '~/data/site'

useHead({ title: 'Inspirilab | Technology consulting & product development' })
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-[var(--paper)] pt-16 md:pt-24 pb-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div class="lg:col-span-7">
            <h1 class="rise text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] tracking-[-0.03em] font-bold text-[var(--ink)] text-balance mb-6">
              Technology consulting that turns into shipped products.
            </h1>
            <p class="text-[1.0625rem] leading-[1.65] text-[var(--ink-2)] max-w-xl mb-8">
              {{ rene.headline }} Led by Rene Fischer-Bernard, backed by a team that builds SaaS, AI, websites and blockchain solutions.
            </p>
            <div class="rise-2 flex flex-col sm:flex-row gap-4">
              <NuxtLink
                to="/contact?type=consulting"
                class="inline-flex items-center justify-center px-5 py-3 rounded-[10px] bg-[var(--brand)] text-[var(--ink)] font-medium hover:bg-[var(--brand-deep)] hover:text-white transition-colors duration-150"
              >
                Book a consultation
              </NuxtLink>
              <NuxtLink
                to="/services"
                class="inline-flex items-center justify-center px-5 py-3 rounded-[10px] border border-[var(--line)] text-[var(--ink)] font-medium hover:border-[var(--ink)] transition-colors duration-150"
              >
                Explore our services
              </NuxtLink>
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="bg-[var(--mist)] rounded-[14px] p-6 md:p-8">
              <h2 class="text-[1.25rem] font-semibold text-[var(--ink)] mb-1">{{ rene.name }}</h2>
              <p class="text-[0.875rem] text-[var(--ink-2)] mb-6">{{ rene.role }}</p>
              <ul class="space-y-3 mb-6">
                <li v-for="c in rene.credentials" :key="c" class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check" aria-hidden="true" class="w-5 h-5 text-[var(--brand-deep)] shrink-0 mt-0.5" />
                  <span class="text-[0.9375rem] text-[var(--ink)]">{{ c }}</span>
                </li>
              </ul>
              <NuxtLink
                to="/consulting"
                class="inline-flex items-center text-[var(--brand-deep)] hover:text-[var(--ink)] font-medium transition-colors duration-150"
              >
                About Rene
                <UIcon name="i-heroicons-arrow-right" aria-hidden="true" class="w-4 h-4 ml-1" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How Rene can help -->
    <section class="bg-[var(--mist)] py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] tracking-[-0.03em] font-bold text-[var(--ink)] text-balance mb-6">
          How Rene can help
        </h2>
        <div class="grid md:grid-cols-2 gap-x-12">
          <div
            v-for="(o, i) in offerings"
            :key="o.title"
            class="flex items-start gap-4 py-6 border-b border-[var(--line)]"
          >
            <div class="w-10 h-10 bg-[var(--paper)] rounded-[10px] flex items-center justify-center shrink-0">
              <UIcon :name="o.icon" aria-hidden="true" class="w-5 h-5 text-[var(--brand-deep)]" />
            </div>
            <div>
              <h3 class="text-[1.25rem] font-semibold text-[var(--ink)] mb-1">{{ o.title }}</h3>
              <p class="text-[0.9375rem] leading-[1.6] text-[var(--ink-2)]">{{ o.text }}</p>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <NuxtLink
            to="/consulting"
            class="inline-flex items-center text-[var(--brand-deep)] hover:text-[var(--ink)] font-medium transition-colors duration-150"
          >
            See consulting in detail
            <UIcon name="i-heroicons-arrow-right" aria-hidden="true" class="w-4 h-4 ml-1" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- We also build it -->
    <section class="bg-[var(--paper)] py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] tracking-[-0.03em] font-bold text-[var(--ink)] text-balance mb-3">
          We also build it
        </h2>
        <p class="text-[1.0625rem] text-[var(--ink-2)] mb-10 max-w-2xl">
          From strategy to a live product, our team designs, builds and runs the software behind these services.
        </p>
        <div>
          <NuxtLink
            v-for="(s, i) in services"
            :key="s.slug"
            :to="`/services#${s.slug}`"
            class="group flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6 py-6 md:py-8 border-b border-[var(--line)] first:border-t"
          >
            <div class="md:w-1/2">
              <h3 class="text-[1.5rem] font-semibold text-[var(--ink)] group-hover:text-[var(--brand-deep)] transition-colors duration-150">
                {{ s.title }}
              </h3>
            </div>
            <div class="flex items-center gap-4 md:w-1/2">
              <p class="text-[0.9375rem] leading-[1.6] text-[var(--ink-2)] flex-1">{{ s.summary }}</p>
              <UIcon
                name="i-heroicons-arrow-right"
                aria-hidden="true"
                class="w-5 h-5 text-[var(--ink-2)] group-hover:text-[var(--brand-deep)] group-hover:translate-x-1 transition-all duration-150 shrink-0"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Selected work -->
    <section class="bg-[var(--mist)] py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between mb-10 gap-4">
          <h2 class="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] tracking-[-0.03em] font-bold text-[var(--ink)] text-balance">
            Selected work
          </h2>
          <NuxtLink
            to="/work"
            class="inline-flex items-center text-[var(--brand-deep)] hover:text-[var(--ink)] font-medium transition-colors duration-150 shrink-0"
          >
            All projects
            <UIcon name="i-heroicons-arrow-right" aria-hidden="true" class="w-4 h-4 ml-1" />
          </NuxtLink>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <ProjectCard v-for="p in projects.slice(0, 4)" :key="p.name" :project="p" />
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="bg-[var(--paper)] py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-[1.25rem] font-semibold text-[var(--ink)] mb-8">Open-source partners</h2>
        <div class="grid md:grid-cols-2 gap-x-12">
          <div
            v-for="p in partners"
            :key="p.name"
            class="py-6 border-b border-[var(--line)]"
          >
            <div class="flex items-center justify-between gap-4 mb-2">
              <h3 class="text-[1.125rem] font-semibold text-[var(--ink)]">{{ p.name }}</h3>
              <a
                :href="p.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-[var(--brand-deep)] hover:text-[var(--ink)] font-medium transition-colors duration-150"
              >
                Visit
                <UIcon name="i-heroicons-arrow-top-right-on-square" aria-hidden="true" class="w-4 h-4 ml-1" />
              </a>
            </div>
            <p class="text-[0.9375rem] leading-[1.6] text-[var(--ink-2)]">{{ p.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
