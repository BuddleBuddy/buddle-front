<template>
    <div>
        <div class="logo-container">
            <img class="logo" alt="logo" src="../assets/logo.png">
        </div>
        <div class="nav">
            <router-link to='/intro' :class="selectTab == 0 ? 'active' : 'tag'" @click="setColor(0)"> 시장소개 </router-link>
            <router-link to='/contest' :class="selectTab == 1 ? 'active' : 'tag'" @click="setColor(1)"> 콘테스트 </router-link>
            <router-link to="/history" :class="selectTab == 2 ? 'active' : 'tag'" @click="setColor(2)"> 히스토리 </router-link>
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
    methods: {
        setColor(num) {
            this.selectTab = num;
        }
    }
}
</script>


<style scoped>

.logo-container{
    background-color: #ffffff;
    margin: 0 auto;
}

.nav{
    display: flex;
    position: sticky;
    top: 0px;
    z-index: 1;  
    width: 100%;
    height: 55px;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    color: #898645;
    background-color: #ffffff;
}

.tag{
    font-family: 'Pretendard';
    color: #686868;
    text-decoration: none;
    flex: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
}

.active {
    color: #50A65D;
    text-decoration: none;
    flex: 1;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
</style>