<template>
    <div class="root">
        <img class="hbti" alt="hbti" src="../assets/hbti.png">
        <div class="first"> 
            <div class="title"> 참여 방법 </div>
            <div class="content"> 1. 버들부부의 MBTI를 맞춰주세요 <p />
                2. 마지막 응모하기 버튼 클릭 후 이메일 남기기 </div>
        </div>
        <div class="second"> 
            <div class="title"> 이벤트 경품 </div>
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
        <router-link to="/event1" class = "part"> 참여하기 </router-link>
        <div class="third"> 
            <div class="itemfont1"> {{ count }} 명 </div>
            <div class="itemfont2"> 참여중 </div>
        </div>
        <div class="fourth"> 
            <img class="vector" alt="vector" src="../assets/vector.png">
            <div class="txt"> 공유하기 </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Contest",
  data(){
    return {
        count: 0,
    };
  },
  methods: {
    get() {
      this.axios.get("/count").then((response) => {
        console.log(response);
        this.count = response.data;
      });
    },
  },
    mounted() {
        this.get();
    },
};
</script>

<style scoped>
.root {
    max-width: 500px;
    min-height: 100vh;
    height: 100%;
    overflow: auto;
    background-color: #E5E5E5;
}

.root .hbti{
    width: 100%;
}

.root .first{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.root .first .title{
    position: absolute;
    background-color: #D9D9D9;
    margin-top: 60px;
    width: 108px;
    height: 38px;
    font-size: 20px;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    border-radius: 24px;
}

.root .first .content{
    width: 330px;
    /* height: 114px; */
    margin-top: 57px;
    margin-left: auto;
    margin-right: auto;
    background-color: #FFFFFF;
    border-radius: 25px;
    font-size: 15px;

    line-height: 18px;
    padding : 50px 0;
}

.root .second{
    display: flex;
    flex-direction: column;
    margin-top: 67px;
}

.root .second .title{
    position: absolute;
    width: 132px;
    height: 38px;
    background-color: #D9D9D9;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    border-radius: 25px;
}

.root .second .set{
    display: flex;
    width: 330px;
    height: 289px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    border-radius: 25px;
    background-color: #FFFFFF;
}


.root .second .item{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.root .second .item .content2{
    position: absolute;
    background-color: #D9D9D9;
    border-radius: 50px;
    margin-top: 100px;
    
}

.root .third{
    display: flex;
    flex-direction: column;
    margin-top: 97px;
}

.root .fourth{
    display: flex;
    flex-direction: column;
    margin-top: 97px;
}

.part{
    display: flex;
    align-items:center;
    justify-content:center;
    margin-top: 50px;
    border-radius: 25px;
    background-color: #555555;
    color: #FFFFFF;
    width: 330px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
}

</style>