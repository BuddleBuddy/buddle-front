<template>
  <div class="introTab">
    <div class="tabs">
      <div
          :class="{ tab: true, active: selectTab === 0 }"
          @click="setSelectTab(0)"
      >
        # 맛집
        <div :class="{line: true, active: selectTab === 0 }"
             @click="setSelectTab(0)"
        ></div>
      </div>

      <div
          :class="{ tab: true, active: selectTab === 1 }"
          @click="setSelectTab(1)"
      >
        # 가볼만한 곳
        <div :class="{line: true, active: selectTab === 1 }"
             @click="setSelectTab(1)"
        ></div>
      </div>
    </div>
    <div class="tab-containers">
      <div :class="{ 'tab-container': true, active: selectTab === 0 }">
        <div class="addContainer">
          <div>
            <img class="photo" src="../assets/store1.png">
          </div>
          <div class="text" id="title">
            87 닭강정
          </div>
          <div class="text" id="description">식어도 바삭한 튀김옷, 찐득거리지 않는 양념, 부드러운
            살코기 이 세 가지가 삼위일체를 이루는 맛있는 닭강정집.
            깔끔한 내외부에 한 번 더 반하는 곳!
          </div>
          <div class="text" id="hash">#매운맛 #간장맛 #맥주안주~?</div>
        </div>

        <div class="address" onclick = "location.href='https://map.naver.com/v5/entry/place/34481600?c=14120226.1293303,4508047.9332878,13,0,0,0,dh&placePath=%2Fhome&entry=plt'" style="cursor: pointer;">
          <div class="addCon">
            <a class="addTitle">87닭강정 오류동본점</a>
            <div class="addContent">서울 구로구 서해안로30길 17 87닭강정 오류동본점</div>
          </div>
          <div>
            <img class="tn" src="../assets/store1_tn.png"/>
          </div>
        </div>
        <Address/>
      </div>

      <div :class="{ 'tab-container': true, active: selectTab === 0 }">
        <div class="addContainer">
        <div>
          <img class="photo" src="../assets/store2.png">
        </div>
        <div class="text" id="title">
          소문난 떡볶이 순대
        </div>
        <div class="text" id="description">
          연예인 부부가 운영하는 유쾌한 분식집
          시장에서 먹는 떡볶이 바로 그 맛!
          호불호 없이 실패하지 않을 맛집 중에 맛집 ~</div>
        <div class="text" id="hash">#매콤달달 #시장떡볶이 #가성비굿</div>
        </div>

        <div class="address" onclick = "location.href='https://map.naver.com/v5/search/%EC%86%8C%EB%AC%B8%EB%82%9C%20%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%88%9C%EB%8C%80/place/20902761?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14119288.4081124,4508073.0844164,15,0,0,0,dh'" style="cursor: pointer;">
          <div class="addCon">
            <a href= "https://map.naver.com/v5/search/%EC%86%8C%EB%AC%B8%EB%82%9C%20%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%88%9C%EB%8C%80/place/20902761?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14119288.4081124,4508073.0844164,15,0,0,0,dh"
            class="addTitle">소문난떡볶이순대</a>

            <div class="addContent">서울 구로구 서해안로30길 13</div>
          </div>
          <div>
            <img class="tn" src="../assets/store2_tn.jpeg"/>
          </div>
        </div>
      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 0 }">
        <div class="addContainer">
        <div>
          <img class="photo" src="../assets/store3.png">
        </div>
        <div class="text" id="title">
          황제 쭈꾸미
        </div>
        <div class="text" id="description">
          다양한 해물까지 들어가있는 불맛 나는 쭈꾸미볶음.
          거기에 고르곤졸라 피자와 묵사발까지 함께 먹으면
          더 궁합이 좋아 자주 찾게 되는 쭈꾸미맛집.</div>
        <div class="text" id="hash">#다양한사이드메뉴 #매운맛조절가능 </div>
        </div>

        <div class="address" onclick = "location.href='https://map.naver.com/v5/search/%ED%99%A9%EC%A0%9C%EC%AD%88%EA%BE%B8%EB%AF%B8/place/1688266830?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14119075.4427993,4507952.5233604,15,0,0,0,dh'" style="cursor: pointer;">
          <div class="addCon">
            <a href= "https://map.naver.com/v5/search/%ED%99%A9%EC%A0%9C%EC%AD%88%EA%BE%B8%EB%AF%B8/place/1688266830?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14119075.4427993,4507952.5233604,15,0,0,0,dh"
               class="addTitle">황제쭈꾸미</a>
            <div class="addContent">서울 구로구 서해안로26길 10 1층</div>
          </div>
          <div>
            <img class="tn" src="../assets/store3_tn.jpeg">
          </div>
        </div>

      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 0 }">
        <div class="addContainer">
        <div>
          <img class="photo" src="../assets/store4.png">
        </div>
        <div class="text" id="title">
          옹기종기 감자옹심이
        </div>
        <div class="text" id="description">
          골목식당에 나온 바로 그 집!
          백종원이 극찬한 이유가 있는 맛집.
          쫄깃하고 고소한 감자옹심이맛이 일품!</div>
        <div class="text" id="hash">#삼삼한맛 #웨이팅필수 #찐맛집</div>
        </div>

        <div class="address" onclick = "location.href='https://map.naver.com/v5/entry/place/1904170793?c=14120264.6033345,4508075.8614081,13,0,0,0,dh&placePath=%2Fhom'" style="cursor: pointer;">
          <div class="addCon">
            <a href= "https://map.naver.com/v5/entry/place/1904170793?c=14120264.6033345,4508075.8614081,13,0,0,0,dh&placePath=%2Fhome"
               class="addTitle">옹기종기감자옹심이</a>
            <div class="addContent">서울 구로구 서해안로30길 13-8 1층</div>
          </div>
          <div>
            <img class="tn" src="../assets/store4_tn.jpeg">
          </div>
        </div>

        </div>
      <div :class="{ 'tab-container': true, active: selectTab === 0 }">
        <div class="addContainer">
        <div>
          <img class="photo" src="../assets/store5.png">
        </div>
        <div class="text" id="title">
          사생활
        </div>
        <div class="text" id="description">
          음료부터 브런치, 식사메뉴까지 총집합!
          분위기 좋은 인테리어와 인스타 사진 찍기 좋은 예쁜
          플레이팅의 음식들. 지나칠 수 없는 요즘 세대 맛집~</div>
        <div class="text" id="hash">#인스타맛집 #데이트코스 #다양한메뉴</div>
        </div>

        <div class="address" onclick = "location.href='https://map.naver.com/v5/entry/place/1713322772?c=14119988.7584944,4507805.0550129,13,0,0,0,dh&placePath=%2Fhome&entry=plt'" style="cursor: pointer;">
          <div class="addCon">
            <a href= "https://map.naver.com/v5/entry/place/1713322772?c=14119988.7584944,4507805.0550129,13,0,0,0,dh&placePath=%2Fhome&entry=plt"
               class="addTitle">사생활</a>
            <div class="addContent">서울 구로구 오류로8길 22 2층 사생활</div>
          </div>
          <div>
            <img class="tn" src="../assets/store5_tn.jpg">
          </div>
        </div>

      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 0 }">
        <div class="addContainer">
        <div>
          <img class="photo" src="../assets/store6.png">
        </div>
        <div class="text" id="title">
          춘천골
        </div>
        <div class="text" id="description">
          닭갈비 먹으러 춘천까지 갈 필요 없다.
          여기면 충분! 맛은 말해뭐해 닭갈비에 막국수,
          마지막에 볶음밥까지 먹으면 춘천여행 끝!</div>
        <div class="text" id="hash">#우동사리추가필수 #28년역사 #야채곱창</div>
        </div>

        <div class="address" onclick = "location.href='https://map.naver.com/v5/search/%EC%B6%98%EC%B2%9C%EA%B3%A8/place/18494000?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14119140.6203619,4507890.9455642,15,0,0,0,dh'" style="cursor: pointer;">
          <div class="addCon">
            <a href= "https://map.naver.com/v5/search/%EC%B6%98%EC%B2%9C%EA%B3%A8/place/18494000?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14119140.6203619,4507890.9455642,15,0,0,0,dh"
               class="addTitle">춘천골</a>
            <div class="addContent">서울 구로구 오류로8길 41</div>
          </div>
          <div>
            <img class="tn" src="../assets/store6_tn.jpeg">
          </div>
        </div>

      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 1 }">
        <div class="addContainer">
        <div>
          <img class="photo" src="../assets/place1.png">
        </div>
        <div class="text" id="title">
          항동 철길
        </div>
        <div class="text" id="description">빈티지한 포토스팟이 가득한 넓은 철길이 있는 산책길.
          철길을 따라 걷다보면 자연스레 푸른 수목원과 이어져
          더욱 풍성한 데이트를 즐길 수 있어 추천!</div>
        <div class="text" id="hash">#인생샷성지 #추억 #스냅사진</div>
        </div>

        <div class="address" onclick = "location.href='https://map.naver.com/v5/search/%ED%96%A5%EB%8F%99%EC%B2%A0%EA%B8%B8/place/38327950?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14118291.4196259,4507434.2934463,15,0,0,0,dh'" style="cursor: pointer;">
          <div class="addCon">
            <a href= "https://map.naver.com/v5/search/%ED%96%A5%EB%8F%99%EC%B2%A0%EA%B8%B8/place/38327950?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14118291.4196259,4507434.2934463,15,0,0,0,dh"
               class="addTitle">향동철길</a>
            <div class="addContent">서울 구로구 오리로 1189</div>
          </div>
          <div>
            <img class="tn" src="../assets/place1_tn.jpeg">
          </div>
        </div>

      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 1 }">
        <div class="addContainer">
        <div>
          <img class="photo" src="../assets/place2.png">
        </div>
        <div class="text" id="title">
          푸른 수목원
        </div>
        <div class="text" id="description">
          도심에서 벗어나 푸르른 자연의 정취를 느끼고 싶을 때
          가면 좋은 서울의 수목원. 평화롭고 뷰 좋은 산책길을 따라
          걷다보면 나도 모르게 마음의 안정을 얻는 곳!</div>
        <div class="text" id="hash">#힐링 #산책 #정원 #항동저수지</div>
        </div>

        <div class="address" onclick = "location.href='https://map.naver.com/v5/entry/place/32581850?c=14117958.3985711,4506443.2350194,13,0,0,0,dh&placePath=%2Fhome&entry=plt'" style="cursor: pointer;">
          <div class="addCon">
            <a href= "https://map.naver.com/v5/entry/place/32581850?c=14117958.3985711,4506443.2350194,13,0,0,0,dh&placePath=%2Fhome&entry=plt"
               class="addTitle">푸른수목원</a>
            <div class="addContent">서울 구로구 서해안로 2117</div>
          </div>
          <div>
            <img class="tn" src="../assets/place2_tn.jpeg">
          </div>
        </div>

      </div>
      <div :class="{ 'tab-container': true, active: selectTab === 1 }">
        <div class="addContainer">
          <div>
            <img class="photo" src="../assets/place3.png">
          </div>
          <div class="text" id="title">
            STORY 공감
          </div>
          <div class="text" id="description">
            가성비 좋은 음료를 즐기는 것 뿐만 아니라
            바리스타, 꽃꽂이, 난타 등
            다양한 프로그램이 가득한 공간!</div>
          <div class="text" id="hash">#깔끔한 #아늑한 #만남의장소</div>
        </div>

        <a class="address" onclick = "location.href='https://map.naver.com/v5/search/story%20%EA%B3%B5%EA%B0%90/place/1852466944?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14119176.1535427,4507938.1144883,15,0,0,0,dh'" style="cursor: pointer" target="_blank">
            <div class="addCon">
              <div class="addContent">서울 구로구 오류로8길 51</div>
            </div>
            <div>
              <img class="tn" src="../assets/place3_tn.jpeg">
            </div>
        </a>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "IntroTab",
  data() {
    return {
      selectTab: 0,
    };
  },
  methods: {
    setSelectTab(num) {
      this.selectTab = num;
    },
  },
};
</script>


<style scoped>
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tab.active {
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}

.tab {
  font-size: 20px;
  margin-bottom: 5px;
  color: #808080;
}

.tab-container {
  background-color: aqua;
  display: none;
  padding-bottom: 20%;
}

.tab-container.active {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.addContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.photo {
  width: 90%;
  height: 90%;
  border-radius: 25px;
  /*margin-top: 40px;*/
  margin-bottom: 20px;

}

.text {
  display: flex;
  justify-content: flex-start;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
  text-align: left;
}

#title{
  font-size: 25px;
  font-weight: bold;
}

#description{
  font-size: 15px;
}

#hash{
  font-size: 17px;
  font-weight: bold;
  color: #50A65D;
}

.line.active {
  min-width: 130px;
  height: 5px;
  margin-top: 10px;
  background: black;
}
.line{
  min-width: 130px;
  height: 2px;
  margin-top: 11px;
  background: grey;
}
.address {
  display: block;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: hidden;
  border-color: #808080;
  /*border-: 0.1rem outset #d3d3d3;*/
  background: #f8f8ff;
  /*width: 95%;*/
  margin-right: 3%;
  margin-left: 3%;

}
.address .tn {
  width: 80px;
  height: 80px;
  border-radius: 5px;
}
.address .addCon{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.addTitle{
  text-decoration: none;
  font-weight: bolder;
  color: #000000;
}
.addContent{
  font-weight: bold;
  color: #686868;
}
</style>