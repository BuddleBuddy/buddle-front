<template>
<div class="container">
    <div class = "text"> 채점중 </div>
    <div class="container-image">
        <swiper
        :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }"
        :modules="modules"
        effect="fade"
        :slides-per-view="1"
        :speed="1200"
        navigation
        :parallax="true"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide class="wrap-swiper">  
            <img src="../assets/Rectangle.png"  alt="" class="swiper-img" />
        </swiper-slide>
        <swiper-slide class="wrap-swiper">
            <img src="../assets/Rectangle.png"  alt="" class="swiper-img" />
        </swiper-slide>
        <swiper-slide class="wrap-swiper">
            <img src="../assets/Rectangle.png"  alt="" class="swiper-img" />
        </swiper-slide>
        </swiper>
    </div>
    <div class="buttom-text"> 오류 2동에 위치한 버들시장이야! <p /> 천왕역이랑 가깝다는데?</div>
</div>
</template>

<script>
  import { Navigation, Pagination, EffectFade, Autoplay, Parallax } from 'swiper';

  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';

  export default {
    name: "Event4",
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, EffectFade, Autoplay, Parallax],
      };
    },
    methods: {
      
    }
  };
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.container .text{
    color: #000000;
    margin-top: 121px;
    font-weight: 900;
    font-size: 30px;
}

.container .container-image{
    margin-top: 81px;
    width: 330px;
    height: 398px;
    margin-left: auto;
    margin-right: auto;
}
.container .buttom-text{
    margin-top: 34px;
    font-weight: 500;
    font-size: 14px;
    line-height: 156.02%;
}
</style>