<template>
  <section class="">
    <Products :p="products"></Products>
    <Articles :arti="articles"></Articles>
  </section>
</template>

<script>
import Products from './Products'
import Articles from './Articles'
import mixin from '../mixins'
import { mapGetters } from 'vuex'
export default {
  components: {
    Products,
    Articles
  },
  mixins: [mixin],
  computed: {
    ...mapGetters({
      products: 'data/pro',
      articles: 'art/art'
    })
  }
}
</script>

<style>
</style>
