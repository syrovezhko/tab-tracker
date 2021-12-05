<template>
  <div class="row justify-content-center">
    <panel title="Songs">
      <div class="row justify-content-between border border-2 border-secondary border-top-0 border-start-0 border-end-0"
        v-for="song in songs"
        :key="song.id">
          <div class="col-4 col-xs-12 col-md-3">{{song.title}}</div>
          <div class="col-3 col-xs-12 col-md-3">{{song.artist}}</div>
          <div class="col-5 col-xs-12 col-md-3">{{song.albom}}</div>
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
  async mounted () {
    // do the request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

</style>
