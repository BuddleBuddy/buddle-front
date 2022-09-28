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
        var sendUrl = "front.buddlebuddy.shop/"; // 전달할 URL
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
    }
  }
}

</script>


<style>

</style>