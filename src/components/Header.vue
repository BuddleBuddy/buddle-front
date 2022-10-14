<template>
    <div>
        <div class="logo-container">
            <img class="logo" alt="logo" src="../assets/logo.png">
        </div>
        <div class="nav">
          <div class="nav_con">
            <router-link to='/intro' :class="selectTab == 0 ? 'active' : 'tag'" @click="setColor(0)"> 시장소개 </router-link>
            <div :class="{line: true, active: selectTab === 0 }" @click="setColor(0)"></div>
          </div>

          <div class="nav_con">
            <router-link to='/contest' :class="selectTab == 1 ? 'active' : 'tag'" @click="setColor(1)"> EVENT </router-link>
            <div :class="{line: true, active: selectTab === 1 }" @click="setColor(1)"></div>
          </div>
         <div class="nav_con">
            <router-link to="/history" :class="selectTab == 2 ? 'active' : 'tag'" @click="setColor(2)"> 히스토리 </router-link>
            <div :class="{line: true, active: selectTab === 2 }" @click="setColor(2)"></div>
          </div>
          </div>

        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            selectTab : 1,
            path: () => this.$router.currentRoute.value.path,
        }
    },
    mounted() {
      console.log("select")
      if (this.$route.path === '/intro') {
        console.log("intro")
        this.selectTab = 0
      }
      else if (this.$route.path === '/contest') {
        console.log("contest")
        this.selectTab = 1
      }
      else if (this.$route.path === '/history') {
        console.log("history")
        this.selectTab = 2
      }
    },
  methods: {
        setColor(num) {
            this.selectTab = num;
        },
    }
}
</script>


<style scoped>
.logo-container{
    background-color: #ffffff;
    margin: 0 auto;
}
.logo {
  width: 30%;
}
.nav{
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 55px;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    color: #898645;
    background-color: #ffffff;
}
.nav_con{
  flex: 1;
  height: 55px;
}
.tag{
    color: #686868;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 55px;
}
.active {
    color: #50A65D;
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 50px;
}
.line{
  width: 100%;
  height: 5px;
}
.line.active {
  width: 100%;
  height: 5px;
  background: #50A65D;
}
</style>