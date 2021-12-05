<template>
    <div class="col-8 col-xs-12 col-md-7">
      <div class="card rounded-3">
        <div class="card-header text-light bg-dark text-start">
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
