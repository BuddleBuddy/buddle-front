<template>
<div class="container">
    <div class = "icon"> </div>
    <div class="text"> 땡! <br />
        다시 한번 생각해봐~ </div>
    <div class="block">
        <div class="block-container">
            <div :class="{'left-item' : selectBox1 == -1, 'left-item-click' : selectBox1 == 1 && dir1 == 1, 'left-item-unclick' : selectBox1 == 1 && dir1 == 2}" @click="clickEvent1(1, 1)"> E </div> 
            <div :class="{'right-item' : selectBox1 == 1, 'right-item-red': selectBox1 == -1, 'right-item-click': selectBox1 == 1 && dir1 == 2, 'right-item-unclick' : selectBox1 == 1 && dir1 == 1}" @click="clickEvent1(2, 1)"> I </div>
            <div class= "text-item"> 영감은 버들시장에서 유명 <p /> 한 초특급 인싸여~ </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox2 == -1, 'left-item-click' : selectBox2 == 1 && dir2 == 1, 'left-item-unclick' : selectBox2 == 1 && dir2 == 2}" @click="clickEvent2(1, 1)"> S </div> 
            <div :class="{'right-item' : selectBox2 == 1, 'right-item-red': selectBox2 == -1, 'right-item-click': selectBox2 == 1 && dir2 == 2, 'right-item-unclick' : selectBox2 == 1 && dir2 == 1}" @click="clickEvent2(2, 1)"> N </div>
            <div class= "text-item"> 현실적인 얘기만 좋아혀! <p /> ㅡㅡ </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox3 == 1, 'left-item-red': selectBox3 == -1, 'left-item-click' : selectBox3 == 1 && dir3 == 1, 'left-item-unclick' : selectBox3 == 1 && dir3 == 2}" @click="clickEvent3(1, 1)"> F </div> 
            <div :class="{'right-item' : selectBox3 == -1, 'right-item-click': selectBox3 == 1 && dir3 == 2, 'right-item-unclick' : selectBox3 == 1 && dir3 == 1}" @click="clickEvent3(2, 1)"> T </div> 
            <div class= "text-item">피도 눈물도 없는 영감.. <p /> 공감능력 0% 예상헌다잉 </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox4 == -1, 'left-item-click' : selectBox4 == 1 && dir4 == 1, 'left-item-unclick' : selectBox4 == 1 && dir4 == 2}" @click="clickEvent4(1, 1)"> J </div> 
            <div :class="{'right-item' : selectBox4 == 1, 'right-item-red': selectBox4 == -1, 'right-item-click': selectBox4 == 1 && dir4 == 2, 'right-item-unclick' : selectBox4 == 1 && dir4 == 1}" @click="clickEvent4(2, 1)"> P </div> 
            <div class= "text-item"> 영감은 아주 계획적이고 <p /> 철저해. 가끔은 융통성 없 <p />지만.. 나와 달라서 반했지 <p />
             뭐~ </div>
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
            dir1: window.localStorage.getItem("dir1"),
            dir2: window.localStorage.getItem("dir2"),
            dir3: window.localStorage.getItem("dir3"),
            dir4: window.localStorage.getItem("dir4"),
            selectBox1: window.localStorage.getItem("one"),
            selectBox2: window.localStorage.getItem("two"),
            selectBox3: window.localStorage.getItem("three"),
            selectBox4: window.localStorage.getItem("four"),
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
    font-weight: 600;
    font-style: normal;
}


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
    line-height: 36px;
    text-align: center;
    color: #000000;
    font-family: 'Pretendard-Regular';
    line-height: 1;
}

.container .block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    flex: 1;
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
.left-item-red{
    width: 55px;
    height: 70px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
    font-size: 35px;
    line-height: 70px;
    color: #F66D6D;
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
.right-item-red{
    width: 55px;
    height: 70px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
    font-size: 35px;
    margin-left: 23px;
    line-height: 70px;
    color: #F66D6D;
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
    font-family: 'Pretendard-Regular';
}
.container .button{
    width: 330px;
    height: 75px;
    background-color: #D2FBC4;
    border-radius: 25px;
    line-height: 75px;
    font-size: 25px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    text-decoration: none;
    color: #0A7800;
    font-family: 'Pretendard-Regular';
    font-weight: 600;
    font-style: normal;
}
</style>