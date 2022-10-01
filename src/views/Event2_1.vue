<template>
<div class="container" @click="click()">
  <div class="icon" @click="back()"></div>
  <div class="touch"> </div>
</div>
</template>

<script>
export default {
  name: "Event2_1",
  methods: {
    click(){
      this.$router.push('Event2');
    },
    back(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.container{
    max-width: 500px;
    min-height: 100vh;
    background-image: url("../assets/ev2_1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.container .icon {
  height: 35px;
  width: 35px;
  left: 15px;
  top: 15px;
  /*position: absolute;*/
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