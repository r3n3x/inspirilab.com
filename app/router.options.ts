import type { RouterConfig } from '@nuxt/schema'

// Scroll handling that doesn't fight the page transition.
// Same-page anchors (#section) scroll smoothly here. For a page change we only remember where to land;
// app.vue applies it in the transition's after-leave hook, i.e. once the old page is gone and before
// the new one slides in, so neither the old page jumps nor a smooth scroll races the arrival.
export const pendingScroll: { top: number; hash?: string } = { top: 0 }

export default <RouterConfig>{
  scrollBehavior(to, from, saved) {
    if (to.path === from.path) {
      return to.hash ? { el: to.hash, top: 80, behavior: 'smooth' } : false
    }
    pendingScroll.top = saved?.top ?? 0
    pendingScroll.hash = saved ? undefined : to.hash || undefined
    return false
  }
}
