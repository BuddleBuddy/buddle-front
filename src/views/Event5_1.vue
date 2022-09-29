<template>
<div class="container">
    <div class = "icon"> </div>
    <div class="text"> 정답~! <br />
        오순할멈은 어려울껴~ </div>
    <div class = "content">
        <div class = "mid-icon"> </div>
        <div class = "mid-content">
            <div class ="content-item"> E </div>
            <div class ="content-item"> S </div>
            <div class ="content-item"> T </div>
            <div class ="content-item"> J </div>
        </div>
        <div class = "buttom-content"> 
            <div class="buttom-img"> </div>
            <div class="buttom-text"> 너 천재구나? </div>
        </div>
    </div>
    <router-link to= "/event6" class="button"> 다음으로 </router-link>
</div>
</template>

<script>
export default {
  name: "Event5_1"
};
</script>


<style scoped>
@font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');

.container{
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
.container .icon{
    height: 35px;
    width: 35px;
    margin-left: 15px;
    margin-top: 15px;
    background-image: url("../assets/backIcon.png");
}
.container .text{
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    color: #000000;
    font-family: 'Pretendard-Regular';
    line-height: 100%;
    margin-top: 33px;
}

.container .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    flex: 1;
}
.container .content .mid-icon{
    width: 72px;
    height: 72px;
    margin-left: auto;
    margin-right: auto;
    background-image: url("../assets/midIcon.png");
}

.container .content .mid-content{
    display: flex;
    /* margin-left: auto;
    margin-right: auto; */
}

.container .content .mid-content .content-item{
    margin-top: 27px;
    width: 69px;
    height: 87px;
    border: 2px solid #7AD75A;
    box-shadow: 0px 0px 30px -2px rgba(122, 215, 90, 0.15);
    border-radius: 12.1172px;
    font-weight: 400;
    font-size: 40px;
    font-family: 'SBAggroB';
    font-style: normal;
    line-height: 87px;
    text-align: center;
    color: #232323;
    
    margin-left: auto;
    margin-right: auto;
}

.container .content .buttom-content{
    margin-bottom: 57px;
    display: flex;
    flex: 1;
    justify-content: center;
    margin-top: 50px;
}

.container .content .buttom-content .buttom-img{
    width: 170px;
    height: 201px;
    background-image: url("../assets/papa.png");
}

.container .button{
    position: absolute;
    bottom: 50px;
    width: 330px;
    height: 75px;
    background-color: #D2FBC4;
    border-radius: 25px;
    line-height: 75px;
    font-weight: 600;
    font-size: 25px;
    left: 50%;
    transform: translate(-50%, 0%);
    text-decoration: none;
    color: #0A7800;
    font-family: 'Pretendard-Regular';
}
</style>