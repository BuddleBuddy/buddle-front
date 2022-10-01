<template>
  <div class="container">
    <router-link to = "/contest" class="icon"> </router-link>
    <router-link to="/event1" class="start"> 도전하기 </router-link>
  </div>
</template>

<script>
export default {
  name: "Event0",
};
</script>

<style scoped>
.container {
  position: relative;
  max-width: 500px;
  min-height: 100vh;
  background-image: url("../assets/ev0.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.container .icon {
  height: 35px;
  width: 35px;
  left: 15px;
  top: 15px;
  position: absolute;
  background-image: url("../assets/backIcon.png");
}

.container .start {
  position: absolute;
  bottom: 50px;
  width: 330px;
  height: 75px;
  background-color: #f3f4d4;
  border: 1px solid #f3f4d4;
  box-shadow: 0px 1px 11px rgba(232, 232, 232, 0.1);
  border-radius: 25px;
  line-height: 75px;
  font-size: 25px;
  font-weight: 600;
  left: 50%;
  transform: translate(-50%, 0%);
  text-decoration: none;
  color: #448a4f;
}
</style>