<template>
  <div class="row justify-content-center">
    <panel title="Songs">
      <div
        v-for="song in songs"
        :key="song.id">
          {{song.title}} -
           {{song.artist}} -
           {{song.albom}}
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
