<template>
    <div class="container">
        <div id = "title"> 응모 완료! </div>
        <div id = "content"> 당첨시 이메일을 통해 안내드릴게요! </div>
        <router-link to= "/Contest" class="start"> 홈으로 </router-link>
    </div>
</template>

<script>
export default {
  name: "Event12"
};
</script>

<style scoped>
/* iOS only */
@supports (-webkit-touch-callout: none) {
  .container {
    min-height: -webkit-fill-available;
  }
}
.container {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    height: 100vh;
    background-color: #FFFFFF;
}


.container #title{
    color: #191F28;
    font-weight: 700;
    font-size: 25px;   
    margin-top: 50%;
}

.container #content{
    color: #6B7684;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    margin-top: 13px;   
}

.container .start{
    max-width:330px;
    /* height: 75px; */
    width: 100%;
    line-height: 75px;
    font-weight: 600;
    font-size: 25px;
    color: #0A7800;
    background-color: #D2FBC4;
    border-radius: 20px;
    text-decoration: none;
    margin-top: 28px;
    margin-left: auto;
    margin-right: auto;
}

</style>