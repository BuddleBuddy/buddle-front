<template>
  <div class="root">
    <img class="intro" alt="intro" src="../assets/intro.png">
  </div>
  <div>
    <KakaoMap/>
  </div>
  <div class="location">
    <h2>버들시장</h2>
    <h3>📍서울 구로구 오류동 65-6 일대</h3>
    <h3>🚃 오류동역 2번출구</h3>
  </div>
  <div>
    <IntroTab/>
  </div>
</template>

<script>
import KakaoMap from "../components/Map";
import IntroTab from "@/components/IntroTab";
import Place from "@/components/intro/place";
import Store from "@/components/intro/store";

export default {
  name: "Intro",
  components: {
    Place,
    IntroTab,
    KakaoMap,
  },
};
</script>

<style scoped>
.root {
  max-width: 500px;
  min-height: 100px;
  overflow: auto;
  background-color: #E5E5E5;
}

.intro{
  width: 100%;
  margin-bottom: 100px;
}

.location{
  margin: 50px;
  text-align: left ;
}
</style>
