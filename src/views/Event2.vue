<template>
<div class="container" @click="click()">
  <div class="icon" @click="back()"></div>
  <div class="touch"> </div>
</div>
</template>

<script>
export default {
  name: "Event2",
  methods: {
    click(){
      this.$router.push('Event3');
    },
    back(){
      this.$router.go(-1);
    }
}
};
</script>

<style scoped>
.container{
    max-width: 500vw;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-image: url("../assets/storyPapa.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.container .icon {
  height: 35px;
  width: 35px;
  left: 15px;
  top: 15px;
  background-image: url("../assets/backIcon.png");
  z-index: 1;
}

.container .touch{
  width: 274px;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  background-image: url("../assets/touch.png");
  bottom: 61px;
}
</style>