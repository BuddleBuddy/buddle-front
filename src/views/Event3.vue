<template>
  <div class="container">
    <img
      class="icon"
      align="left"
      src="../assets/backIcon.png"
      @click.stop="back()"
    />
    <div class="text">도손 할아범의</div>
    <div class="text2">mbti를 맞춰봐!</div>
    <div class="block">
      <div class="hint-container">
        <div class="hint-title" style="color: #494b49; font-weight: 700">
          버들시장에서 초득급 인싸인 도손할배! <br />
          현실적인 조언을 잘해주고 <br />
          공감능력은 제로.. <br />
          하지만 정말 계획적이야! <br />
        </div>
      </div>
      <div class="mid-content">
        “ 흰트를 보고 MBTI에 맞게 버튼을 클릭해봐! “
      </div>
      <div class="block-container">
        <div
          :class="{
            'left-item': selectBox1 == 0,
            'left-item-click': selectBox1 == 1 && dir1 == 1,
            'left-item-unclick': selectBox1 == 1 && dir1 == 2,
          }"
          @click="clickEvent1(1, 1)"
        >
          E
        </div>
        <div
          :class="{
            'left-item': selectBox2 == 0,
            'left-item-click': selectBox2 == 1 && dir2 == 1,
            'left-item-unclick': selectBox2 == 1 && dir2 == 2,
          }"
          @click="clickEvent2(1, 1)"
        >
          S
        </div>
        <div
          :class="{
            'left-item': selectBox3 == 0,
            'left-item-click': selectBox3 == 1 && dir3 == 1,
            'left-item-unclick': selectBox3 == 1 && dir3 == 2,
          }"
          @click="clickEvent3(1, 1)"
        >
          F
        </div>
        <div
          :class="{
            'right-item': selectBox4 == 0,
            'right-item-click': selectBox4 == 1 && dir4 == 1,
            'right-item-unclick': selectBox4 == 1 && dir4 == 2,
          }"
          @click="clickEvent4(1, 1)"
        >
          P
        </div>
      </div>
      <div class="block-container">
        <div
          :class="{
            'right-item': selectBox1 == 0,
            'right-item-click': selectBox1 == 1 && dir1 == 2,
            'right-item-unclick': selectBox1 == 1 && dir1 == 1,
          }"
          @click="clickEvent1(2, 1)"
        >
          I
        </div>
        <div
          :class="{
            'right-item': selectBox2 == 0,
            'right-item-click': selectBox2 == 1 && dir2 == 2,
            'right-item-unclick': selectBox2 == 1 && dir2 == 1,
          }"
          @click="clickEvent2(2, 1)"
        >
          N
        </div>
        <div
          :class="{
            'right-item': selectBox3 == 0,
            'right-item-click': selectBox3 == 1 && dir3 == 2,
            'right-item-unclick': selectBox3 == 1 && dir3 == 1,
          }"
          @click="clickEvent3(2, 1)"
        >
          T
        </div>
        <div
          :class="{
            'left-item': selectBox4 == 0,
            'left-item-click': selectBox4 == 1 && dir4 == 2,
            'left-item-unclick': selectBox4 == 1 && dir4 == 1,
          }"
          @click="clickEvent4(2, 1)"
        >
          J
        </div>
      </div>
    </div>
    <div class="button" @click="button">정답 제출하기</div>
  </div>
</template>

<script>
export default {
  name: "Event3",
  data() {
    return {
      selectBox1: 0,
      dir1: 0,
      selectBox2: 0,
      dir2: 0,
      selectBox3: 0,
      dir3: 0,
      selectBox4: 0,
      dir4: 0,
      boxOne: "",
    };
  },
  methods: {
    clickEvent1(dir, num) {
      this.dir1 = dir;
      this.selectBox1 = num;
    },
    clickEvent2(dir, num) {
      this.dir2 = dir;
      this.selectBox2 = num;
    },
    clickEvent3(dir, num) {
      this.dir3 = dir;
      this.selectBox3 = num;
    },
    clickEvent4(dir, num) {
      this.dir4 = dir;
      this.selectBox4 = num;
    },
    button() {
      if (this.dir1 == 0 || this.dir2 == 0 || this.dir3 == 0 || this.dir4 == 0) {
        alert("모든 항목을 선택해주세요 :) ");
      } else {
        window.localStorage.setItem("dir1", this.dir1);
        window.localStorage.setItem("dir2", this.dir2);
        window.localStorage.setItem("dir3", this.dir3);
        window.localStorage.setItem("dir4", this.dir4);

        const one = this.dir1 == 2 ? -1 : 1;
        const two = this.dir2 == 2 ? -1 : 1;
        const three = this.dir3 == 1 ? -1 : 1;
        const four = this.dir4 == 1 ? -1 : 1;
        console.log(one + " " + two + " " + three + " " + four);

        window.localStorage.setItem("one", one);
        window.localStorage.setItem("two", two);
        window.localStorage.setItem("three", three);
        window.localStorage.setItem("four", four);
        this.$router.push("Event4");
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  props: true,
};
</script>

<style scoped>
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
.container .text {
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #565656;
}

.container .text2 {
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
}
.container .block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  flex: 1;
  width: 100%;
  align-content: center;
  align-items: center;
}
.container .block .hint-container {
  width: 90%;
  border: 1px solid #9ae481;
  box-shadow: inset 0px 0px 11px 6px rgba(207, 255, 191, 0.26);
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  padding: 10% 0;
  align-content: center;
  align-items: center;
}

.container .block .mid-content {
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #bbbbbb;
  margin-top: 33px;
}

.container .block .block-container {
  display: flex;
  flex-direction: row;
  margin: 8px;
}

.left-item {
  width: 55px;
  height: 70px;
  box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
  border-radius: 6.55607px;
  font-size: 35px;
  line-height: 70px;
  margin-left: 10px;
  margin-right: 10px;
}
.left-item-red {
  width: 55px;
  height: 70px;
  box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
  border-radius: 6.55607px;
  font-size: 35px;
  line-height: 70px;
  color: #f66d6d;
  margin-left: 10px;
  margin-right: 10px;
}

.left-item-click {
  width: 55px;
  height: 70px;
  background-color: #9ae481;
  color: #ffffff;
  font-size: 35px;
  box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
  border-radius: 6.55607px;
  line-height: 70px;
  margin-left: 10px;
  margin-right: 10px;
}

.left-item-unclick {
  width: 55px;
  height: 70px;
  background-color: #ffffff;
  color: #e2e2e2;
  font-size: 35px;
  box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
  border-radius: 6.55607px;
  line-height: 70px;
  margin-left: 10px;
  margin-right: 10px;
}

.right-item {
  width: 55px;
  height: 70px;
  box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
  border-radius: 6.55607px;
  font-size: 35px;
  line-height: 70px;
  margin-left: 10px;
  margin-right: 10px;
}
.right-item-red {
  width: 55px;
  height: 70px;
  box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
  border-radius: 6.55607px;
  font-size: 35px;
  line-height: 70px;
  color: #f66d6d;
  margin-left: 10px;
  margin-right: 10px;
}
.right-item-click {
  width: 55px;
  height: 70px;
  background-color: #9ae481;
  color: #ffffff;
  font-size: 35px;
  box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
  border-radius: 6.55607px;
  line-height: 70px;
  margin-left: 10px;
  margin-right: 10px;
}

.right-item-unclick {
  width: 55px;
  height: 70px;
  background-color: #ffffff;
  color: #e2e2e2;
  font-size: 35px;
  box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
  border-radius: 6.55607px;
  line-height: 70px;
  margin-left: 10px;
  margin-right: 10px;
}
.text-item {
  margin-left: 22px;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  line-height: 19px;
  color: #000000;
}
.container .button {
  width: 85%;
  height: 75px;
  margin-bottom: 50px;
  background-color: #d2fbc4;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  line-height: 75px;
  color: #0a7800;
  font-size: 25px;
  font-weight: 600;
}
/* iOS only */
@supports (-webkit-touch-callout: none) {
  .container{
    min-height: -webkit-fill-available;
  }
}

@media screen and (max-width: 330px) {
  .left-item {
    margin-right: 5px;
    margin-left: 5px;
  }
  .left-item-click {
    margin-right: 5px;
    margin-left: 5px;
  }
  .left-item-red {
    margin-right: 5px;
    margin-left: 5px;
  }
  .left-item-unclick {
    margin-right: 5px;
    margin-left: 5px;
  }
  .right-item {
    margin-right: 5px;
    margin-left: 5px;
  }
  .right-item-click {
    margin-right: 5px;
    margin-left: 5px;
  }
  .right-item-red {
    margin-right: 5px;
    margin-left: 5px;
  }
  .right-item-unclick {
    margin-right: 5px;
    margin-left: 5px;
  }
}
</style>