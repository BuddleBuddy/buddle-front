<template>
  <div class="container" @click="click()">
    <img
        class="icon"
        align="left"
        src="../assets/backIcon.png"
        @click.stop="back()"
        @load="imgLoadedMethod"
    />
    <img class="bottom" src="../assets/touch.png"/>

    <div class="ev6_con">
      <div class="bubble-con"><img

          :class="{ title: true, active: loaded}"
          src="../assets/ev6_pic.png"
      /><img
          :class="{ title: true, active: loaded}"
          src="../assets/ev6_title.png"
      /></div>
      <div class="bubble-con"><img
          :class="{ test1: true, active: loaded }"
          src="../assets/ev6_con1.png"
          style="width: 85%"
      /></div>
      <div class="bubble-con"><img
          :class="{ test2: true, active: loaded }"
          src="../assets/ev6_con2.png"
          style="width: 85%"
      /></div>
      <div class="bubble-con"><img
          :class="{ test3: true, active: loaded }"
          src="../assets/ev6_con3.png"
          style="width: 85%"
      /></div>
      <div class="bubble-con"><img
          :class="{ test4: true, active: loaded }"
          src="../assets/ev6_con4.png"
          style="width: 85%"
      /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event6",
  data: function () {
    return {
      loaded: false,
    };
  },
  methods: {
    imgLoadedMethod() {
      this.loaded = true;
      console.log("on load", this.loaded);
    },
    click() {
      //this.$router.push("Event7");
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/* iOS only */
@supports (-webkit-touch-callout: none) {
  .container{
    min-height: -webkit-fill-available;
  }
}

.title {
  opacity: 0;
  transition: opacity 2s 1s;
}

.test1 {
  opacity: 0;
  transition: opacity 2s 3s;
}

.test2 {
  opacity: 0;
  transition: opacity 2s 5s;
}

.test3 {
  opacity: 0;
  transition: opacity 2s 7s;
}

.test4 {
  opacity: 0;
  transition: opacity 2s 9s;
}

.container {
  max-width: 500px;
  height: 100vh;
  background-image: url("../assets/ev6_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.container .icon {
  height: 35px;
  width: 35px;
  position: absolute;
  left: 0;
}

.container .bottom {
  position: absolute;
  width: 85%;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
}

img.active {
  opacity: 1;
}

.ev6_con {
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
}
.bubble-con:nth-child(1) {
  padding-top: 20%;
  padding-bottom: 10%;
}
.bubble-con {
  padding-bottom: 5%;
  display: flex;
  height: 33px;
  width: 100%;
}
.bubble-con img {
  object-fit: contain;
}
.bubble-con:last-child {
  height: 63px;
}
.bubble-con:nth-child(1) {
  justify-content: center;
  overflow: visible;
}
.bubble-con:nth-child(2n+3) {
  justify-content: flex-end;
}
</style>