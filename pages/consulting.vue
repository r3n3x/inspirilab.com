<script setup lang="ts">
import { links } from '~/data/site'

useHead({ title: 'Consulting | Inspirilab' })

const offerings = [
  { icon: 'i-heroicons-light-bulb', title: 'Innovation & Technology Strategy', text: 'Advice on applying emerging technology to sharpen your organisation\'s competitive edge.' },
  { icon: 'i-heroicons-magnifying-glass', title: 'Web3 & Blockchain Idea Reviews', text: 'A no-frills, honest assessment of your Web3 or blockchain idea before you invest in building it.' },
  { icon: 'i-heroicons-cube', title: 'Blockchain Solutions for Industry', text: 'Ready-to-deploy blockchain solutions for product authenticity, consumer engagement and tamper-proof certificates.' },
  { icon: 'i-heroicons-shield-check', title: 'Decentralised AI', text: 'Where AI and blockchain meet, and how decentralised AI can work for your organisation.' },
  { icon: 'i-heroicons-currency-dollar', title: 'DeFi Advisory', text: 'Understanding decentralised finance and the opportunities it opens for you or your business.' },
  { icon: 'i-heroicons-microphone', title: 'Speaking & Training', text: 'Keynotes, panels, workshops and hackathon mentoring on blockchain, crypto, DeFi and innovation.' }
]

const topics = [
  'Introduction to blockchain & cryptocurrencies',
  'Industrial applications of blockchain',
  'DeFi, cryptocurrencies & stablecoins',
  'Startups & entrepreneurship',
  'Hackathons & innovation workshops'
]

const talks = [
  { year: '2025', title: 'SuperDeAI Event', place: 'Kuala Lumpur, Malaysia' },
  { year: '2021', title: 'Symbol Hackathon, Mentor', place: 'Online' },
  { year: '2019', title: 'Keynote, World Blockchain Summit', place: 'Kuala Lumpur, Malaysia' },
  { year: '2018', title: 'Intro to Blockchain and Use-Cases', place: 'Moscow, Russia' }
]
</script>

<template>
  <div>
    <PageHeader title="Technology" highlight="Consulting"
      subtitle="Independent, experienced advice on blockchain, decentralised AI and digital innovation, led by Rene Fischer-Bernard." />

    <!-- Profile -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 items-start">
        <div class="md:col-span-1">
          <UCard class="p-6 text-center">
            <div class="w-24 h-24 rounded-full bg-[#23b573]/10 flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl font-bold text-[#23b573]">RF</span>
            </div>
            <h2 class="text-xl font-semibold text-gray-900">Rene Fischer-Bernard</h2>
            <p class="text-sm text-gray-500 mb-4">Vice President, Inspirilab · Executive Director, LuxTag</p>
            <a :href="links.reneLinkedIn" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center text-[#23b573] hover:text-[#1ea065] text-sm font-medium">
              View LinkedIn <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 ml-2" />
            </a>
          </UCard>
        </div>
        <div class="md:col-span-2 space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            Rene is an international technopreneur with more than 15 years of experience across the blockchain and
            energy sectors. He co-founded LuxTag in 2017 and has led it since, after earlier work as a consultant and
            project manager for a range of organisations.
          </p>
          <p>
            He holds a German engineering diploma in Industrial Engineering from Hochschule Zittau/Görlitz and a
            HarvardX certificate in Energy Within Environmental Constraints. His focus is using blockchain to create
            real value, especially in industrial data integrity, renewable energy and sustainability.
          </p>
          <p>
            He is also active in the Morpheus decentralised AI community and ACCESS Blockchain Association Malaysia.
          </p>
        </div>
      </div>
    </section>

    <!-- Offerings -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How Rene can <span class="text-[#23b573]">help</span></h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard v-for="o in offerings" :key="o.title" class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-12 h-12 bg-[#23b573]/10 rounded-lg flex items-center justify-center mb-4">
              <UIcon :name="o.icon" class="w-6 h-6 text-[#23b573]" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ o.title }}</h3>
            <p class="text-gray-600 text-sm">{{ o.text }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Speaking -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Speaking topics</h2>
          <ul class="space-y-3">
            <li v-for="t in topics" :key="t" class="flex items-start text-gray-700">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-[#23b573] mr-3 mt-0.5 shrink-0" />{{ t }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Selected appearances</h2>
          <ul class="space-y-4">
            <li v-for="t in talks" :key="t.title" class="flex gap-4">
              <span class="text-[#23b573] font-semibold w-12 shrink-0">{{ t.year }}</span>
              <div>
                <p class="font-medium text-gray-900">{{ t.title }}</p>
                <p class="text-sm text-gray-500">{{ t.place }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <CtaBanner title="Book a consultation" text="Tell us about your organisation and what you want to achieve, and Rene will get back to you."
      label="Enquire now" to="/contact?type=consulting" />
  </div>
</template>
