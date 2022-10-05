<template>
  <a @click="shareFacebook" >
    <img src="../assets/icon-facebook.png" />
  </a>
</template>


<script>
export default {
  name: 'Facebook',
  methods: {
      shareFacebook() {
        var sendUrl = "https://front.buddlebuddy.shop/?utm_source=facebook&utm_medium=share&utm_campaign=buddleshop"; // 전달할 URL
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
    }
  }
}

</script>


<style>

</style>