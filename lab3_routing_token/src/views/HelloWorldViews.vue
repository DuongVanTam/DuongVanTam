<template>
  <div class="hi">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '../components/pages/HelloWorld'
export default {
  name: 'HelloWorldViews',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toOut: false
    }
  },
  components: {
    HelloWorld
  }
}
</script>
