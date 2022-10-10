<template>
  <div class="contianer">
    <img class="story" alt="story1" src="../assets/history/story1.png" />
    <img class="story1" alt="story2" src="../assets/history/story2.png" />
    <img class="story1" alt="story3" src="../assets/history/story3.png" />
    <img class="story1" alt="story4" src="../assets/history/story4.png" />
    <img class="story1" alt="story5" src="../assets/history/story5.png" />
    <img class="story" alt="story6" src="../assets/history/story6.png" />
    <img class="story2" alt="story7" src="../assets/history/story7.png" />
  </div>
</template>

<script>
export default {
  name: "History",
};
</script>

<style scoped>
.container {
  max-width: 500px;
  height: 100vh;
  background-color: #000000;
}

.story {
  background-color: #000000;
  color: #000000;
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.story1 {
  width: 100%;
  height: 100%;
  padding-bottom: 15%;
  background-color: #000000;
  vertical-align: top;
}

.story2 {
  width: 100%;
  height: 100%;
  padding-bottom: 80%;
  background-color: #000000;
  vertical-align: top;
}
</style>
