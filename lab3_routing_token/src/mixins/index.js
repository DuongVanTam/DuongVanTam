const mixin = {
  beforeCreate () {
    this.$store.dispatch('data/getProducts')
    this.$store.dispatch('art/getArticles')
  }
}
export default mixin
