<template>
<div class="container">
    <div class = "icon"> </div>
    <div class="text"> 어......어? <p />
        다시 한번 생각해봐...</div>
    <div class="block">
        <div class="block-container">
            <div :class="{'left-item' : selectBox1 == 0, 'left-item-click' : selectBox1 == 1 && dir1 == 1, 'left-item-unclick' : selectBox1 == 1 && dir1 == 2}" @click="clickEvent1(1, 1)"> E </div> 
            <div :class="{'right-item' : selectBox1 == 0, 'right-item-click': selectBox1 == 1 && dir1 == 2, 'right-item-unclick' : selectBox1 == 1 && dir1 == 1}" @click="clickEvent1(2, 1)"> I </div>
            <div class= "text-item"> 할아버지는 친구들과의 <p /> 등산을 좋아하신다! </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox2 == 0, 'left-item-click' : selectBox2 == 1 && dir2 == 1, 'left-item-unclick' : selectBox2 == 1 && dir2 == 2}" @click="clickEvent2(1, 1)"> S </div> 
            <div :class="{'right-item' : selectBox2 == 0, 'right-item-click': selectBox2 == 1 && dir2 == 2, 'right-item-unclick' : selectBox2 == 1 && dir2 == 1}" @click="clickEvent2(2, 1)"> N </div>
            <div class= "text-item"> 할아버지는 "만약에" <p /> 얘기를 지루해 하시는 편~ </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox3 == 0, 'left-item-click' : selectBox3 == 1 && dir3 == 1, 'left-item-unclick' : selectBox3 == 1 && dir3 == 2}" @click="clickEvent3(1, 1)"> F </div> 
            <div :class="{'right-item' : selectBox3 == 0, 'right-item-click': selectBox3 == 1 && dir3 == 2, 'right-item-unclick' : selectBox3 == 1 && dir3 == 1}" @click="clickEvent3(2, 1)"> T </div> 
            <div class= "text-item">할아버지는 감동적인 <p /> 공연을 봐도 눈물 한 방울 <p /> 안흘리는 냉혈한! </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox4 == 0, 'left-item-click' : selectBox4 == 1 && dir4 == 1, 'left-item-unclick' : selectBox4 == 1 && dir4 == 2}" @click="clickEvent4(1, 1)"> J </div> 
            <div :class="{'right-item' : selectBox4 == 0, 'right-item-click': selectBox4 == 1 && dir4 == 2, 'right-item-unclick' : selectBox4 == 1 && dir4 == 1}" @click="clickEvent4(2, 1)"> P </div> 
            <div class= "text-item"> 할아버지는 데이트 일주일<p /> 전부터 1부터 10까지 계획 <p />을 다 세워놓은 <p /> 계획적인 남자! </div>
        </div>
    </div>
    <router-link to= "/event5_1" class="button"> 정답 제출하기 </router-link>
</div>
</template>

<script>
export default {
  name: "Event5",
    data(){
        return{
            selectBox1: 0,
            dir1: 0,
            selectBox2: 0,
            dir2: 0,
            selectBox3: 0,
            dir3: 0,
            selectBox4: 0,
            dir4: 0,
        }
    },
    methods: {
        clickEvent1(dir, num){
            this.dir1 = dir;
            this.selectBox1 = num;
        },
        clickEvent2(dir, num){
            this.dir2 = dir;
            this.selectBox2 = num;
        },
        clickEvent3(dir, num){
            this.dir3 = dir;
            this.selectBox3 = num;
        },
        clickEvent4(dir, num){
            this.dir4 = dir;
            this.selectBox4 = num;
        }
    },
    props: true
};
</script>


<style scoped>
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
    margin-left: 19px;
    margin-top: 53px;
    background-image: url("../assets/backIcon.png");
}
.container .text{
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #000000;
    font-family: 'Inter', sans-serif;
    line-height: 100%;
}

.container .block{
    margin-top: 69px;
    /* margin-bottom: auto; */
    margin-left: auto;
    margin-right: auto;
}

.container .block .block-container{
    display: flex;
    width: 330px;
    height: 94px;
}

.left-item{
    width: 55px;
    height: 70px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
    font-size: 35px;
    line-height: 70px;
}

.left-item-click{
    width: 55px;
    height: 70px;
    background-color: #9AE481;
    color: #FFFFFF;
    font-size: 35px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
    line-height: 70px;
}

.left-item-unclick{
    width: 55px;
    height: 70px;
    background-color: #FFFFFF;
    color: #E2E2E2;
    font-size: 35px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
    line-height: 70px;
}

.right-item{
    width: 55px;
    height: 70px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
    font-size: 35px;
    margin-left: 23px;
    line-height: 70px;
}

.right-item-click{
    width: 55px;
    height: 70px;
    background-color: #9AE481;
    color: #FFFFFF;
    font-size: 35px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
    margin-left: 23px;
    line-height: 70px;
}

.right-item-unclick{
    width: 55px;
    height: 70px;
    background-color: #FFFFFF;
    color: #E2E2E2;
    font-size: 35px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
    margin-left: 23px;
    line-height: 70px;
}
.text-item{
    margin-left: 22px;
    margin-top: auto;
    margin-bottom: auto;
    /* font-weight: 400; */
    font-size: 16px;    
    line-height: 1px;
    text-align: left;
    font-family: 'Inter', sans-serif;
}
.container .button{
    width: 330px;
    height: 75px;
    background-color: #DDD6B3;
    border-radius: 25px;
    line-height: 75px;
    font-size: 25px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 91px;
    text-decoration: none;
    color: #474747;
    font-family: 'Pretendard-Regular';
    font-weight: 600;
    font-style: normal;
}
</style>