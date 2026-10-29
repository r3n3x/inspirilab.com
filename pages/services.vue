<script setup lang="ts">
import { services, projects } from '~/data/site'

useHead({ title: 'Services | Inspirilab' })

const projectsFor = (slug: string) => projects.filter(p => p.service === slug)
</script>

<template>
  <div>
    <PageHeader
      title="What we"
      highlight="build"
      subtitle="Software products, websites and blockchain solutions, designed, built and run by our team in Cyberjaya."
    />

    <section class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-12">
          <!-- Sticky in-page nav -->
          <nav class="lg:col-span-3 lg:sticky lg:top-24 lg:self-start mb-10 lg:mb-0" aria-label="Services">
            <ul class="flex flex-wrap gap-x-6 gap-y-2 lg:flex-col lg:gap-y-3">
              <li v-for="s in services" :key="s.slug">
                <NuxtLink
                  :to="`/services#${s.slug}`"
                  class="text-sm font-medium text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors duration-150"
                >
                  {{ s.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Service sections -->
          <div class="lg:col-span-9">
            <div
              v-for="(s, i) in services"
              :id="s.slug"
              :key="s.slug"
              class="py-12 md:py-16"
              :class="{ 'border-t border-[var(--line)]': i > 0 }"
            >
              <div class="flex items-center gap-4 mb-5">
                <div class="w-12 h-12 rounded-[10px] bg-[var(--mist)] flex items-center justify-center shrink-0">
                  <UIcon :name="s.icon" class="w-6 h-6 text-[var(--brand-deep)]" />
                </div>
                <h2 class="text-[clamp(1.9rem,3.6vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--ink)] text-balance">
                  {{ s.title }}
                </h2>
              </div>

              <p class="text-lg text-[var(--ink-2)] leading-[1.65] max-w-prose mb-8">
                {{ s.summary }}
              </p>

              <ul class="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                <li v-for="pt in s.points" :key="pt" class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-[var(--brand-deep)] mt-0.5 shrink-0" />
                  <span class="text-[var(--ink)] leading-[1.65]">{{ pt }}</span>
                </li>
              </ul>

              <NuxtLink
                v-if="s.slug === 'consulting'"
                to="/contact?type=consulting"
                class="inline-flex items-center justify-center px-5 py-3 rounded-[10px] font-medium text-[var(--ink)] bg-[var(--brand)] hover:bg-[var(--brand-deep)] hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--brand)] focus-visible:outline-offset-2"
              >
                Book a consultation
              </NuxtLink>

              <!-- Related work -->
              <div v-if="projectsFor(s.slug).length" class="mt-10 pt-8 border-t border-[var(--line)]">
                <p class="text-sm font-medium text-[var(--ink-2)] mb-4">Related work</p>
                <ul class="space-y-2">
                  <li v-for="p in projectsFor(s.slug)" :key="p.name">
                    <a
                      v-if="p.url"
                      :href="p.url"
                      target="_blank"
                      rel="noopener"
                      class="group flex items-center justify-between gap-4 py-2 -mx-2 px-2 rounded-[10px] hover:bg-[var(--mist)] transition-colors duration-150"
                    >
                      <span class="flex items-center gap-3 min-w-0">
                        <span class="font-medium text-[var(--ink)] group-hover:text-[var(--brand-deep)] transition-colors duration-150 truncate">
                          {{ p.name }}
                        </span>
                        <span class="text-sm text-[var(--ink-2)] shrink-0">{{ p.category }}</span>
                      </span>
                      <UIcon name="i-heroicons-arrow-up-right" class="w-4 h-4 text-[var(--ink-2)] group-hover:text-[var(--brand-deep)] transition-colors duration-150 shrink-0" />
                    </a>
                    <span v-else class="flex items-center gap-3 py-2">
                      <span class="font-medium text-[var(--ink)]">{{ p.name }}</span>
                      <span class="text-sm text-[var(--ink-2)]">{{ p.category }}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Not sure what you need?"
      text="Start with a consultation. Rene will help you scope the right solution before anything gets built."
    />
  </div>
</template>
