<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<script>

import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #f6f6f6;
}

</style>
