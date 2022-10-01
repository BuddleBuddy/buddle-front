<template>
    <div class="root">
        <div class = "icon" @click="back()"> </div>
        <img class = "content" src="../assets/ev10.png"> 
        <div class="third"> 
            <img class="vector" alt="vector" src="../assets/vector.png">
            <div class="txt"> 공유하기 </div>
            <div class="clip"> <Clipboard/> </div>
        </div>
        <div class="fourth">
            <router-link to= "/event11" class="first-item"> 선물 받으러 가기! </router-link>
            <router-link to= "/event12" class="second-item"> 홈으로 가기 </router-link>
        </div>
    </div>
</template>

<script>
import Clipboard from "@/components/Clipboard";
export default {
    name: "Event10",
    components: {Clipboard},
    methods: {
        back(){
            this.$router.go(-1);
        }
    },
};
</script>

<style scoped>
.root {
    max-width: 500px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
}
.root .icon{
    height: 35px;
    width: 35px;
    /* margin-left: 15px;
    margin-top: 15px; */
    background-image: url("../assets/backIcon.png");
}

.root .content{
    width: 391px;
    height: 907px;
    margin: auto;
}

.root .third{
    display: flex;
    flex-direction: column;
    margin-top: 97px;
    margin-bottom: 203px;
}

.root .third .txt{
    position: relative;
    left: 50%; 
    transform: translate(-50%, -100%);
}
.root .fourth{
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
}
.root .fourth .first-item{
    width: 330px;
    height: 75px;
    background-color: #D2FBC4;
    color: #0A7800;
    text-decoration: none;
    font-family: 'Pretendard-Regular';
    font-size: 25px;
    line-height: 75px;
    border-radius: 25px;
    margin-left: auto;
    margin-right: auto;
}

.root .fourth .second-item{
    width: 330px;
    height: 75px;
    margin-top: 20px;
    color: #0A7800;
    font-size: 25px;
    line-height: 75px;
    border: 2px solid #BAE2AD;
    text-decoration: none;
    border-radius: 25px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 118px;
}
 

</style>