<script setup lang="ts">
import { services, projects, partners } from '~/data/site'

useHead({ title: 'Inspirilab | Software, AI & Blockchain Solutions' })

const technologies = [
  { icon: 'i-heroicons-cpu-chip', name: 'AI', text: 'Machine learning and AI systems that help software learn, reason and automate decisions.' },
  { icon: 'i-heroicons-shield-check', name: 'DeAI', text: 'Decentralized AI - AI systems distributed across blockchain networks, ensuring transparency and eliminating single points of failure.' },
  { icon: 'i-heroicons-cube', name: 'Blockchain', text: 'Distributed ledger technology that creates secure, transparent, and immutable records across a network.' },
  { icon: 'i-heroicons-currency-dollar', name: 'DeFi', text: 'Decentralized Finance - financial services built on blockchain, enabling peer-to-peer transactions without intermediaries.' },
  { icon: 'i-heroicons-cube-transparent', name: 'Ethereum', text: 'A decentralized platform for smart contracts and decentralized applications (dApps).' },
  { icon: 'i-heroicons-currency-dollar', name: 'Bitcoin', text: 'The first and most well-known cryptocurrency, running on a decentralized peer-to-peer network.' }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#23b573]/10 to-white"></div>
      <div class="absolute inset-0 opacity-50"
        style="background-image: radial-gradient(circle at 30px 30px, #23b573 2px, transparent 2px); background-size: 60px 60px;">
      </div>
      <div class="absolute top-20 left-20 w-32 h-32 bg-[#23b573]/20 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-48 h-48 bg-[#23b573]/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div class="mb-8">
          <div class="inline-block bg-gray-900 rounded-2xl px-4 shadow-lg">
            <img src="/logo.png" alt="Inspirilab" class="mt-8 h-24 w-auto mx-auto mb-0" />
          </div>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to
          <span class="text-[#23b573] block">Inspirilab</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          We build SaaS products, AI tools, websites and blockchain solutions, and advise businesses on the technology behind them.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink to="/services"
            class="px-6 py-3 rounded-lg bg-[#23b573] text-white font-medium hover:bg-[#1ea065] transition-colors">Our services</NuxtLink>
          <NuxtLink to="/work"
            class="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:border-[#23b573] hover:text-[#23b573] transition-colors">See our work</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services teaser -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What we <span class="text-[#23b573]">do</span></h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">From idea to launch, and the advice to get there.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <NuxtLink v-for="s in services" :key="s.slug" :to="`/services#${s.slug}`" class="block">
            <UCard class="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-12 h-12 bg-[#23b573]/10 rounded-lg flex items-center justify-center mb-4">
                <UIcon :name="s.icon" class="w-6 h-6 text-[#23b573]" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ s.title }}</h3>
              <p class="text-gray-600 text-sm">{{ s.summary }}</p>
            </UCard>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Selected work -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900">Selected <span class="text-[#23b573]">work</span></h2>
          <NuxtLink to="/work" class="text-[#23b573] hover:text-[#1ea065] font-medium inline-flex items-center">
            All projects <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
          </NuxtLink>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="p in projects.slice(0, 3)" :key="p.name" :project="p" />
        </div>
      </div>
    </section>

    <!-- Consulting teaser -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <UCard class="p-8 md:p-12">
          <div class="md:flex md:items-center md:justify-between gap-8">
            <div class="mb-6 md:mb-0">
              <p class="text-xs font-medium tracking-widest text-[#23b573] uppercase mb-2">Consulting</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-3">Need expert advice before you build?</h2>
              <p class="text-gray-600">
                Rene Fischer-Bernard brings 15+ years in blockchain, innovation and energy to help organisations
                choose and apply the right technology.
              </p>
            </div>
            <NuxtLink to="/consulting"
              class="shrink-0 inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
              Consulting services <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
            </NuxtLink>
          </div>
        </UCard>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About <span class="text-[#23b573]">Inspirilab</span></h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Inspirilab Sdn. Bhd. is an IT consultation and solution design company based in Cyberjaya, Malaysia.
            We are a team of passionate innovators dedicated to creating solutions that inspire and transform.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <UCard v-for="v in [
            { icon: 'i-heroicons-light-bulb', t: 'Innovation', d: 'Pushing boundaries and exploring new possibilities in every project we undertake.' },
            { icon: 'i-heroicons-cog-6-tooth', t: 'Technology', d: 'Leveraging cutting-edge technology to create solutions that make a difference.' },
            { icon: 'i-heroicons-heart', t: 'Passion', d: 'Driven by passion and commitment to excellence in everything we do.' }
          ]" :key="v.t" class="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#23b573]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon :name="v.icon" class="w-8 h-8 text-[#23b573]" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ v.t }}</h3>
            <p class="text-gray-600">{{ v.d }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section id="technologies" class="py-20 bg-gray-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our <span class="text-[#23b573]">Technologies</span></h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Exploring cutting-edge technologies that drive innovation and transformation.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <UCard v-for="t in technologies" :key="t.name" class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-12 h-12 bg-[#23b573]/10 rounded-lg flex items-center justify-center mb-4">
              <UIcon :name="t.icon" class="w-6 h-6 text-[#23b573]" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ t.name }}</h3>
            <p class="text-gray-600 text-sm">{{ t.text }}</p>
          </UCard>
        </div>

        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-8">Our Flagship Open-Source Partners</h3>
          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <UCard v-for="p in partners" :key="p.name" class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-[#23b573]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-globe-alt" class="w-8 h-8 text-[#23b573]" />
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ p.name }}</h4>
              <p class="text-gray-600 text-sm mb-4">{{ p.description }}</p>
              <a :href="p.url" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center text-[#23b573] hover:text-[#1ea065] transition-colors">
                Visit Project <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 ml-2" />
              </a>
            </UCard>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
