<template>
  <div class="row justify-content-center">
    <logInOutPanel title="LogIn">
      <div class="card-body">
        <form novalidate>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
          </div>
          <div class="mb-3">
            <label
              for="password"
              class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password">
          </div>
          <button
            type="submit"
            class="btn btn-dark"
            @click="login">
            Submit
          </button>
        </form>
      </div>
    </logInOutPanel>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import logInOutPanel from '@/components/logInOutPanel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      console.log('before try')
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log('email', this.email)
        console.log('password', this.password)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        console.log('setToken', response.data.token)
        console.log('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    logInOutPanel
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
