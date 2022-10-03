<template>
  <div class="container">
    <div class="block">
      <div class="text">오순할매와 상의중</div>
      <div class="spinner">
        <pulse-loader1
            :loading="loading"
            :color="'#464646'"
            :size="'12px'"
        ></pulse-loader1>
        <pulse-loader2
            :loading="loading"
            :color="'#464646'"
            :size="'12px'"
        ></pulse-loader2>
      </div>
      <div class="container-image">
        <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
            :autoplay="{
            delay: 1000,
            disableOnInteraction: false,
          }"
            :modules="modules"
            effect="fade"
            :slides-per-view="1"
            :speed="1200"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
          <swiper-slide class="wrap-swiper">
            <img src="../assets/swipe3.png" alt="" class="swiper-img" />
          </swiper-slide>
          <swiper-slide class="wrap-swiper">
            <img src="../assets/swipe2.png" alt="" class="swiper-img" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="buttom-text">
        그거 알아? <br />
        버들시장 주변에 고인돌이 있어 <br />
        두 눈 크게 뜨고 찾아봐라!
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination, EffectFade, Autoplay, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { createRouter as $router } from "vue-router/dist/vue-router.mjs";
import PulseLoader1 from "../components/Spinner1";
import PulseLoader2 from "../components/Spinner2";
export default {
  name: "Event8",
  components: {
    Swiper,
    SwiperSlide,
    PulseLoader1: PulseLoader1,
    PulseLoader2: PulseLoader2,
  },
  data() {
    return {
      dir1: window.localStorage.getItem("dir1"),
      dir2: window.localStorage.getItem("dir2"),
      dir3: window.localStorage.getItem("dir3"),
      dir4: window.localStorage.getItem("dir4"),
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, EffectFade, Autoplay, Parallax],
    };
  },
  mounted() {
    setTimeout(() => {
      if(this.dir1 == 2 && this.dir2 == 2 && this.dir3 == 1 && this.dir4 == 1){
        this.$router.push('Event9_1');
      }
      else this.$router.push('Event9');
    }, 3000);
  },
};
</script>

<style scoped>
.container {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-height: 100vh;
  text-align: center;
}
.container .block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  flex: 1;
  width: 100%;
  align-items: center;
}
.container .block .text {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #757575;
}
.container .block .spinner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 39px;
}
.container .block .container-image {
  /* margin-top: 81px; */
  /*width: 330px;
  height: 398px;*/
  width: 100%;
}
.container .block .buttom-text {
  margin-top: 36px;
  font-weight: 500;
  font-size: 14px;
  line-height: 156.02%;
}
.swiper-img {
  /*width: 330px;*/
  /*height: 420px;*/
  border-radius: 30px;
  width: 90%;
  height: 90%;
}
.wrap-swiper {
  width: 100%;
}
</style>