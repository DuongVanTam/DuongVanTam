<template>
  <div id="products">
    <h1>Articles</h1>
    <div class="row mb-3"  v-for="(arr,index) in arti" :key="index">
      <div class="clearfix col-md-3">
        <b-img left :src="arr.img" width="200px" height="200px" alt="Left image"></b-img>
      </div>
      <div class="col-md-9">
        <p style="font-weight: bold;margin-bottom: 20px;">{{arr.name}}</p>
        <p>{{arr.text }}</p>
      </div>
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
  props: {
    arti: {
      type: Array,
      default: () => [1, 2],
      validate: function (value) {
        return value.length > 3
      }
    }
  }
}

</script>
<style>
#products{
  margin-top: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
