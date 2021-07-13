export default {
  install(Vue) {
    // eslint-disable-next-line no-unused-expressions,no-param-reassign
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
      value => value.substr(0, 30).concat('...')),
    // eslint-disable-next-line no-param-reassign
    Vue.att = 'l2e',
    // eslint-disable-next-line no-param-reassign
    Vue.met = function () {
      console.log('hihhhiiiiiiii')
    }
    Vue.directive('color', el => {
      // eslint-disable-next-line no-param-reassign
      el.style.backgroundColor = '#f6f6f6'
    })
  },
}
