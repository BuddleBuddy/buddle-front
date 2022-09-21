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
            <div class="content1"> 1. 버들부부의 MBTI를 맞춰주세요 </div>
            <div class="content2"> 1. 버들부부의 MBTI를 맞춰주세요 </div>
        </div>
        <a href="/event1"> 참여하기 </a>
        <h1> test </h1>
    </div>
</template>

<script>
export default {
  name: "Contest"
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
</style>