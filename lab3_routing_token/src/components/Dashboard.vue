<template>
  <section class="">
    <Products :p="products"></Products>
    <Articles :arti="articles"></Articles>
  </section>
</template>

<script>
import {get} from '../assets/product'
import {getA} from '../assets/article'
import Products from './Products'
import Articles from './Articles'

export default {
  components: {
    Products,
    Articles
  },
  data () {
    return {
      products: [],
      articles: [],
      cate: {
        categories: 'electronics'
      }
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata: async function () {
      await get(this.cate, 1, 5).then(rs => {
        this.products = rs.data
      })
      new Promise((resolve, reject) => {
        resolve(getA(this.cate, 1, 5))
      }).then(rs => {
        this.articles = rs.data
      })
    }
  }
}
</script>

<style>
</style>
