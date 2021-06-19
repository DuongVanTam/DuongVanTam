const mixin = {
  beforeCreate () {
    this.$store.dispatch('products/getProducts')
    this.$store.dispatch('articles/getArticles')
  }
}
export default mixin
