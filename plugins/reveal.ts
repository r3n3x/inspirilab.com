// v-reveal: children of a list rise in with a capped stagger the first time it scrolls into view.
// Content stays visible by default; the hidden state is only applied once JS is running.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement) {
      if (typeof IntersectionObserver === 'undefined') return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      ;[...el.children].forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(i)))
      el.classList.add('reveal-ready')
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add('revealed')
          io.disconnect()
        }
      }, { rootMargin: '0px 0px -12% 0px' })
      io.observe(el)
    }
  })
})
