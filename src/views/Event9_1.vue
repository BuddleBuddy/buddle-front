<template>
  <div class="container">
    <img
      class="icon"
      align="left"
      src="../assets/backIcon.png"
      @click.stop="back()"
    />
    <div class="title">
      <img class="left-item" src="../assets/happy.png" />
      <div class="text">정답!</div>
      <img class="right-item" src="../assets/happy.png" />
    </div>
    <div class="text2">너 정말 천재구나?</div>
    <div class="content">
      <div class="mid-content">
        <div class="content-item">I</div>
        <div class="content-item">N</div>
        <div class="content-item">F</div>
        <div class="content-item">P</div>
      </div>
      <img class="last-content" src="../assets/ment.png" />
    </div>
    <router-link to="/event10" class="button"> 다음으로 </router-link>
  </div>
</template>

<script>
export default {
  name: "Event9_1",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>


<style scoped>
@font-face {
  font-family: "SBAggroB";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
/* iOS only */
@supports (-webkit-touch-callout: none) {
  .container {
    height: -webkit-fill-available;
  }
}
.container {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 100vh;
}
.container .icon {
  height: 35px;
  width: 35px;
}
.container .title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container .left-item {
  width: 46px;
  height: 46px;
  margin-right: 11px;
}

.container .right-item {
  width: 46px;
  height: 46px;
  margin-left: 11px;
}

.container .text {
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  color: #000000;
}
.container .text2 {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #3d3d3d;
}
.container .content {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.container .content .mid-content {
  display: flex;
  width: 90%;
}

.container .content .mid-content .content-item {
  margin-top: 27px;
  /*width: 69px;
    height: 87px;*/
  width: 100%;
  border: 2px solid #7ad75a;
  box-shadow: 0px 0px 30px -2px rgba(122, 215, 90, 0.15);
  border-radius: 12.1172px;
  font-weight: 400;
  font-size: 40px;
  font-family: "SBAggroB";
  font-style: normal;
  line-height: 87px;
  text-align: center;
  color: #78d956;

  margin-left: auto;
  margin-right: auto;
  flex: 1;
}

.container .content .last-content {
  width: 100%;
}

.container .button {
  margin-bottom: 50px;
  width: 85%;
  background-color: #d2fbc4;
  border-radius: 25px;
  line-height: 75px;
  font-weight: 600;
  font-size: 25px;
  text-decoration: none;
  color: #0a7800;
  margin-left: auto;
  margin-right: auto;
}
</style>