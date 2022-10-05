<template>
    <div class="container">
        <img class="icon" align = "left" src="../assets/backIcon.png" @click.stop="back()">
        <div class = "top-container">
            <div class = "first">
                <div class = "item1"> 이름 </div>
                <input type= "text" placeholder = "이름을 입력해주세요" id="item1" class = "item2" style="border: none;">
            </div>
            <div class="second">
                <div class = "item1"> 이메일 </div>
                <div class = "item-container">
                    <input type="text" class = "left-item" placeholder = "이메일 아이디" id="item2" style="border: none;">
                    <div id = "item-text"> @ </div>
                    <select v-model="selected" class="right-item" style="border: none;">
                        <option value="@naver.com">naver.com</option>
			                  <option value="@gmail.com">gmail.com</option>
                        <option value="@hanmail.net">hanmail.net</option>
                        <option value="@nate.com">nate.com</option>
                    </select>
                </div>
            </div>
            <div class ="item4">
                <div class = "left-img"> </div>
                <div class="right-text"> 개인정보(이메일)은 이벤트 추첨 목적으로만
                활용하며, 추첨 종료 후 즉시 파기됩니다</div>
            </div>
        </div>
        <div class = "button" @click="submit"> 응모 완료! </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Event11",
    data(){
      return{
        selected: ''
      }
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
        submit(){
            const nameVal = document.getElementById('item1').value;
            const emailVal = document.getElementById('item2').value;


            if(nameVal.length == 0 || emailVal.length == 0 || nameVal == '' || emailVal == ''){
                alert('모든 항목을 기입해주세요')
            }
            else {
                axios.post('https://buddlebuddy.shop/user/join',{
                  name: nameVal,
                  email: emailVal + this.selected
                })
                .then((response) => {
                  console.log(response);
                  console.log(response.data);
                  if(response.data.message=="중복된 이메일입니다.") {
                    alert('중복된 이메일입니다.')
                  }
                  else {
                    this.$router.push('Event12');
                  }
                });
            }
        }
    },
};
</script>

<style scoped>
input{
   text-align:center;
}
select{
   text-align:center;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    font-weight: 600;
}
.container .icon{
    height: 35px;
    width: 35px;
}
.container .top-container{
  /*width: 90%;*/
  margin-top: 73px;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
.container .top-container .second{
    margin-top: 30px;
}

.container .top-container .item1{
    font-size: 18px;
    color: #000000;
}
.container .top-container .item2{
    /*width: 330px;*/
    width: 100%;
    height: 55px;
    background-color: #FFF9DA;
    border-radius: 20px;
    outline: none;
}

.container .top-container .item-container{
    display: flex;
    flex-direction: row;
    color: #7B7B7B;
}

.container .top-container .item-container #item-text{
    font-size: 25.5494px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 8px;
    margin-right: 8px;
}
.container .top-container .item-container .left-item{
    width: 154px;
    height: 55px;
    background-color: #FFF9DA;
    border-radius: 20px;
}

.container .top-container .item-container .right-item{
    width: 134px;
    height: 55px;
    background-color: #FFF9DA;
    border-radius: 20px;
}

.container .top-container .item4{
    width: 332px;
    height: 75px;
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    background-color: #F8F8F8;
}


.container .top-container .item4 .left-img{
    background-image: url("../assets/light.png");
    margin-left: 18px;
    margin-top: auto;
    margin-bottom: auto;
    width: 34px;
    height: 34px;
}

.container .top-container .item4 .right-text{
    width: 223px;
    height: 36px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 26px;
    font-weight: 500;
    font-size: 13px;
}

.container .button {
  position: static;
  /*width: 330px;*/
  width: 90%;
  max-width: 330px;
  height: 75px;
  bottom: 50px;
  left: 50%;
  /*transform: translate(-50%, 0%);*/
  line-height: 75px;
  background-color: #D2FBC4;
  border-radius: 25px;
  color: #0A7800;
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>