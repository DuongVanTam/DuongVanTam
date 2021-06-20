<template>
  <section class="">
    <dashboard-products :products="products"></dashboard-products>
    <dashboard-articles :articles="articles"></dashboard-articles>
  </section>
</template>

<script>
import DashboardProducts from './DashboardProducts'
import DashboardArticles from './DashboardArticles'
import mixin from '../mixins'
import { mapGetters } from 'vuex'
export default {
  components: {
    DashboardProducts,
    DashboardArticles
  },
  mixins: [mixin],
  computed: {
    ...mapGetters({
      products: 'products/getProducts',
      articles: 'articles/getArticles'
    })
  }
}
</script>

<style>
</style>
