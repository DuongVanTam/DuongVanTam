<template>
  <div class="hello">
    <div class="row" style="position: relative">
      <div class="col-md-3 navlef" >
        <div class="menu-left">
          <div>
            <b-navbar-brand href="#" >
              <img src="../assets/logo.png" width="50" height="50" class="d-inline-block align-top lef" alt="Kitten">
              <span style="vertical-align: middle;">BootstrapVue</span>
            </b-navbar-brand>
          </div>
          <ul class="dashboad">
            <li><router-link to="/">Dash Board</router-link></li>
            <li><router-link to="products">Products</router-link></li>
            <li><router-link to="articles">Articles</router-link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-9" >
        <b-navbar toggleable="lg"  class="navbarr" >
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ms-auto" @click="toOut = !toOut" style="cursor: pointer">
            <b-icon icon="person-fill" style="width: 50px; height: 50px;margin-right: 10px"/>
            <b-navbar-brand >Admin</b-navbar-brand>
            <h6 @click="toLogout" style="position: relative; top: 12px" v-if="toOut">Log Out!</h6>
          </b-navbar-nav>

        </b-navbar>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toOut: false
    }
  },
  methods: {
    toLogout: function () {
      localStorage.removeItem('userData')
      this.$router.replace({path: '/auth-login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="sass">
.menu-left{
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  height: 100%;
}
.menu-left li{
  padding: 5px;
  margin-bottom: 10px;
  list-style-type: none;
}
.hello{
  background-color: #f6f6f6;
}
.dashboad{
  margin-top: 50px;
}
.navbarr{
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}
.navlef{
  height: 1340px;
}
</style>
