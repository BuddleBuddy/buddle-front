<template>
  <div class="intoTab">
    <div class="tabs">
      <div
          :class="{ tab: true, active: selectTab === 0 }"
          @click="setSelectTab(0)"
      >
        # 맛집
        <div :class="{line: true, active: selectTab === 0 }"
             @click="setSelectTab(0)"
        ></div>
      </div>

      <div
          :class="{ tab: true, active: selectTab === 1 }"
          @click="setSelectTab(1)"
      >
        # 가볼만한 곳
        <div :class="{line: true, active: selectTab === 1 }"
             @click="setSelectTab(1)"
        ></div>
      </div>
    </div>
    <div class="tab-containers">
      <div :class="{ 'tab-container': true, active: selectTab === 0 }">
        <div>
          <img class="photo" src="../assets/place.png">
        </div>
        <div class="text" id="title">
          87 닭강정
        </div>
        <div class="text" id="description">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus adipiscing ac non
          magna hac etiam.</div>
        <div class="text" id="hash">#매운맛 #간장맛 #간식</div>
      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 0 }">
        <div>
          <img class="photo" src="../assets/place.png">
        </div>
        <div class="text" id="title">
          87 닭강정
        </div>
        <div class="text" id="description">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus adipiscing ac non
          magna hac etiam.</div>
        <div class="text" id="hash">#매운맛 #간장맛 #간식</div>
      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 0 }">
        <div>
          <img class="photo" src="../assets/place.png">
        </div>
        <div class="text" id="title">
          87 닭강정
        </div>
        <div class="text" id="description">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus adipiscing ac non
          magna hac etiam.</div>
        <div class="text" id="hash">#매운맛 #간장맛 #간식</div>
      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 1 }">
        <div>
          <img class="photo" src="../assets/place.png">
        </div>
        <div class="text" id="title">
          87 닭강정
        </div>
        <div class="text" id="description">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus adipiscing ac non
          magna hac etiam.</div>
        <div class="text" id="hash">#매운맛 #간장맛 #간식</div>
      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 1 }">
        <div>
          <img class="photo" src="../assets/place.png">
        </div>
        <div class="text" id="title">
          87 닭강정
        </div>
        <div class="text" id="description">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus adipiscing ac non
          magna hac etiam.</div>
        <div class="text" id="hash">#매운맛 #간장맛 #간식</div>
      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 1 }">
        <div>
          <img class="photo" src="../assets/place.png">
        </div>
        <div class="text" id="title">
          87 닭강정
        </div>
        <div class="text" id="description">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus adipiscing ac non
          magna hac etiam.</div>
        <div class="text" id="hash">#매운맛 #간장맛 #간식</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroTab",
  data() {
    return {
      selectTab: 0,
    };
  },
  methods: {
    setSelectTab(num) {
      this.selectTab = num;
    },
  },
};
</script>


<style scoped>
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tab.active {
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}

.tab {
  font-size: 20px;
  margin-bottom: 5px;
  color: #808080;
}

.tab-container {
  background-color: aqua;
  display: none;
}

.tab-container.active {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.photo {
  width: 90%;
  height: 90%;
  border-radius: 25px;
  margin-top: 40px;
  margin-bottom: 40px;

}

.text{
  display: flex;
  justify-content: flex-start;
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
}

#title{
  font-size: larger;
  font-weight: bold;
}

#description{
  font-size: large;
}

#hash{
  font-size: larger;
  font-weight: bold;
  color: #50A65D;
}

.line.active {
  width: 225px;
  height: 5px;
  margin-top: 10px;
  background: black;
}
.line{
  width: 225px;
  height: 2px;
  margin-top: 11px;
  background: grey;
}
</style>