<template>
  <div>
      <Header />
      <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 500px;
  min-height: 100vh;
  height: 100%;
  overflow: auto;
  margin-left: auto; 
  margin-right: auto;
  color: #2c3e50;
  background-color: #E5E5E5;
}
</style>
