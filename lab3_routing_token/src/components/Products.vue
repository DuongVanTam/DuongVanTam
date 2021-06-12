<template>
<div id="products" class="row" style="margin-left: 0px;">
  <h1>Products</h1>
  <div class="col-md-4"
       v-for="(product,index) in filldt"
       :key="index">
    <b-card
      class="ecommerce-card "
      no-body
    >
      <div class="item-img text-center">
        <b-img
          :alt="`${product.name}-${product.id}`"
          fluid
          class="card-img-top"
          :src="product.img"
        />
      </div>

      <!-- Product Details -->
      <b-card-body >
        <div class="item-wrapper">
          <b-card-text v-color>{{product.name}}</b-card-text>
          <div>
            <h6 class="item-price" v-html="$red(product.price)">
            </h6>
          </div>
        </div>
      </b-card-body>

      <!-- Action Buttons -->
    </b-card>
  </div>
</div>
</template>
<script>
import {
  BCard, BCardBody, BImg, BCardText, BLink
} from 'bootstrap-vue'
export default {
  components: {
    BCard,
    BCardBody,
    BImg,
    BCardText,
    BLink
  },
  props: ['p'],
  mounted () {
  },
  computed: {
    filldt: function () {
      let a = []
      let [c, b, d] = this.p
      a.push(c, b, d)
      return a
    }
  }
}

</script>
<style>

</style>
