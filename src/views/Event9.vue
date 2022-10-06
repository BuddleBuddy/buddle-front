<template>
  <div class="container">
    <img
      class="icon"
      align="left"
      src="../assets/backIcon.png"
      @click.stop="back()"
    />
    <div class="text">땡! <br /></div>
    <div class="text2">다시 한번 생각해봐~</div>
    <div class="block">
      <div class="hint-container">
        <div class="hint-title" style="color: #ff4848; font-weight: 700">
          조금 더 힌트를 줄게!
        </div>
        <div class="hint-content" style="color: #565656; font-weight: 400">
          내향적, 이상적, 감정적, 즉흥적이란 단어가 <br />
          잘 어울리는 성격이야!
        </div>
      </div>
      <div class="mid-content">“ 빨간 부분만 고쳐봐! “</div>
      <div class="block-container">
        <div
          :class="{
            'left-item-red': selectBox1 == -1,
            'left-item-click': selectBox1 == 1 && dir1 == 1,
            'left-item-unclick': selectBox1 == 1 && dir1 == 2,
          }"
          @click="clickEvent1(1, 1)"
        >
          E
        </div>
        <div
          :class="{
            'left-item-red': selectBox2 == -1,
            'left-item-click': selectBox2 == 1 && dir2 == 1,
            'left-item-unclick': selectBox2 == 1 && dir2 == 2,
          }"
          @click="clickEvent2(1, 1)"
        >
          S
        </div>
        <div
          :class="{
            'left-item': selectBox3 == -1,
            'left-item-click': selectBox3 == 1 && dir3 == 1,
            'left-item-unclick': selectBox3 == 1 && dir3 == 2,
          }"
          @click="clickEvent3(1, 1)"
        >
          F
        </div>
        <div
          :class="{
            'left-item': selectBox4 == -1,
            'left-item-click': selectBox4 == 1 && dir4 == 1,
            'left-item-unclick': selectBox4 == 1 && dir4 == 2,
          }"
          @click="clickEvent4(1, 1)"
        >
          P
        </div>
      </div>
      <div class="block-container">
        <div
          :class="{
            'right-item': selectBox1 == -1,
            'right-item-click': selectBox1 == 1 && dir1 == 2,
            'right-item-unclick': selectBox1 == 1 && dir1 == 1,
          }"
          @click="clickEvent1(2, 1)"
        >
          I
        </div>
        <div
          :class="{
            'right-item': selectBox2 == -1,
            'right-item-click': selectBox2 == 1 && dir2 == 2,
            'right-item-unclick': selectBox2 == 1 && dir2 == 1,
          }"
          @click="clickEvent2(2, 1)"
        >
          N
        </div>
        <div
          :class="{
            'right-item-red': selectBox3 == -1,
            'right-item-click': selectBox3 == 1 && dir3 == 2,
            'right-item-unclick': selectBox3 == 1 && dir3 == 1,
          }"
          @click="clickEvent3(2, 1)"
        >
          T
        </div>
        <div
          :class="{
            'right-item-red': selectBox4 == -1,
            'right-item-click': selectBox4 == 1 && dir4 == 2,
            'right-item-unclick': selectBox4 == 1 && dir4 == 1,
          }"
          @click="clickEvent4(2, 1)"
        >
          J
        </div>
      </div>
    </div>
    <div class="button" @click="click()">정답 제출하기</div>
  </div>
</template>

<script>
export default {
  name: "Event9",
  data() {
    return {
      dir1: window.localStorage.getItem("dir1"),
      dir2: window.localStorage.getItem("dir2"),
      dir3: window.localStorage.getItem("dir3"),
      dir4: window.localStorage.getItem("dir4"),
      selectBox1: window.localStorage.getItem("one"),
      selectBox2: window.localStorage.getItem("two"),
      selectBox3: window.localStorage.getItem("three"),
      selectBox4: window.localStorage.getItem("four"),
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
    click() {
      window.localStorage.setItem("dir1", this.dir1);
      window.localStorage.setItem("dir2", this.dir2);
      window.localStorage.setItem("dir3", this.dir3);
      window.localStorage.setItem("dir4", this.dir4);

      const one = this.dir1 == 1 ? -1 : 1;
      const two = this.dir2 == 1 ? -1 : 1;
      const three = this.dir3 == 2 ? -1 : 1;
      const four = this.dir4 == 2 ? -1 : 1;
      console.log(one + " " + two + " " + three + " " + four);

      window.localStorage.setItem("one", one);
      window.localStorage.setItem("two", two);
      window.localStorage.setItem("three", three);
      window.localStorage.setItem("four", four);
      this.$router.push("Event8");
    },
    back() {
      this.$router.go(-1);
    },
  },
  props: true,
};
</script>


<style scoped>
/* iOS only */
@supports (-webkit-touch-callout: none) {
  .container {
    min-height: -webkit-fill-available;
  }
}
.container {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 100vh;
  text-align: center;
}
.container .icon {
  height: 35px;
  width: 35px;
}
.container .text {
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  color: #ff4848;
}
.container .text2 {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #3d3d3d;
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
  /* height: 169px; */
  background: #ffe6e6;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  padding: 47px 0;
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
  background-color: #FFE6E6;
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
  /*margin-left: 20px;*/
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
  /*margin-left: 20px;*/
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
  /*margin-left: 10px;*/
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
  background-color: #FFE6E6;
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
  font-size: 16px;
  margin-left: 20px;
  text-align: left;
}
.container .button {
  width: 85%;
  height: 75px;
  background-color: #d2fbc4;
  border-radius: 25px;
  line-height: 75px;
  font-size: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  text-decoration: none;
  color: #0a7800;
  font-weight: 600;
}

@media screen and (max-width: 300px) {
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