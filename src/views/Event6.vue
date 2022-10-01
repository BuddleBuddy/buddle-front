<template>
    <div class="container" @click="click()">
        <div class = "icon" @click="back()"> </div>
    </div>
</template>

<script>
export default {
  name: "Event6",
  methods: {
    click(){
      this.$router.push('Event7');
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
    background-image: url("../assets/ev6.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.container .icon{
  height: 35px;
  width: 35px;
  background-image: url("../assets/backIcon.png");
}

</style>