<template>
    <div class="header">
        <div>
            <img class="logo" alt="logo" src="../assets/logo.png">
        </div>
        <div class="nav">
            <router-link to='/intro' :class="selectTab == 0 ? 'active' : 'tag'" @click="setColor(0)"> 시장소개 </router-link>
            <router-link to='/contest' :class="selectTab == 1 ? 'active' : 'tag'" @click="setColor(1)"> 콘테스트 </router-link>
            <router-link to="/history" :class="selectTab == 2 ? 'active' : 'tag'" @click="setColor(2)"> 히스토리 </router-link>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            selectTab : 1,
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
.header{
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
}

.header .logo{
    margin: 0 auto;
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
    color: #50A65D;
    text-decoration: none;
    /* border-bottom: 1px solid #50A65D; */
}
</style>