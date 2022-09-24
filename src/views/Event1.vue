<template>
    <div class="root">
        <img class="hbti" alt="hbti" src="../assets/hbti.png">
        <router-link to= "/event2" class="start"> 시작하기 </router-link>
    </div>
</template>

<script>
export default {
  name: "Event1"
};
</script>

<style scoped>
.root {
  position: relative;
}

.root .hbti{
  max-height: 100%;
  max-width: 100%;
}

.root .start{
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