<template>
  <div class="row justify-content-center">
    <panel title="Songs">
      <div class="row justify-content-start align-items-center border border-2 border-secondary border-top-0 border-start-0 border-end-0"
        v-for="song in songs"
        :key="song.id">
          <router-link
            class="col-1 link-secondary text-decoration-none"
            :to="{name: 'song', params: {songId: song.id}}">
              {{song.id}}
          </router-link>
          <router-link
            class="col-3 col-md-1"
            :to="{name: 'song', params: {songId: song.id}}">
            <img :src="song.albomImageUrl" alt="" class="">
          </router-link>
          <div class="col-7 col-md-4">
            <router-link
              class="row justify-content-start align-items-center py-2 link-secondary text-decoration-none"
              :to="{name: 'song', params: {songId: song.id}}">
              <div class="col-12 text-start">{{song.title}}</div>
              <div class="col-12 text-start">{{song.artist}}</div>
            </router-link>
          </div>
          <router-link
            class="col-5 d-none d-md-flex link-secondary text-decoration-none"
            :to="{name: 'song', params: {songId: song.id}}">
              {{song.albom}}
          </router-link>
      </div>
    </panel>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do the request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
  img {
    height: 50px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
