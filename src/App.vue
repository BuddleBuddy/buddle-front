<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
}

html{
  width: 100%;
  height: 100%;
}

body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Pretendard-Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 500px;
  height: 100%;
  width: 100%;
  margin-left: auto; 
  margin-right: auto;
  color: #2c3e50;
  background-color: #ffffff;
}

/* iOS only */
@supports (-webkit-touch-callout: none) { 
  body{
    height: -webkit-fill-available;
  }
  html{
    height: -webkit-fill-available;
  }
}
</style>
