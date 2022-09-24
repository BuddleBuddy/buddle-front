<template>
  <div class="header">
    <div class="nav">

      <router-link to='intro/store' :class="selectTab == 0 ? 'active' : 'tag'" @click="setColor(0)"> # 맛집 </router-link>
      <router-link to='intro/place' :class="selectTab == 1 ? 'active' : 'tag'" @click="setColor(1)"> # 가볼만한 곳 </router-link>

    </div>

    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import place from "@/components/intro/place";
import store from "@/components/intro/store";

export default {
  name: "IntroTab",
  data() {
    return {
      selectTab: 0,
    }
  },
  methods: {
    setColor(num) {
      this.selectTab = num;
    }
  }
}

  /*var StoreComponent = {
    template: '<div>store</div>'
  }

var PlaceComponent = {
  template: '<div>place</div>'
}*/

</script>


<style scoped>
.header{
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.header .nav{
  display: flex;
  /* position: sticky; */
  /* top: 0px;   */
  width: 100%;
  height: 55px;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  color: #898645;
}

.tag{
  color: #686868;
  text-decoration: none;
}

.active {
  color: black;
  text-decoration: none;
  /* border-bottom: 1px solid #50A65D; */
}

</style>