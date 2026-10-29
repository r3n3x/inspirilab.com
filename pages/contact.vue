<script setup lang="ts">
import { reactive } from 'vue'
import { links, address } from '~/data/site'

useHead({ title: 'Contact | Inspirilab' })

const types = ['Project / development', 'Consulting', 'Speaking or training', 'Partnership', 'Other']
const route = useRoute()
const form = reactive({
  type: route.query.type === 'consulting' ? 'Consulting' : types[0],
  name: '',
  company: '',
  message: ''
})

// No backend yet: the form opens the visitor's email app with the enquiry filled in.
function submit() {
  const subject = `[${form.type}] Enquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`
  const body = `${form.message}\n\n${form.name}${form.company ? `\n${form.company}` : ''}`
  window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div>
    <PageHeader title="Get in" highlight="Touch"
      subtitle="Tell us about your project, or book a consultation. We usually reply within a few working days." />

    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12">
        <!-- Form -->
        <div class="md:col-span-3">
          <form v-if="links.email" class="space-y-5" @submit.prevent="submit">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1" for="type">What is this about?</label>
              <select id="type" v-model="form.type"
                class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#23b573] focus:outline-none">
                <option v-for="t in types" :key="t">{{ t }}</option>
              </select>
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1" for="name">Name</label>
                <input id="name" v-model="form.name" required
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#23b573] focus:outline-none" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1" for="company">Company (optional)</label>
                <input id="company" v-model="form.company"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#23b573] focus:outline-none" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1" for="message">Message</label>
              <textarea id="message" v-model="form.message" required rows="6"
                class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#23b573] focus:outline-none"></textarea>
            </div>
            <button type="submit"
              class="inline-flex items-center px-6 py-3 rounded-lg bg-[#23b573] text-white font-medium hover:bg-[#1ea065] transition-colors">
              Send enquiry <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5 ml-2" />
            </button>
          </form>

          <div v-else class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-900">Reach us on LinkedIn</h2>
            <p class="text-gray-600">Send us a message on LinkedIn and we will get back to you.</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a :href="links.companyLinkedIn" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#23b573] text-white font-medium hover:bg-[#1ea065] transition-colors">
                Message Inspirilab
              </a>
              <a :href="links.reneLinkedIn" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:border-[#23b573] hover:text-[#23b573] transition-colors">
                Consulting: message Rene
              </a>
            </div>
          </div>
        </div>

        <!-- Details -->
        <div class="md:col-span-2 space-y-8">
          <div>
            <p class="text-xs font-medium tracking-widest text-gray-500 uppercase mb-3">Office</p>
            <address class="text-gray-700 not-italic leading-relaxed">
              <template v-for="line in address" :key="line">{{ line }}<br /></template>
            </address>
          </div>
          <div v-if="links.email">
            <p class="text-xs font-medium tracking-widest text-gray-500 uppercase mb-3">Email</p>
            <a :href="`mailto:${links.email}`" class="text-[#23b573] hover:text-[#1ea065]">{{ links.email }}</a>
          </div>
          <div>
            <p class="text-xs font-medium tracking-widest text-gray-500 uppercase mb-3">Social</p>
            <ul class="space-y-2">
              <li><a :href="links.companyLinkedIn" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-[#23b573]">Inspirilab on LinkedIn</a></li>
              <li><a :href="links.reneLinkedIn" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-[#23b573]">Rene Fischer-Bernard on LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
