<template>
  <div id="app">
    <div id="storeMap"></div>
  </div>
</template>

<script>
import imgSrc from "@/assets/markerImg.png";

export default {
  name: "StoreMap2",
  data(){
    return{
      markerPositions1: [
        {title:"한라산도새기", latlng: [37.49253269783295, 126.8425158175232], link:"https://map.naver.com/v5/search/%ED%95%9C%EB%9D%BC%EC%82%B0%EB%8F%84%EC%83%88%EA%B8%B0/place/37038812?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14119273.0533795,4508546.1591794,15,0,0,0,dh"},
        {title:"스테이플버거", latlng: [37.49196963821526, 126.84256788454645], link:"https://map.naver.com/v5/search/%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%94%8C%EB%B2%84%EA%B1%B0/place/1112634672?c=14119576.9677080,4507906.8976718,15,0,0,0,dh&placePath=%3Fentry%253Dpll"},
        {title:"중국성", latlng: [37.49213813901172, 126.84223960568279], link:"https://map.naver.com/v5/search/%EC%A4%91%EA%B5%AD%EC%84%B1/place/32790575?c=14119554.6704135,4507930.9451348,15,0,0,0,dh&placePath=%3Fentry%253Dpll"},
        {title:"59쌀피자", latlng: [37.491830614516175, 126.84304310054542], link:"https://map.naver.com/v5/entry/place/19885758?c=14119554.6704135,4507930.9451348,15,0,0,0,dh"},
        {title:"홍두깨 손칼국수", latlng: [37.49219131259305, 126.84326567429483], link:"https://map.naver.com/v5/entry/place/38276671?c=14119554.6704135,4507930.9451348,15,0,0,0,dh"},
        {title:"먹자풍천민물장어", latlng: [37.49342450882794, 126.84579042633668], link:"https://map.naver.com/v5/entry/place/1195130063?c=14119554.6704135,4507930.9451348,15,0,0,0,dh"},
        {title:"스시쿠야", latlng: [37.493159899249456, 126.84326930425384], link:"https://map.naver.com/v5/search/%EC%8A%A4%EC%8B%9C%EC%BF%A0%EC%95%BC/place/92908515?c=14119662.1605140,4508076.3955812,15,0,0,0,dh&placePath=%3Fentry%253Dpll"},
        {title:"김사부", latlng: [37.493331666731876, 126.84370430122884], link:"https://map.naver.com/v5/search/%EA%B9%80%EC%82%AC%EB%B6%80/place/1166094576?c=14119243.2235362,4508099.7419196,15,0,0,0,dh&placePath=%3Fentry%253Dpll"},
        {title:"하우돈곱창", latlng: [37.492933849566974, 126.84436946848871], link:"https://map.naver.com/v5/entry/place/20841371?c=14119243.2235362,4508099.7419196,15,0,0,0,dh"},
      ],
      markers: [],
      url: "https://map.naver.com/v5/search/%ED%95%9C%EB%9D%BC%EC%82%B0%EB%8F%84%EC%83%88%EA%B8%B0/place/37038812?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14119273.0533795,4508546.1591794,15,0,0,0,dh"
      /*infowindow: null,*/
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f3bfb3979041ef4a01bff5302e4db826';
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById('storeMap');
      const options = {
        center: new kakao.maps.LatLng(37.49200194793989, 126.84315016560106),
        level: 4
      };

      this.map = new kakao.maps.Map(container, options);
      this.displayMarkers(this.markerPositions1);
    },
    displayMarkers(positions) {
      if (this.markers.length > 0) {
        this.markers.forEach((item) => {
          item.setMap(null);
        });
      }

      const imgSrc = require("../assets/markerImg.png");
      const imgSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize);

      positions.forEach((position) => {
        const marker = new kakao.maps.Marker({
          map: this.map,
          position: new kakao.maps.LatLng(position.latlng[0], position.latlng[1]),
          title: position.title,
          image: markerImage,
        });
        const overlay = new kakao.maps.CustomOverlay({
          clickable: true,
          content: '<div class="customoverlay">' +
              `<a href="${position.link}" target="_blank">` +
              `<div class="title">${position.title}</div>`+
              `<a/>` +
              '</div>',
          map: this.map,
          position: marker.getPosition(),
        });
        kakao.maps.event.addListener(marker, "click", () => {overlay.setMap(this.map);});
        kakao.maps.event.addListener(this.map, "click", () => {overlay.setMap(null);});
      });
        /*this.markers.push(marker);
      });*/

      const bounds = positions.reduce(
          (bounds, position) => bounds.extend(new kakao.maps.LatLng(position.latlng[0], position.latlng[1])),
          new kakao.maps.LatLngBounds()
      );

      this.map.setBounds(bounds);
    },
  }
}
</script>

<style scoped>
#map {
  width: 350px;
  height: 350px;
}
</style>