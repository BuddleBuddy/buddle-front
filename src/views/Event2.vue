<template>
<div class="container" @click="click()">
  <div class="touch"> </div>
</div>
</template>

<script>
export default {
  name: "Event2",
  methods: {
    click(){
      this.$router.push('Event3');
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