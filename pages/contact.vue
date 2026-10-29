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
    <PageHeader
      title="Get in"
      highlight="touch"
      subtitle="Book a consultation with Rene, or tell us about a product you want built."
    />

    <section class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <!-- Left: form or LinkedIn fallback -->
        <div class="lg:col-span-7">
          <form v-if="links.email" class="space-y-6" @submit.prevent="submit">
            <div>
              <label for="type" class="block text-sm font-medium text-[var(--ink)] mb-2">What is this about?</label>
              <select
                id="type"
                v-model="form.type"
                class="w-full rounded-[10px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-[var(--ink)] focus:border-[var(--brand-deep)] focus:outline-none transition-colors"
              >
                <option v-for="t in types" :key="t">{{ t }}</option>
              </select>
            </div>

            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-[var(--ink)] mb-2">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full rounded-[10px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-[var(--ink)] focus:border-[var(--brand-deep)] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label for="company" class="block text-sm font-medium text-[var(--ink)] mb-2">Company (optional)</label>
                <input
                  id="company"
                  v-model="form.company"
                  class="w-full rounded-[10px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-[var(--ink)] focus:border-[var(--brand-deep)] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-[var(--ink)] mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full rounded-[10px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-[var(--ink)] focus:border-[var(--brand-deep)] focus:outline-none transition-colors resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn-primary justify-center"
            >
              Send enquiry
              <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5" />
            </button>
          </form>

          <div v-else class="rounded-[14px] border border-[var(--line)] bg-[var(--paper)] p-8 md:p-10">
            <h2 class="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] mb-4">Message us on LinkedIn</h2>
            <p class="text-[var(--ink-2)] mb-8">Send us a message on LinkedIn and we will get back to you.</p>
            <div class="flex flex-col items-start gap-3">
              <a
                :href="links.reneLinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary justify-center"
              >
                Book a consultation with Rene
                <UIcon name="i-heroicons-arrow-up-right" class="w-4 h-4" />
              </a>
              <a
                :href="links.companyLinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[var(--line)] px-5 py-3 font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--brand)] focus-visible:outline-offset-2"
              >
                Message Inspirilab
                <UIcon name="i-heroicons-arrow-up-right" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <!-- Right: details panel -->
        <div class="lg:col-span-5">
          <div class="rounded-[14px] bg-[var(--mist)] p-8 md:p-10 space-y-8">
            <div>
              <h3 class="text-sm font-medium text-[var(--ink-2)] mb-3">Office</h3>
              <address class="not-italic leading-relaxed text-[var(--ink)]">
                <template v-for="line in address" :key="line">{{ line }}<br /></template>
              </address>
            </div>

            <div v-if="links.email">
              <h3 class="text-sm font-medium text-[var(--ink-2)] mb-3">Email</h3>
              <a :href="`mailto:${links.email}`" class="text-[var(--brand-deep)] hover:underline">{{ links.email }}</a>
            </div>

            <div>
              <h3 class="text-sm font-medium text-[var(--ink-2)] mb-3">LinkedIn</h3>
              <ul class="space-y-2">
                <li>
                  <a
                    :href="links.companyLinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-[var(--brand-deep)] hover:underline"
                  >
                    Inspirilab
                    <UIcon name="i-heroicons-arrow-up-right" class="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    :href="links.reneLinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-[var(--brand-deep)] hover:underline"
                  >
                    Rene Fischer-Bernard
                    <UIcon name="i-heroicons-arrow-up-right" class="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
