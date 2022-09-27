<template>
    <div class="container">
        <div id = "title"> 응모완료! </div>
        <div id = "content"> 당첨시 이메일을 통해 안내드릴게요! </div>
        <router-link to= "/Contest" class="start"> 홈으로 가기 </router-link>
    </div>
</template>

<script>
export default {
  name: "Event1"
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin-top: 277px;
}
.container #title{
    color: #191F28;
    font-weight: 700;
    font-size: 23px;   
}

.container #content{
    color: #6B7684;
    font-weight: 600;
    font-size: 15px;
    margin-top: 13px;   
}

.container .start{
    width: 287px;
    height: 55px;
    line-height: 55px;
    color: #474747;
    background-color: #D2FBC4;
    border-radius: 20px;
    text-decoration: none;
    margin-top: 29px;
    margin-left: auto;
    margin-right: auto;
}

</style>