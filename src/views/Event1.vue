<template>
<div class="container" @click="click()">
  <img class="icon" align = "left" src="../assets/backIconWhite.png" @click="back()"> 
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
    min-height: 100vh;
    background-image: url("../assets/ev1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #000000;
}

.container .icon {
  height: 35px;
  width: 35px;
  
  z-index: 1;
}
/* iOS only */
@supports (-webkit-touch-callout: none) {
  .container{
    min-height: -webkit-fill-available;
  }
}
</style>