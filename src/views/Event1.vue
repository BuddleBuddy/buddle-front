<template>
<div class="container" @click="click()">
  <img class="icon" align = "left" src="../assets/backIconWhite.png" @click.stop="back()"> 
  <img class="bottom" src="../assets/touch.png"> 
</div>
</template>

<script>
export default {
  name: "Event1",
  methods: {
    click(){
      this.$router.push('Event2_1');
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
    height: 100vh;
    background-image: url("../assets/ev1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    color: #000000;
}

.container .icon {
  height: 35px;
  width: 35px;
  
  z-index: 1;
}

.container .bottom{
  position: absolute;
  width: 85%;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
}
/* iOS only */
@supports (-webkit-touch-callout: none) {
  .container{
    min-height: -webkit-fill-available;
  }
}
</style>