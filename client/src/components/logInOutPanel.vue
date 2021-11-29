<template>
  <div class="row justify-content-center">
    <div class="col-3 col-xs-12 col-md-4">
      <div class="card rounded-3">
        <div class="card-header text-light bg-dark">
          {{title}}
        </div>
        <div class="card-body">
          <slot>No slot content defined</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
