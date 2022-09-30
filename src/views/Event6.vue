<template>
    <div class="container" @click="click()">
    </div>
</template>

<script>
export default {
  name: "Event6",
  methods: {
    click(){
      this.$router.push('Event7');
    }
}
};
</script>

<style scoped>
.container{
    max-width: 500px;
    min-height: 100vh;
    background-image: url("../assets/storyPapa.png");
    background-repeat: no-repeat;
    background-size: cover;
}

</style>