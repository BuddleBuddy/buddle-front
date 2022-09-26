<template>
<div class="container">
    <div class = "icon"> </div>
    <div class="text"> 도손 할아버지의 <p />
        mbti는 뭘까?</div>
    <div class="block">
        <div class="block-container">
            <div class="left-item"> E </div> 
            <div class="right-item"> I </div>
            <div class= "text-item"> 할아버지는 친구들과의 <p /> 등산을 좋아하신다! </div>
        </div>
        <div class="block-container"> 
            <div class="left-item"> S </div> 
            <div class="right-item"> N </div>
            <div class= "text-item"> 할아버지는 "만약에" <p /> 얘기를 지루해 하시는 편~ </div>
        </div>
        <div class="block-container"> 
            <div class="left-item"> F </div> 
            <div class="right-item"> T </div> 
            <div class= "text-item">할아버지는 감동적인 <p /> 공연을 봐도 눈물 한 방울 <p /> 안흘리는 냉혈한! </div>
        </div>
        <div class="block-container"> 
            <div class="left-item"> J </div> 
            <div class="right-item"> P </div> 
            <div class= "text-item"> 할아버지는 데이트 일주일<p /> 전부터 1부터 10까지 계획 <p />을 다 세워놓은 <p /> 계획적인 남자! </div>
        </div>
    </div>
    <router-link to= "/event4" class="button"> 정답 제출하기 </router-link>
</div>
</template>

<script>
export default {
  name: "Event2"
};
</script>

<style scoped>
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
    margin-left: 19px;
    margin-top: 53px;
    background-image: url("../assets/backIcon.png");
}
.container .text{
    margin-top: 33px;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
    margin-left: auto;
    margin-right: auto;
}

.container .block{
    margin-top: 69px;
    margin-bottom: 91px;
    margin-left: auto;
    margin-right: auto;
}

.container .block .block-container{
    margin-top: 20px;
    display: flex;
    width: 330px;
    height: 75px;
}

.left-item{
    width: 55px;
    height: 70px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
}

.right-item{
    width: 55px;
    height: 70px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
    margin-left: 23px;
}

.text-item{
    margin-left: 22px;
    /* font-weight: 400; */
    font-size: 16px;    
    line-height: 1px;
    text-align: left;
}

.container .button{
    width: 330px;
    height: 75px;
    margin-bottom: 50px;
    background-color: #DDD6B3;
    border-radius: 25px;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    color: #474747;
    font-size: 25px;
}

</style>