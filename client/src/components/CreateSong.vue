<template>
  <form action="">
    <div class="row justify-content-around mx-2 my-3">
      <logInOutPanel title="Song Metadata">
        <div class="card-body">
          <div class="mb-3">
            <input
              type="text"
              class="form-control mb-4"
              placeholder="title"
              v-model="song.title">
            <input
              type="text"
              class="form-control mb-4"
              placeholder="artist"
              v-model="song.artist">
            <input
              type="text"
              class="form-control mb-4"
              placeholder="genre"
              v-model="song.genre">
            <input
              type="text"
              class="form-control mb-4"
              placeholder="albom"
              v-model="song.albom">
            <input
              type="text"
              class="form-control mb-4"
              placeholder="albom image url"
              v-model="song.albomImageUrl">
            <input
              type="text"
              class="form-control mb-4"
              placeholder="youtube Id"
              v-model="song.youtubeId">
          </div>
        </div>
      </logInOutPanel>
      <songStructurePanel title="Song Metadata">
        <div class="card-body">
          <div class="mb-3">
            <textarea
              type="text"
              class="form-control mb-4"
              placeholder="lyrics"
              rows="8"
              v-model="song.lyrics">
              </textarea>
            <textarea
              type="text"
              class="form-control mb-4"
              placeholder="tab"
              rows="4"
              v-model="song.tab">
              </textarea>
          </div>
        </div>
      </songStructurePanel>
    </div>
    <div class="row justify-content-center">
      <stan class="mb-4 text-white bg-danger" v-if="error">{{error}}</stan>
      <div class="col">
        <button
          type="submit"
          class="btn btn-dark"
          @click="create">
          Create Song
        </button>
      </div>
    </div>
  </form>

</template>

<script>
import SongStructurePanel from '@/components/SongStructurePanel'
import logInOutPanel from '@/components/logInOutPanel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        albom: null,
        albomImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    SongStructurePanel,
    logInOutPanel
  }
}
</script>

<style scoped>

</style>
