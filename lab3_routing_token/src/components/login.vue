<template>
  <div class="form-login">
    <b-form @submit="onSubmit" >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          type="password"
          id="input-2"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" style="margin-top: 20px">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: 'admin@gmail.com',
        password: '123'
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form.email === 'admin@gmail.com' && this.form.password === '123')
      if (this.form.email === 'admin@gmail.com' && this.form.password === '123') {
        localStorage.setItem('userData', JSON.stringify(this.form))
        this.$router.replace({path: '/'})
      }
    }
  }
}

</script>
<style lang="css">
.form-login{
  position: absolute;
  width: 264px;
  height: 264px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
