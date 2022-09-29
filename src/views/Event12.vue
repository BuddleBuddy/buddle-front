<template>
    <div class="container">
            <div id = "title"> 응모완료! </div>
            <div id = "content"> 당첨시 이메일을 통해 안내드릴게요! </div>
            <router-link to= "/Contest" class="start"> 홈으로 가기 </router-link>
    </div>
</template>

<script>
export default {
  name: "Event12"
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;
}


.container #title{
    color: #191F28;
    font-weight: 700;
    font-size: 23px;   
    margin-top: 50%;
}

.container #content{
    color: #6B7684;
    font-weight: 600;
    font-size: 15px;
    margin-top: 13px;   
}

.container .start{
    width:330px;
    height: 75px;
    line-height: 75px;
    color: #474747;
    background-color: #D2FBC4;
    border-radius: 20px;
    text-decoration: none;
    margin-top: 28px;
    margin-left: auto;
    margin-right: auto;
}

</style>