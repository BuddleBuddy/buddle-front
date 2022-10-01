<template>
<div class="container">
    <div class = "icon" @click="back()"> </div>
    <div class="text"> 도손 할아범의 </div>
    <div class = "text2"> mbti를 맞춰봐! </div>
    <div class="block">
        <div class="block-container">
            <div :class="{'left-item' : selectBox1 == 0, 'left-item-click' : selectBox1 == 1 && dir1 == 1, 'left-item-unclick' : selectBox1 == 1 && dir1 == 2}" @click="clickEvent1(1, 1)"> E </div> 
            <div :class="{'right-item' : selectBox1 == 0, 'right-item-click': selectBox1 == 1 && dir1 == 2, 'right-item-unclick' : selectBox1 == 1 && dir1 == 1}" @click="clickEvent1(2, 1)"> I </div>
            <div class= "text-item"> 친구들과 개웅산에 등산가기 <br>
                를 좋아혀~ </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox2 == 0, 'left-item-click' : selectBox2 == 1 && dir2 == 1, 'left-item-unclick' : selectBox2 == 1 && dir2 == 2}" @click="clickEvent2(1, 1)"> S </div> 
            <div :class="{'right-item' : selectBox2 == 0, 'right-item-click': selectBox2 == 1 && dir2 == 2, 'right-item-unclick' : selectBox2 == 1 && dir2 == 1}" @click="clickEvent2(2, 1)"> N </div>
            <div class= "text-item"> ‘만약에~’라는 말을 제일 싫 <br>
                어혀! </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox3 == 0, 'left-item-click' : selectBox3 == 1 && dir3 == 1, 'left-item-unclick' : selectBox3 == 1 && dir3 == 2}" @click="clickEvent3(1, 1)"> F </div> 
            <div :class="{'right-item' : selectBox3 == 0, 'right-item-click': selectBox3 == 1 && dir3 == 2, 'right-item-unclick' : selectBox3 == 1 && dir3 == 1}" @click="clickEvent3(2, 1)"> T </div> 
            <div class= "text-item">‘오류 아트홀’에서 감동적인 <br>
                공연을 보고 와도 눈물 한방 <br>
                울 안흘리는 할배여! </div>
        </div>
        <div class="block-container"> 
            <div :class="{'left-item' : selectBox4 == 0, 'left-item-click' : selectBox4 == 1 && dir4 == 1, 'left-item-unclick' : selectBox4 == 1 && dir4 == 2}" @click="clickEvent4(1, 1)"> J </div> 
            <div :class="{'right-item' : selectBox4 == 0, 'right-item-click': selectBox4 == 1 && dir4 == 2, 'right-item-unclick' : selectBox4 == 1 && dir4 == 1}" @click="clickEvent4(2, 1)"> P </div> 
            <div class= "text-item"> 여기 주변 ‘푸른수목원’ 데이 <br>
                트인데 일주일 전에 계획을 <br>
                다 세워놓더라구~ </div>
        </div>
    </div>
    <div class="button" @click="click()"> 정답 제출하기 </div>
</div>
</template>

<script>
export default {
    name: "Event3",
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
            window.localStorage.setItem('dir1', this.dir1);
            window.localStorage.setItem('dir2', this.dir2);
            window.localStorage.setItem('dir3', this.dir3);
            window.localStorage.setItem('dir4', this.dir4);

            const one = this.dir1 == 2 ? -1 : 1;
            const two = this.dir2 == 2 ? -1 : 1;
            const three = this.dir3 == 1 ? -1 : 1;
            const four = this.dir4 == 2 ? -1 : 1;
            console.log(one + " " + two + " " + three + " " + four);
            
            window.localStorage.setItem('one', one);
            window.localStorage.setItem('two', two);
            window.localStorage.setItem('three', three);
            window.localStorage.setItem('four', four);
            this.$router.push('Event4');
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
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #565656;
}

.container .text2{
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #000000;
}
.container .block{
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    font-weight: 500;
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
    font-weight: 500;
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
    font-weight: 500;
}
.right-item{
    width: 55px;
    height: 70px;
    box-shadow: 0px 2.83321px 6.37471px rgba(0, 0, 0, 0.05);
    border-radius: 6.55607px;
    font-size: 35px;
    margin-left: 23px;
    line-height: 70px;
    font-weight: 500;
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
    font-weight: 500;
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
    font-weight: 500;
}
.text-item{
    margin-left: 22px;
    margin-top: auto;
    margin-bottom: auto;
    font-weight: 500;
    font-size: 16px;    
    text-align: left;
    line-height: 19px;
    color: #000000;
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