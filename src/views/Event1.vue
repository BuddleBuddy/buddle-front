<template>
    <div class="event1">
        <router-link to= "/event2_1" class="start"> 도전하기 </router-link>
    </div>
</template>

<script>
export default {
  name: "Event1"
};
</script>

<style scoped>
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}

.event1 {
  max-width: 500px;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-image: url("../assets/hbti.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.event1 .start{
  position: absolute;
  bottom: 50px;
  width: 330px;
  height: 75px;
  background-color: #F3F4D4;
  border: 1px solid #F3F4D4;
  box-shadow: 0px 1px 11px rgba(232, 232, 232, 0.1);
  border-radius: 25px;
  line-height: 75px;
  font-family: 'Pretendard-Regular';
  font-size: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
  text-decoration: none;
  color: #448A4F;
}
</style>