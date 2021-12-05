<template>
    <div class="col-4 col-xs-12 col-md-5">
      <div class="card rounded-3">
        <div class="card-header text-light bg-dark">
          {{title}}
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
    'title'
  ]
}
</script>

<style scoped>

</style>
