<template>
    <div class="col-8 col-xs-12 col-md-7">
      <div class="card rounded-3">
        <div class="row justify-content-between m-0 text-light bg-dark py-1">
            <div class="col-xs-7 col-md-10">
              <div class="card-header text-start">
                {{title}}
              </div>
            </div>
            <div class="col-xs-5 col-md-2">
              <router-link
                :to="{name: 'songs-create'}"
                type="button"
                class="btn btn-outline-light">
                  Add
              </router-link>
            </div>
        </div>
        <div class="card-body">
          <slot>No slot content defined</slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: [
    'title',
    'button'
  ]
}
</script>

<style scoped>

</style>
