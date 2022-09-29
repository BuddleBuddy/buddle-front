<template>
<div class="container">
    <div class = "icon"> </div>
    <div class="text"> 땡! <p />
        오순 할멈 성격을 잘 봐봐! </div>
    <div class="block">
        <div class="block-container">
            <div :class="{'left-item' : selectBox1 == 0, 'left-item-red' : selectBox1 == -1, 'left-item-click' : selectBox1 == 1 && dir1 == 1, 'left-item-unclick' : selectBox1 == 1 && dir1 == 2}" @click="clickEvent1(1, 1)"> E </div> 
            <div :class="{'right-item' : selectBox1 == 0, 'right-item-click': selectBox1 == 1 && dir1 == 2, 'right-item-unclick' : selectBox1 == 1 && dir1 == 1}" @click="clickEvent1(2, 1)"> I </div>
            <div class= "text-item"> 할머니의 취미는 카페에서 <p /> 혼자 독서하시는 것! </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox2 == 0, 'left-item-red' : selectBox2 == -1, 'left-item-click' : selectBox2 == 1 && dir2 == 1, 'left-item-unclick' : selectBox2 == 1 && dir2 == 2}" @click="clickEvent2(1, 1)"> S </div> 
            <div :class="{'right-item' : selectBox2 == -1, 'right-item-click': selectBox2 == 1 && dir2 == 2, 'right-item-unclick' : selectBox2 == 1 && dir2 == 1}" @click="clickEvent2(2, 1)"> N </div>
            <div class= "text-item"> 할머니는 종종 생각에 잘 잠 <p /> 기는 편! </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox3 == -1, 'left-item-click' : selectBox3 == 1 && dir3 == 1, 'left-item-unclick' : selectBox3 == 1 && dir3 == 2}" @click="clickEvent3(1, 1)"> F </div> 
            <div :class="{'right-item' : selectBox3 == 0, 'right-item-red' : selectBox3 == -1, 'right-item-click': selectBox3 == 1 && dir3 == 2, 'right-item-unclick' : selectBox3 == 1 && dir3 == 1}" @click="clickEvent3(2, 1)"> T </div> 
            <div class= "text-item"> 할아버지를 반하게 한 할머 <p /> 니의 매력은 속 깊은 공감능 <p /> 력! </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox4 == 0, 'left-item-red' : selectBox4 == -1, 'left-item-click' : selectBox4 == 1 && dir4 == 1, 'left-item-unclick' : selectBox4 == 1 && dir4 == 2}" @click="clickEvent4(1, 1)"> J </div> 
            <div :class="{'right-item' : selectBox4 == 0, 'right-item-click': selectBox4 == 1 && dir4 == 2, 'right-item-unclick' : selectBox4 == 1 && dir4 == 1}" @click="clickEvent4(2, 1)"> P </div> 
            <div class= "text-item"> 할머니는 촬영 소식에 바로 <p /> 즉흥적으로 나갈 수 있는 사  <p /> 람! <p />
             뭐~ </div>
        </div>
    </div>
    <router-link to= "/event5_1" class="button"> 정답 제출하기 </router-link>
</div>
</template>

<script>
export default {
  name: "Event9",
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
    font-family: 'Pretendard-Regular';
    line-height: 1;
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
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translate(-50%, 0%);
    width: 330px;
    height: 75px;
    background-color: #D2FBC4;
    border-radius: 25px;
    line-height: 75px;
    font-size: 25px;

    text-decoration: none;
    color: #0A7800;
    font-family: 'Pretendard-Regular';
}
</style>