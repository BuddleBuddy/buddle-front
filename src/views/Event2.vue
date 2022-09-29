<template>
<div class="container" @click="click()">
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
    height: 100%;
    width: 100%;
    background-image: url("../assets/storyPapa.png");
    background-repeat: no-repeat;
    background-size: cover;
}

</style>