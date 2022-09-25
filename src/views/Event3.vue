<template>
<div class="container">
    <div class = "icon"> </div>
    <div class="text"> 도손 할아버지의 <p />
        mbti는 뭘까?</div>
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
    margin-top: 38px;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
    margin-left: auto;
    margin-right: auto;
}

.container .button{
    width: 330px;
    height: 75px;
    margin-top: 490px;
    background-color: #DDD6B3;
    border-radius: 25px;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    color: #474747;
    font-size: 25px;
}

</style>