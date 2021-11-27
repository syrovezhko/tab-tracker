<template>
  <div class="row justify-content-center">
    <div class="col-3 col-xs-12 col-md-4">
      <div class="card rounded-3">
        <div class="card-header text-light bg-dark">
          Log In
        </div>
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
            <div
            class="error"
            v-html="error"/>
            <button
              type="submit"
              class="btn btn-dark"
              @click="login">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
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
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
