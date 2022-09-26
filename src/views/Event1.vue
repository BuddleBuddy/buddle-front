<template>
    <div class="event1">
        <router-link to= "/event2" class="start"> 시작하기 </router-link>
    </div>
</template>

<script>
export default {
  name: "Event1"
};
</script>

<style scoped>
.event1 {
  width: 100%;
  height: 100%;
  background-image: url("../assets/hbti.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.event1 .start{
  position: absolute;
  bottom: 50px;
  width: 330px;
  height: 75px;
  background-color: #DDD6B3;
  border-radius: 25px;
  line-height: 75px;
  font-size: 25px;
  left: 50%;
  transform: translate(-50%, 0%);
  text-decoration: none;
  color: #474747;
}
</style>