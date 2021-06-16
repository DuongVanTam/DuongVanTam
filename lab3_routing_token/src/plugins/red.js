export default {
  install (Vue, options) {
    // eslint-disable-next-line no-unused-expressions
    Vue.prototype.$red = function (vl) {
      return `<p style="color: red">${vl}</p>`
      // eslint-disable-next-line no-sequences
    },
    // Vue.mixin({
    //   created () {
    //     console.log('h~~~~~~~~~~~~~~~~')
    //   }
    // }),
    Vue.filter('dsText',
      (value) => {
        return value.substr(0, 30).concat('...')
      }
    ),
    Vue.att = 'l2e',
    Vue.met = function () {
      console.log('hihhhiiiiiiii')
    }
    Vue.directive('color', (el) => {
      el.style.backgroundColor = '#f6f6f6'
    })
  }
}
