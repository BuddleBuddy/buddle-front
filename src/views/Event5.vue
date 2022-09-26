<template>
<div class="container">
    <div class = "icon"> </div>
    <div class="text"> 어......어? <p />
        다시 한번 생각해봐...</div>
    <router-link to= "/event5_1" class="button"> 정답 제출하기 </router-link>
</div>
</template>

<script>
export default {
  name: "Event5"
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

.container .button{
    position: absolute;
    bottom: 50px;
    width: 330px;
    height: 75px;
    background-color: #DDD6B3;
    border-radius: 25px;
    line-height: 75px;
    font-size: 25px;
    left: 50%;
    transform: translate(-50%, 0%);
    text-decoration: none;
    color: #474747;
    font-family: 'Pretendard-Regular';
    font-weight: 600;
    font-style: normal;
}
</style>