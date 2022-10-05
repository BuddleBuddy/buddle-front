<template>
  <div class="container" @click="click()">
    <img
      class="icon"
      align="left"
      src="../assets/backIcon.png"
      @click.stop="back()"
      @load="imgLoadedMethod"
    />
    <div class="item">
      <div class="bubble-container">
      <img
        :class="{ first: true, active: loaded }"
        src="../assets/papaEvent/first.png"
      />
      <img
        :class="{ first: true, active: loaded }"
        src="../assets/papaEvent/first_1.png"
      />
      </div>
      <div class="bubble-container">
      <img
        :class="{ second: true, active: loaded }"
        src="../assets/papaEvent/second.png"
        style="height: 3.9vh"
      />
      </div>
      <div class="bubble-container right">
      <img
        :class="{ third: true, active: loaded }"
        src="../assets/papaEvent/third.png"
        style="height: 3.9vh"
      />
      </div>
      <div class="bubble-container left">
      <img
        :class="{ fourth: true, active: loaded }"
        src="../assets/papaEvent/fourth.png"
        style="height: 9.5vh"
      />
      </div>
      <div class="bubble-container right">
      <img
        :class="{ fifth: true, active: loaded }"
        src="../assets/papaEvent/fifth.png"
        style="height: 7.1%"
      />
      </div>
    </div>
    <img class="bottom" src="../assets/touch.png" />
  </div>
</template>

<script>
export default {
  name: "Event2",
  data: function () {
    return {
      loaded: false,
    };
  },
  methods: {
    imgLoadedMethod() {
      this.loaded = true;
    },
    click() {
      this.$router.push("Event3");
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.container .item{
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  align-items: flex-start;
  padding-left: 30px;
  padding-right: 30px;
}

.item .bubble-container:nth-child(1){
  margin-bottom: 40px;
}

.item .bubble-container.right{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 5%;
}

.item .bubble-container.left{
  display: flex;
  /* width: 100%; */
  margin-top: 5%;
}

.bubble-container img{
  object-fit: contain;
}

img.active {
  opacity: 1;
}

.first {
  opacity: 0;
  transition: opacity 1s 0.5s;
}
.second {
  opacity: 0;
  transition: opacity 1s 1.5s;
}
.third {
  opacity: 0;
  transition: opacity 1s 2.5s;
}
.fourth {
  opacity: 0;
  transition: opacity 1s 3.5s;
}
.fifth {
  opacity: 0;
  transition: opacity 1s 4.5s;
}
.container {
  max-width: 500px;
  min-height: 100vh;
  background-image: url("../assets/papaEvent/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.container .icon {
  height: 35px;
  width: 35px;
  z-index: 1;
  }

.container .bottom {
  position: absolute;
  width: 85%;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>