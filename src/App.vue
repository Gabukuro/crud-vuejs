<template>
  <div id="app">
    <Cervejarias></Cervejarias>
  </div>
</template>

<script>
  import store from './vuex/store.js'
  import Cervejarias from './cervejarias.vue'

export default {
  store,
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