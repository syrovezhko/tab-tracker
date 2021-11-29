<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a
        href="#"
        class="navbar-brand"
        @click="navigateTo({name: 'root'})">
        TabTracker
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
              <router-link
                to="songs"
                class="nav-link"
                @click="navigateTo({name: 'songs'})">
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
                to="login"
                class="nav-link"
                @click="navigateTo({name: 'login'})">
                LogIn
              </router-link>
            </li>
            <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
              <router-link
                to="register"
                class="nav-link"
                @click="navigateTo({name: 'register'})">
                SignUp
              </router-link>
            </li>
            <li v-if="$store.state.isUserLoggedIn" class="nav-item">
              <a
                href="#"
                to="root"
                class="nav-link"
                @click="logout">
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
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
</style>
