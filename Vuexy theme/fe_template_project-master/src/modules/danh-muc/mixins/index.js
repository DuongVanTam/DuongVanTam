const mixin = {
  beforeCreate() {
    this.$store.dispatch('danhMuc/getProducts')
  },
}
export default mixin
