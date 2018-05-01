/**
 * vue-sticky
 */
import Sticky from './directives/sticky'

export default {
  install(Vue) {

    const state = {
      state: 0,
      gap: 0,
      overflow: false,
      $window: {
        height: 0
      },
      target: {
        $el: '',
        style: {},
        top: 0,
        bottom: 0
      },
      track: {
        $el: '',
        style: {},
        top: 0,
        bottom: 0
      },
      options: {
        stickyTop: 0,
        zIndex: 100,
        useAcceleration: true
      },
      reload: () => { return }
    };

    Vue.util.defineReactive(Vue.prototype, '$sticky', state)
    Vue.directive('sticky', Sticky)
  }
}