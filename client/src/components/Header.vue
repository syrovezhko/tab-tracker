<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <router-link
        class="navbar-brand"
        :to="{name: 'root'}">
        TabTracker
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <router-link
                :to="{name: 'songs'}"
                class="nav-link active">
                Browse
              </router-link>
            </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
         <!--  <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-2 mb-2 mb-lg-0">
            <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
              <router-link
                :to="{name: 'login'}"
                class="nav-link">
                LogIn
              </router-link>
            </li>
            <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
              <router-link
                :to="{name: 'register'}"
                class="nav-link">
                SignUp
              </router-link>
            </li>
            <li v-if="$store.state.isUserLoggedIn" class="nav-item">
              <a
                href="#"
                @click="logout"
                to="root"
                class="nav-link">
                Log OUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async logout () {
      await this.$store.dispatch('setToken', null)
      await this.$store.dispatch('setUser', null)
      await this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
</style>
