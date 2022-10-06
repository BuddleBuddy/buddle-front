<template>
  <div class="container">
    <img class="icon" align = "left" src="../assets/backIcon.png" @click.stop="back()"> 
    <div class="start" @click="post()"> 도전하기 </div>
  </div>
</template>

<script>
export default {
  name: "Event0",
  methods: {
    post() {
      this.axios.post("https://buddlebuddy.shop/participation").then((response) => {
        console.log(response);
      });
      this.$router.push('Event1');
    },
    back(){
      this.$router.go(-1);
    }
  },

};
</script>

<style scoped>
.container {
  /*position: relative;*/
  max-width: 500px;
  height: 100vh;
  background-image: url("../assets/ev0.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.container .icon {
  height: 35px;
  width: 35px;
  z-index: 1;
}

.container .start {
  position: absolute;
  bottom: 50px;
  width: 90%;
  max-width: 480px;
  height: 75px;
  background-color: #D2FBC4;
  border: 1px solid #D2FBC4;
  box-shadow: 0px 1px 11px rgba(232, 232, 232, 0.1);
  border-radius: 25px;
  line-height: 75px;
  font-size: 25px;
  font-weight: 600;
  left: 50%;
  transform: translate(-50%, 0%);
  text-decoration: none;
  color: #0A7800;
}

/* iOS only */
@supports (-webkit-touch-callout: none) {
  .container{
    min-height: -webkit-fill-available;
  }
}
</style>