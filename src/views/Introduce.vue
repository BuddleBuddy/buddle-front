<template>
  <div class="root">
    <img class="intro" alt="intro" src="../assets/intro.png">
  </div>
  <div class="map">
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

export default {
  name: "Intro",
  components: {
    IntroTab,
    KakaoMap,
  },
};
</script>

<style scoped>
.root {
  max-width: 500px;
  height: 100%;
  overflow: auto;
  background-color: #ffffff;
}

.intro{
  width: 100%;
  margin-bottom: 100px;
}

.location{
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 10px;
  text-align: left ;
}

.map {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /*margin-left: 10px;
  margin-right: 10px;*/
}
</style>
