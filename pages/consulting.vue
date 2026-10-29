<script setup lang="ts">
import { rene, links, offerings, topics, talks } from '~/data/site'

useHead({ title: 'Consulting | Inspirilab' })
</script>

<template>
  <div>
    <PageHeader title="Consulting with" highlight="Mr Rene" :subtitle="rene.headline" />

    <!-- Bio -->
    <section class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <!-- Left: sticky profile panel -->
        <div class="lg:col-span-4 lg:sticky lg:top-24">
          <div class="rounded-[14px] border border-[var(--line)] bg-[var(--paper)] p-6 md:p-8">
            <!-- replace with rene.photo when available -->
            <div class="w-20 h-20 rounded-full bg-[var(--ink)] flex items-center justify-center mb-5">
              <span class="text-2xl font-semibold text-white">RF</span>
            </div>
            <h2 class="text-xl font-semibold text-[var(--ink)] mb-1">{{ rene.name }}</h2>
            <p class="text-sm text-[var(--ink-2)] mb-6">{{ rene.role }}</p>
            <ul class="space-y-3 mb-6">
              <li v-for="c in rene.credentials" :key="c" class="flex items-start gap-2 text-sm text-[var(--ink-2)]">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-[var(--brand-deep)] mt-0.5 shrink-0" />
                <span>{{ c }}</span>
              </li>
            </ul>
            <a :href="links.reneLinkedIn" target="_blank" rel="noopener"
              class="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-deep)] hover:text-[var(--ink)] transition-colors duration-150">
              View LinkedIn
              <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4" />
            </a>
            <NuxtLink to="/contact?type=consulting"
              class="btn-primary mt-6 block w-full text-center">
              Book a consultation
            </NuxtLink>
          </div>
        </div>

        <!-- Right: bio + offerings -->
        <div class="lg:col-span-8">
          <div class="max-w-prose space-y-5 text-lg leading-relaxed text-[var(--ink)]">
            <p v-for="(para, i) in rene.bio" :key="i">{{ para }}</p>
          </div>

          <h2 class="text-[1.9rem] md:text-[2.5rem] font-semibold tracking-[-0.03em] text-[var(--ink)] mt-14 mb-6 text-wrap-balance">
            What he advises on
          </h2>
          <div class="divide-y divide-[var(--line)]">
            <div v-for="o in offerings" :key="o.title" class="py-5 flex items-start gap-4">
              <div class="w-10 h-10 rounded-[10px] bg-[var(--mist)] flex items-center justify-center shrink-0">
                <UIcon :name="o.icon" class="w-5 h-5 text-[var(--brand-deep)]" />
              </div>
              <div>
                <h3 class="text-[1.25rem] font-semibold text-[var(--ink)] mb-1">{{ o.title }}</h3>
                <p class="text-[var(--ink-2)] leading-relaxed">{{ o.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Speaking -->
    <section class="py-20 md:py-28 bg-[var(--mist)]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 class="text-[1.9rem] md:text-[2.5rem] font-semibold tracking-[-0.03em] text-[var(--ink)] mb-6 text-wrap-balance">
            Speaking topics
          </h2>
          <ul class="space-y-3">
            <li v-for="t in topics" :key="t" class="flex items-start gap-3 text-[var(--ink)]">
              <UIcon name="i-heroicons-check" class="w-5 h-5 text-[var(--brand-deep)] mt-0.5 shrink-0" />
              <span>{{ t }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-[1.9rem] md:text-[2.5rem] font-semibold tracking-[-0.03em] text-[var(--ink)] mb-6 text-wrap-balance">
            Selected appearances
          </h2>
          <ul class="divide-y divide-[var(--line)]">
            <li v-for="t in talks" :key="t.title" class="py-4 flex items-start gap-4">
              <span class="w-14 shrink-0 text-[var(--brand-deep)] font-medium font-variant-numeric:tabular-nums">{{ t.year }}</span>
              <div>
                <p class="text-[var(--ink)] font-medium">{{ t.title }}</p>
                <p class="text-sm text-[var(--ink-2)]">{{ t.place }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
