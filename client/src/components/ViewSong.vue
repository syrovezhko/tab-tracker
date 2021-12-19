<template>
  <div class="">
    <div class="row justify-content-around border-3 border-bottom pt-4">
      <div class="col-sm-5 col-md-2 col-md-4 col-lg-3 static-position px-5">
        <img :src="song.albomImageUrl" img-fluid alt="" class="">
        <p class="py-2 fs-5 text-center d-sm-none d-md-block">{{song.albom}}</p>
      </div>
      <div class="col-sm-7 col-md-8 col-md-8 col-lg-9 static-position px-4">
        <div class="row">
          <div class="col-12 text-start">
            <h1 class="">{{song.title}}</h1>
          </div>
          <div class="col-12 text-start">
            <h2>{{song.artist}}</h2>
          </div>
          <div class="col-12 text-start d-none d-sm-block d-md-none">
            <h2>{{song.albom}}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-around pt-4">
      <div class="col">
        <youtube
          :video-id="youtubeId"
          :player-width="500"
          :player-height="200">
        </youtube>
      </div>
    </div>
    <div class="row justify-content-around pt-4">
      <div class="col-xs-12 col-md-4">
        <h5>Song lyrics</h5>
        <textarea readonly class="lyrics py-2 text-center d-sm-none d-md-block" v-model="song.lyrics"></textarea>
      </div>
      <div class="col-xs-12 col-md-8">
        <h5>Song tab</h5>
        <textarea readonly class="tab py-2 text-center d-sm-none d-md-block" v-model="song.tab"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import VueYouTubeEmbed from 'vue-youtube-embed'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  },
  components: {
    VueYouTubeEmbed
  }
}
</script>

<style scoped>
  img {
    max-width: 100%;
  }
  textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
  }
  .lyrics {
    font-size: 15px;
  }
  .tab {
    font-size: 10px;
  }

</style>
