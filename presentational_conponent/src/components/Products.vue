<template>
<div id="products">
  <v-list-item-content>
    <v-card-title class="subheading ">Products</v-card-title>
    <v-divider></v-divider>
    <div class="row">
      <div class="col-12 col-md-4 col-sm-6 col-xs-6 text-center" v-for="(pr, index) in filldt" :key="index">
        <v-card

        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="pr.img"
          >
          </v-img>

          <v-card-text class="text--primary text-center">
            <div>{{pr.name}}</div>
            <div>{{pr.price}}</div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-list-item-content>
</div>
</template>
<script>
export default {
  props:['p'],
  computed:{
    filldt: function  (){
      let a =[]
      let [c,b,d]=this.p;
      a.push(c,b,d)
      console.log(this.p)
      return a
    }
  }
}

</script>
<style>

</style>
