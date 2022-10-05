<template>
  <div class="container" @click="click()">
    <img
      class="icon"
      align="left"
      src="../assets/backIcon.png"
      @click.stop="back()"
    />
    <img class="bottom" src="../assets/touch.png" />
  </div>
</template>

<script>
export default {
  name: "Event6",
  methods: {
    click() {
      this.$router.push("Event7");
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  min-height: 100vh;
  background-image: url("../assets/ev6.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.container .icon {
  height: 35px;
  width: 35px;
}

.container .bottom {
  position: absolute;
  width: 85%;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>