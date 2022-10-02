<template>
<div class="container">
    <div class = "icon" @click="back()"> </div>
    <div class="text"> 오순 할머니의 <br>
        mbti는 뭘까?</div>
    <div class="block">
        <div class="block-container">
            <div :class="{'left-item' : selectBox1 == 0, 'left-item-click' : selectBox1 == 1 && dir1 == 1, 'left-item-unclick' : selectBox1 == 1 && dir1 == 2}" @click="clickEvent1(1, 1)"> E </div> 
            <div :class="{'right-item' : selectBox1 == 0, 'right-item-click': selectBox1 == 1 && dir1 == 2, 'right-item-unclick' : selectBox1 == 1 && dir1 == 1}" @click="clickEvent1(2, 1)"> I </div>
            <div class= "text-item"> 'Story 공감’에서 혼자 독서 <br> 하기를 좋아혀~ </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox2 == 0, 'left-item-click' : selectBox2 == 1 && dir2 == 1, 'left-item-unclick' : selectBox2 == 1 && dir2 == 2}" @click="clickEvent2(1, 1)"> S </div> 
            <div :class="{'right-item' : selectBox2 == 0, 'right-item-click': selectBox2 == 1 && dir2 == 2, 'right-item-unclick' : selectBox2 == 1 && dir2 == 1}" @click="clickEvent2(2, 1)"> N </div>
            <div class= "text-item"> ‘항동 철길’을 걸을 떄면 추  <br> 억에 잠기곤 혀 </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox3 == 0, 'left-item-click' : selectBox3 == 1 && dir3 == 1, 'left-item-unclick' : selectBox3 == 1 && dir3 == 2}" @click="clickEvent3(1, 1)"> F </div> 
            <div :class="{'right-item' : selectBox3 == 0, 'right-item-click': selectBox3 == 1 && dir3 == 2, 'right-item-unclick' : selectBox3 == 1 && dir3 == 1}" @click="clickEvent3(2, 1)"> T </div> 
            <div class= "text-item"> 할멈은 속이 깊어~ 그 모습 <br> 에 반해부렸지 뭐~ </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox4 == 0, 'left-item-click' : selectBox4 == 1 && dir4 == 1, 'left-item-unclick' : selectBox4 == 1 && dir4 == 2}" @click="clickEvent4(1, 1)"> J </div> 
            <div :class="{'right-item' : selectBox4 == 0, 'right-item-click': selectBox4 == 1 && dir4 == 2, 'right-item-unclick' : selectBox4 == 1 && dir4 == 1}" @click="clickEvent4(2, 1)"> P </div> 
            <div class= "text-item"> ‘옹심이집’에서 골목식당 촬 <br> 영한다는 소리에 즉흥적으로 <br> 달려가드라고~  </div>
        </div>
    </div>
    <div class="button" @click="click()"> 정답 제출하기 </div>
</div>
</template>

<script>
export default {
    name: "Event7",
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
        },
        click(){
            if(this.dir1 == 0 || this.dir2 == 0 || this.dir3 == 0 || this.dir4 == 0){
                alert('모든 항목을 선택해주세요 :) ')
            }
            else{
                window.localStorage.setItem('dir1', this.dir1);
                window.localStorage.setItem('dir2', this.dir2);
                window.localStorage.setItem('dir3', this.dir3);
                window.localStorage.setItem('dir4', this.dir4);
                const one = this.dir1 == 1 ? -1 : 1;
                const two = this.dir2 == 1 ? -1 : 1;
                const three = this.dir3 == 2 ? -1 : 1;
                const four = this.dir4 == 1 ? -1 : 1;
                
                window.localStorage.setItem('one', one);
                window.localStorage.setItem('two', two);
                window.localStorage.setItem('three', three);
                window.localStorage.setItem('four', four);
                console.log(one + " " + two + " " + three + " " + four);
                this.$router.push('Event8');
            }
        },
        back(){
        this.$router.go(-1);
        }
    },
    props: true
};
</script>

<style scoped>
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
    /* margin-left: 15px;
    margin-top: 15px; */
    background-image: url("../assets/backIcon.png");
}
.container .text{
    margin: auto;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
}

.container .block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    flex: 1;
}

.container .block .block-container{
    /* margin-top: 20px; */
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
    text-align: left;
}

.container .button{
    width: 330px;
    height: 75px;
    margin-bottom: 50px;
    background-color: #D2FBC4;
    border-radius: 25px;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    line-height: 75px;
    color: #0A7800; 
    font-size: 25px;
    font-weight: 600;
}

</style>