<template>
  <a @click="copyToClipBoard()">
    <img src="../assets/icon-clipboard.png" />
    <div id="textArea" hidden>https://front.buddlebuddy.shop</div>
  </a>
</template>

<script>
export default {
  name: "Clipboard",

  methods:{
    copyToClipBoard(){
      var content = document.getElementById('textArea').innerHTML;

      navigator.clipboard.writeText(content)
          .then(() => {
            console.log("Text copied to clipboard...")
            alert("주소가 복사되었습니다.")
          })
          .catch(err => {
            console.log('Something went wrong', err);
          })
    }
  }
}
</script>







<style scoped>

</style>