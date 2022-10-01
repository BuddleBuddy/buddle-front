<template>
  <div class="root">
    <img class="intro" alt="intro" src="../assets/intro.png">
  </div>
  <div class="map">
    <KakaoMap/>
  </div>
  <div class="location">
    <div class="title">버들시장</div>
    <div class="content">
      <div>📍서울 구로구 오류동 65-6 일대</div>
      <div>🚃 오류동역 2번출구</div>
    </div>
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

.title{
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
}
.content{
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000000;

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
