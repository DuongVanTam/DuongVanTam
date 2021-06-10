<template>
  <div class="hello">
    <div class="row">
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
      <div class="col-md-9">
        <b-navbar toggleable="lg"  class="navbarr">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ms-auto">
            <b-icon icon="person-fill" style="width: 50px; height: 50px;"/>
            <b-navbar-brand>Admin</b-navbar-brand>
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
      msg: 'Welcome to Your Vue.js App'
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
