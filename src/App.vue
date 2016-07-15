<template>
  <div id="app">
    <Cervejarias></Cervejarias>
  </div>
</template>

<script>
  import Cervejarias from './cervejarias.vue'
  export default {
    components: {
      Cervejarias
    }
  }
</script>
<style>
  body {
    margin-top: 50px
  }
</style>