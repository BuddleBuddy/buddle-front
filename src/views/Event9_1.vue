<template>
<div class="container">
    <div class = "icon"> </div>
    <div class="text"> 정답~! <br />
        정말 천재구나?? </div>
    <div class = "content">
        <div class = "mid-icon"> </div>
        <div class = "mid-content">
            <div class ="content-item"> I </div>
            <div class ="content-item"> N </div>
            <div class ="content-item"> F </div>
            <div class ="content-item"> P </div>
        </div>
        <div class = "buttom-content"> 
            <div class="buttom-img"> </div>
            <div class="buttom-text"> 내가 바로 <br>
                열정적인 중재자?
            </div>
        </div>
    </div>
    <router-link to= "/event10" class="button"> 다음으로 </router-link>
</div>
</template>

<script>
export default {
  name: "Event9_1"
};
</script>


<style scoped>
@font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');

.container{
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    min-height: 100vh;
}
.container .icon{
    height: 35px;
    width: 35px;
    margin-left: 15px;
    margin-top: 15px;
    background-image: url("../assets/backIcon.png");
}
.container .text{
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #000000;
    margin-top: 33px;
}

.container .content{
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    display: flex;
    margin-bottom: 57px;
    margin-top: 50px;
}

.container .content .buttom-content .buttom-img{
    width: 208px;
    height: 282px;
    background-image: url("../assets/grandma.png");
}

.container .content .buttom-content .buttom-text{
    text-align: left;
}

.container .button{
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 330px;
    height: 75px;
    background-color: #D2FBC4;
    border-radius: 25px;
    line-height: 75px;
    font-weight: 600;
    font-size: 25px;
    text-decoration: none;
    color: #0A7800;
}
</style>