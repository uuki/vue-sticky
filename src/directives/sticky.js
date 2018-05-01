let listenAction

export default {
  bind(el, binding, vnode) {
    vnode.context.$sticky.target.$el = el
    vnode.context.$sticky.target.style = vnode.context.$sticky.target.$el.style
    vnode.context.$sticky.options = Object.assign(vnode.context.$sticky.options, binding.value)
    vnode.context.$sticky.options.stickyTop = Math.abs(vnode.context.$sticky.options.stickyTop)

    vnode.context.$sticky.target.style.position = '-webkit-sticky'
    vnode.context.$sticky.target.style.position = 'sticky'

    /**
     * if the browser support css sticky
     */
    if (~vnode.context.$sticky.target.style.position.indexOf('sticky')) {
      vnode.context.$sticky.target.style.top = `${vnode.context.$sticky.options.stickyTop}px`
      vnode.context.$sticky.target.style.zIndex = vnode.context.$sticky.options.zIndex
      return
    }

    /**
     * for legacy browser
     */
    vnode.context.$sticky.target.style.position = 'relative'
    vnode.context.$sticky.target.style.height = '100%'

    vnode.context.$sticky.track.$el = el.firstElementChild
    vnode.context.$sticky.track.$el.classList.add('v-sticky-track')
    vnode.context.$sticky.track.style = vnode.context.$sticky.track.$el.style
    vnode.context.$sticky.track.style.cssText = `left: auto; right: auto; z-index: ${vnode.context.$sticky.options.zIndex};
                                                  ${vnode.context.$sticky.track.style.cssText}`

    if(vnode.context.$sticky.options.useAcceleration) {
      vnode.context.$sticky.track.style.transform = 'translate3d(0, 0, 0)'
    }

    const sticky = () => {
      vnode.context.$sticky.track.style.position = 'fixed'
      vnode.context.$sticky.track.style.width = `${vnode.context.$sticky.target.$el.clientWidth}px`

      if(vnode.context.$sticky.state === 2) { // direction up
        vnode.context.$sticky.track.style.bottom = ''
        vnode.context.$sticky.track.style.top = `${vnode.context.$sticky.options.stickyTop}px`
      } else { // direction down
        if(vnode.context.$sticky.overflow) {
          vnode.context.$sticky.track.style.bottom = '0'
        } else {
          vnode.context.$sticky.track.style.top = `${vnode.context.$sticky.options.stickyTop}px`
        }
      }

      vnode.context.$sticky.state = 1
    }

    const end = () => {
      vnode.context.$sticky.track.style.position = 'absolute'
      vnode.context.$sticky.track.style.width = '100%'
      vnode.context.$sticky.track.style.top = ''
      vnode.context.$sticky.track.style.bottom = '0'

      vnode.context.$sticky.state = 2
    }

    const reset = () => {
      vnode.context.$sticky.track.style.position = ''
      vnode.context.$sticky.track.style.top = ''
      vnode.context.$sticky.track.style.bottom = ''
      vnode.context.$sticky.track.style.width = ''

      vnode.context.$sticky.state = 0
    }

    const check = () => {
      vnode.context.$sticky.target.top = vnode.context.$sticky.target.$el.getBoundingClientRect().top - vnode.context.$sticky.options.stickyTop;
      vnode.context.$sticky.track.top = vnode.context.$sticky.track.$el.getBoundingClientRect().top - vnode.context.$sticky.options.stickyTop;
      vnode.context.$sticky.target.bottom = vnode.context.$sticky.target.$el.getBoundingClientRect().bottom - vnode.context.$sticky.$window.height;
      vnode.context.$sticky.track.bottom = vnode.context.$sticky.track.$el.getBoundingClientRect().bottom - vnode.context.$sticky.$window.height;

      if(!vnode.context.$sticky.overflow) {
        vnode.context.$sticky.target.bottom += vnode.context.$sticky.gap
      }

      if(vnode.context.$sticky.target.top > 0) {
        if (!vnode.context.$sticky.state) { return }
        reset()
        return
      }

      if(vnode.context.$sticky.target.bottom < 0) {
        if(vnode.context.$sticky.state === 2) { return }
        end()
        return
      }

      if(vnode.context.$sticky.state === 1) { return }

      if(vnode.context.$sticky.state === 0) {
        if(vnode.context.$sticky.track.bottom < 0) {
          sticky()
        }
      }

      if(vnode.context.$sticky.state === 2) {
        if(vnode.context.$sticky.track.top > 0) {
          sticky()
        }
      }
    }

    listenAction = () => {
      if(!window.requestAnimationFrame) {
        return setTimeout(check, 16)
      }

      window.requestAnimationFrame(check)
    }

    vnode.context.$sticky.reload = () => {
      vnode.context.$sticky.$window.height = document.documentElement.clientHeight
      vnode.context.$sticky.gap = vnode.context.$sticky.$window.height - (vnode.context.$sticky.track.$el.scrollHeight + vnode.context.$sticky.options.stickyTop)
      vnode.context.$sticky.overflow = (vnode.context.$sticky.gap < 0)

      listenAction();
    }

    vnode.context.$sticky.reload();

    window.addEventListener('scroll', listenAction)
    window.addEventListener('resize', vnode.context.$sticky.reload)
  },
  unbind(el, binding, vnode) {

    window.removeEventListener('scroll', listenAction, false)
    window.removeEventListener('resize', vnode.context.$sticky.reload, false)
  },
  componentUpdated(el, binding, vnode) {
    vnode.context.$sticky.reload()
  },
  update(el, binding, vnode) {
    vnode.context.$sticky.reload()
  }
}