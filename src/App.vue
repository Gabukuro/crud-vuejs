<template>
  <div id="app" class="container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import store from './vuex/store.js'
export default {
  data () {
    return {
      msg: 'Vue.js Crud'
    }
  },
  store
}
</script>
<style>
  body {
    margin-top: 50px
  }
</style>