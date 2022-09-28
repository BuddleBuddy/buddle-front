<template>
    <div class="root">
        <div class = "icon"> </div>
        <div class="title"> 오~ 축하혀~ <p /> 우리 MBTI를 <p /> 모두 맞혔네? </div>
        <div class="img"> </div>
        <div class="mid-text"> 우리 강아지~ <p /> 다 맞췄으니 선물을 줘야겠구나! </div>
        <div class="second"> 
            <div class="title"> 버들부부의 선물보따리 </div>
            <div class="set">
                <div class="item">
                    <img class="gift1" alt="gift1" src="../assets/logo.png">
                    <div class="content2"> 2명 </div>
                </div>
                <div class="item">
                    <img class="gift1" alt="gift2" src="../assets/logo.png">
                    <div class="content2"> 5명 </div>
                </div>
            </div>
        </div>
        <div class="third"> 
            <img class="vector" alt="vector" src="../assets/vector.png">
            <div class="txt"> 공유하기 </div>
        </div>
        <div class="fourth">
            <router-link to= "/event11" class="first-item"> 선물 받으러 가기! </router-link>
            <router-link to= "/event12" class="second-item"> 홈으로 가기 </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "Event10",

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}
.root {
    max-width: 500px;
    min-height: 100vh;
    height: 100%;
    overflow: auto;
    background-color: #FFFFFF;
}
.root .icon{
    height: 35px;
    width: 35px;
    margin-left: 19px;
    margin-top: 53px;
    background-image: url("../assets/backIcon.png");
}

.root .title{
    margin-top: 60px;
    width: 167px;
    height: 108px;
    font-family: 'Pretendard-Regular';
    font-style: normal;
    line-height: 1px;
    font-size: 30px;
    font-weight: 900;
    margin-left: auto;
    margin-right: auto;
    color: #000000;
}

.root .img {
    background-image: url("../assets/Rectangle.png");
    margin-top: 47px;
    margin-left: auto;
    margin-right: auto;
    width: 336px;
    height: 408px;
}

.root .mid-text{
    margin-top: 53px;
    font-family: 'Pretendard-Regular';
    font-style: normal;
    font-weight: 600;  
    font-size: 21px; 
    color: #626262;   
}
.root .second{
    display: flex;
    flex-direction: column;
    margin-top: 114px;
}

.root .second .title{
    width: 310px;
    height: 32px;
    font-family: 'Pretendard-Regular';
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    text-align: center;
    color: #626262;
}

.root .second .set{
    display: flex;
    width: 297px;
    height: 204px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
}

.root .second .set .item{
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}

.root .second .set .item .gift1{
    /* position: relative; */
    width: 141px;
    height: 202px;
}

.root .second .set .item .content2{
    position: relative;
    width: 58px;
    height: 58px;
    line-height: 58px;
    background-color: #CBF8CF;
    color: #0B871E;
    border-radius: 50px;
    margin-left: auto;
    margin-right: auto;
}

.root .third{
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 97px;
    margin-bottom: 203px;
    margin-left: 25px;
    margin-right: 25px;
}

.root .third .txt{
    position: absolute;
    left: 42%; top: 0;
}
.root .fourth{
    display: flex;
    flex-direction: column;
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
    font-family: 'Pretendard-Regular';
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