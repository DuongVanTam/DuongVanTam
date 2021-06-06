<template>
  <div id="products">
    <v-list-item-content>
      <v-card-title class="subheading ">Articles</v-card-title>
      <v-divider></v-divider>
      <div class="row">
        <div class="col-12 col-md-12 col-sm-6 col-xs-6 row " v-for="(ar, index) in filldtt" :key="index">
          <img
            class="col-md-3"
            height="200px"
            :src="ar.img"
          />
          <div class="col-md-6 text-md-left">
            <div style="margin-bottom: 30px;font-weight: bold">{{ar.name}}</div>
            <div>{{ar.text}}</div>
          </div>
        </div>
      </div>
    </v-list-item-content>
  </div>
</template>
<script>
export default {
  props:['arti'],
  computed:{
    filldtt: function (){
      let a =[]
      let [c,b,d]=this.arti;
      a.push(c,b,d)
      return a
    }
  }
}

</script>
<style>

</style>
