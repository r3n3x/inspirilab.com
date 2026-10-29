<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { nav, links, address, services } from '~/data/site'

const currentYear = computed(() => new Date().getFullYear())
const menuOpen = ref(false)
const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <UApp>
    <div class="min-h-screen bg-white flex flex-col">
      <!-- Navigation -->
      <nav class="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <NuxtLink to="/" class="flex items-center">
              <img src="/logo.png" alt="Inspirilab" class="h-12 w-auto" />
            </NuxtLink>
            <div class="hidden md:flex items-center space-x-8 ml-auto">
              <NuxtLink v-for="item in nav" :key="item.to" :to="item.to"
                class="text-gray-300 hover:text-[#23b573] transition-colors"
                exact-active-class="!text-[#23b573]">{{ item.label }}</NuxtLink>
            </div>
            <button class="md:hidden text-gray-300 p-2" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
              <UIcon :name="menuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
            </button>
          </div>
        </div>
        <div v-if="menuOpen" class="md:hidden border-t border-gray-700 px-4 py-3 space-y-1">
          <NuxtLink v-for="item in nav" :key="item.to" :to="item.to"
            class="block py-2 text-gray-300 hover:text-[#23b573]"
            exact-active-class="!text-[#23b573]">{{ item.label }}</NuxtLink>
        </div>
      </nav>

      <main class="flex-1 pt-16">
        <NuxtPage />
      </main>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-12 pb-10 border-b border-gray-800">
            <div>
              <img src="/logo.png" alt="Inspirilab" class="h-15 w-auto mb-4" />
              <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
                Where innovation meets inspiration. Creating solutions that transform ideas into reality.
              </p>
            </div>

            <div>
              <p class="text-xs font-medium tracking-widest text-gray-500 uppercase mb-4">Company</p>
              <ul class="space-y-3">
                <li v-for="item in nav" :key="item.to">
                  <NuxtLink :to="item.to" class="text-gray-400 text-sm hover:text-[#23b573] transition-colors">{{ item.label }}</NuxtLink>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs font-medium tracking-widest text-gray-500 uppercase mb-4">Services</p>
              <ul class="space-y-3">
                <li v-for="s in services" :key="s.slug">
                  <NuxtLink :to="`/services#${s.slug}`" class="text-gray-400 text-sm hover:text-[#23b573] transition-colors">{{ s.title }}</NuxtLink>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs font-medium tracking-widest text-gray-500 uppercase mb-4">Contact</p>
              <address class="text-gray-400 text-sm not-italic leading-relaxed mb-5">
                <template v-for="line in address" :key="line">{{ line }}<br /></template>
              </address>
              <a v-if="links.email" :href="`mailto:${links.email}`"
                class="block text-gray-400 text-sm hover:text-[#23b573] mb-4">{{ links.email }}</a>
              <div class="flex items-center gap-3">
                <a :href="links.companyLinkedIn" target="_blank" rel="noopener noreferrer"
                  class="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn">
                  <img src="/linkedin-logo.svg" alt="LinkedIn" class="h-4 w-4" />
                </a>
                <span class="text-gray-400 text-sm">Connect with us</span>
              </div>
            </div>
          </div>

          <div class="pt-8 text-center">
            <p class="text-gray-500 text-s">&copy; {{ currentYear }} Inspirilab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </UApp>
</template>
