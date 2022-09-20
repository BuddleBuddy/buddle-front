<template>
  <div class="root">
    <img class="intro" alt="intro" src="../assets/intro.png">
  </div>
  <div>
  <KakaoMap/>
  </div>
</template>

<script>
import KakaoMap from "../components/Map";

export default {
  name: "Intro",
  components: {
    KakaoMap,
  },
};
</script>

<style scoped>
.root {
  max-width: 500px;
  min-height: 60vh;
  height: 100%;
  overflow: auto;
  background-color: #E5E5E5;
}

.root .intro{
  width: 100%;
}
</style>
