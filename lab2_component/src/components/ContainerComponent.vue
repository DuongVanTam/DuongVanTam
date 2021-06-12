<template>
  <div class="hello" >
    <v-app >
      <v-app-bar app style="margin: 0 180px;">

        <v-toolbar-title >
          <a>Home</a>
          <a>Products</a>
          <a>Articles</a>
        </v-toolbar-title>
      </v-app-bar>
      <v-main>
        <v-container>
          <v-app-bar-title class="title">Advanced Vuejs Component<v-divider ></v-divider>Composition With Container<v-divider ></v-divider>Components</v-app-bar-title>
          <v-app-bar-title>Demo application to show how to Separate Vuejs component into <v-divider ></v-divider>Container Component and presentational Components.</v-app-bar-title>
          <Products :p="products">

          </Products>

          <Articles :arti="articles">

          </Articles>
        </v-container>
        <v-footer style="margin: 0 180px;">&copy;  Awesome Company</v-footer>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {get} from '../assets/product'
import {getA} from '../assets/article'
import  Products from './Products'
import  Articles from './Articles'
export default {
  name: 'HelloWorld',
  components: {
    Products,
    Articles
  },
  data () {
    return {
      products: [],
      articles: [],
      cate:{
        categories:'electronics'
      }
    }
  },
  created() {
     this.getdata()
  },
  methods:{
    getdata: async function (){
      await get(this.cate,1,5).then(rs=>{
        this.products  = rs.data
      })
      await getA(this.cate,1,5).then(rs=>{
        this.articles  = rs.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
hr{
  border: 0 !important;
}
.title{
  margin-bottom: 20px;
  font-size: 28px !important;
  font-weight: bold;
}
</style>
