<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang='css'>
  html, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #00a8ff;
    color: white;
    font-family: 'Open Sans', sans-serif;
  }
</style>
