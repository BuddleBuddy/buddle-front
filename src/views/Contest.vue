<template>
  <div class="root">
    <div class="event_con">
      <img class="hbti" alt="hbti" src="../assets/event.png" />
      <router-link to="/event0" class="part"> 참여하기</router-link>
    </div>
    <div class="third">
      <div class="rectangle"></div>
      <div class="box">
        <div class="itemfont1">{{ count }}명</div>
        <div class="itemfont2">참여중!</div>
      </div>
      <div class="rectangle"></div>
    </div>
    <div class="fourth">
      <img class="vector" alt="vector" src="../assets/vector.png" />
      <div class="txt">친구들에게 알려줄까?</div>
      <div class="fifth">
        <div class="logo">
          <KakaoShare />
        </div>
        <div class="logo">
          <Facebook />
        </div>
        <div class="logo">
          <Clipboard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KakaoShare from "@/components/Share";
import Facebook from "@/components/Facebook";
import Clipboard from "@/components/Clipboard";
import axios from "axios";
export default {
  name: "Contest",
  components: { Clipboard, Facebook, KakaoShare },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    get() {
      axios.get("https://buddlebuddy.shop/part").then((response) => {
        console.log(response);
        this.count = response.data;
      });
    },
  },
  mounted() {
    this.get();
  },
};
</script>

<style scoped>
.root {
  max-width: 500px;
  min-height: 100vh;
  height: 100%;
  overflow: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.root .hbti {
  width: 100%;
}

.root .gradient {
  background: linear-gradient(#e5e5e5, #000000);
  height: 720px;
}

.root .first {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.root .first .title {
  position: absolute;
  background-color: #50a65d;
  color: #ffffff;
  margin-top: 60px;
  width: 108px;
  height: 38px;
  line-height: 38px;
  font-size: 20px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  border: solid;
}

.root .first .content {
  width: 330px;
  /* height: 114px; */
  margin-top: 57px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 25px;
  font-size: 15px;
  line-height: 18px;
  padding: 50px 0;
}

.root .second {
  display: flex;
  flex-direction: column;
  margin-top: 67px;
}

.root .second .title {
  position: absolute;
  width: 132px;
  height: 38px;
  line-height: 38px;
  background-color: #50a65d;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  border: solid;
  color: #ffffff;
}

.root .second .set {
  display: flex;
  width: 330px;
  height: 289px;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
  background-color: #ffffff;
}

.root .second .set .item {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.root .second .set .item .gift1 {
  width: 141px;
  height: 202px;
}

.root .second .set .item .content2 {
  position: absolute;
  width: 58px;
  height: 58px;
  line-height: 58px;
  background-color: #cbf8cf;
  border-radius: 50px;
  margin-top: 200px;
  margin-left: 40px;
  color: #50a65d;
  font-weight: 900;
}

.root .third {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 160px;
}

.root .third .box {
  display: flex;
  flex-direction: column;
}

.root .third .itemfont1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 85px;
  text-align: center;
  color: #50a65d;
  display: block;
}

.root .third .itemfont2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #343434;
}

.root .third .rectangle {
  width: 8px;
  height: 60px;
  background-color: #d9d9d9;
  align-content: flex-start;
  margin-top: 40px;
}

.root .fourth {
  display: flex;
  flex-direction: column;
  margin-top: 97px;
  margin-bottom: 203px;
}

.root .fourth .txt {
  position: absolute;
  left: 50%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #343434;
  transform: translate(-50%, -33%);
}

.root.event_con {
  display: flex;
}
.part {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -30%;
  border-radius: 25px;
  background-color: #50a65d;
  color: #ffffff;
  /*width: 330px;
  height: 50px;*/
  width: 90%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  font-style: normal;
  line-height: 24px;
  position: relative;
  z-index: 0;
}

.root .fifth {
  display: flex;
  justify-content: space-evenly;
}

.root .fifth .logo {
  margin-top: 30px;
}
</style>