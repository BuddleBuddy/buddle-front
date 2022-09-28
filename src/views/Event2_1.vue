<template>
<div class="container" @click="click()">
</div>
</template>

<script>
export default {
  name: "Event2_1",
  methods: {
    click(){
      this.$router.push('Event2');
    }
  }
};
</script>

<style scoped>
.container{
    height: 100%;
    width: 100%;
    background-image: url("../assets/familyStory.png");
    background-repeat: no-repeat;
    background-size: cover;
}

</style>