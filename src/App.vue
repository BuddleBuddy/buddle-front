<template>
<div>
    <router-view />
</div>
</template>

<script>
import Main from './views/Main.vue';

export default {
  name: 'App',
  components: {
    Main
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
}
</style>
