<template>
  <div class="root">
    <img class="icon" align = "left" src="../assets/backIcon.png" @click.stop="back()"> 
    <img class="content" align ="center" src="../assets/ev10.png" />
    <div class="third">
      <img class="vector" alt="vector" src="../assets/vector.png" />
      <div class="txt">공유하기</div>
      <div class="share_con">
        <div class="logo"><share/></div>
        <div class="logo"><facebook/></div>
        <div class="logo"><Clipboard /></div>
      </div>
    </div>
    <div class="fourth">
      <router-link to="/event11" class="first-item">
        선물 받으러 가기!
      </router-link>
      <router-link to="/contest" class="second-item"> 홈으로 가기 </router-link>
    </div>
  </div>
</template>

<script>
import Clipboard from "@/components/Clipboard";
import Facebook from "@/components/Facebook";
import Share from "@/components/Share";

export default {
  name: "Event10",
  components: { Clipboard, Facebook, Share },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/* iOS only */
@supports (-webkit-touch-callout: none) {
  .container {
    height: -webkit-fill-available;
  }
}
.root {
  max-width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  align-content: center;
}
.root .icon {
  height: 35px;
  width: 35px;
}

.root .content{
  /*max-width: 391px;
  height: 907px;*/
  width: 100%;
  margin: auto
}

.root .third {
  display: flex;
  flex-direction: column;
  margin-top: 97px;
  margin-bottom: 203px;
}

.root .third .txt {
  position: absolute;
  left: 50%;
  text-align: center;
  font-weight: 400;
  font-size: 17px;
  line-height: 18px;
  transform: translate(-50%, -35%);
}
.root .fourth {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
}
.root .fourth .first-item {
  width: 80%;
  background-color: #d2fbc4;
  color: #0a7800;
  text-decoration: none;
  font-family: "Pretendard-Regular";
  font-size: 25px;
  line-height: 75px;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
}

.root .fourth .second-item {
  width: 80%;
  margin-top: 20px;
  color: #0a7800;
  font-size: 25px;
  line-height: 75px;
  border: 2px solid #bae2ad;
  text-decoration: none;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 118px;
}
.share_con{
  display: flex;
  justify-content: space-evenly;
}

.logo{
  margin-top: 30px;
}
</style>