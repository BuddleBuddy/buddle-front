<template>
  <div id="app">
    <div id="storeMap"></div>
  </div>
</template>

<script>
export default {
  name: "StoreMap",
  data(){
    return{
      defaultMarker: [
        {title:"한라산도새기", latlng: [37.49253269783295, 126.8425158175232]},
        {title:"스테이플버거", latlng: [37.49196963821526, 126.84256788454645]},
        {title:"중국성", latlng: [37.49213813901172, 126.84223960568279]},
        {title:"59쌀피자", latlng: [37.491830614516175, 126.84304310054542]},
        {title:"홍두깨 손칼국수", latlng: [37.49219131259305, 126.84326567429483]},
        {title:"먹자풍천민물장어", latlng: [37.49342450882794, 126.84579042633668]},
        {title:"스시쿠야", latlng: [37.493159899249456, 126.84326930425384]},
        {title:"김사부", latlng: [37.493331666731876, 126.84370430122884]},
        {title:"하우돈곱창", latlng: [37.492933849566974, 126.84436946848871]},
      ],
      storeName: "한라산도새기",
      markers: [],
      infowindow: null,
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
      console.log('initMap')
      this.displayMarker(this.defaultMarker);
    },

    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      /*const positions = markerPositions.latlng.map(
          (position) => new kakao.maps.LatLng(...position)
      );*/


      const imgSrc = require("../assets/markerImg.png");
      const imgSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize);
      const content = '<div class="customoverlay">' +
              '<a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
              `<div class="title">${this.storeName}</div>`+
              '</a>' +
              '</div>';

      if (positions.length > 0) {
        this.markers = positions.map(
            (position) => {
              const marker = new kakao.maps.Marker({
                    map: this.map,
                    position: position.latlng,
                    title: position.title,
                    image: markerImage,
                  });
              const overlay = new kakao.maps.CustomOverlay({
                clickable: true,
                content: content,
                map: this.map,
                position: marker.getPosition(),
              });
              kakao.maps.event.addListener(marker, "click", () => {overlay.setMap(this.map);});
              kakao.maps.event.addListener(this.map, "click", () => {overlay.setMap(null);});
            });

        const bounds = positions.reduce(
            (bounds, latlng) => bounds.extend(latlng),
            new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
  }
}
</script>

<style>
#storeMap {
  margin-top: 100px;
  width: 350px;
  height: 350px;
  margin: auto;
  overflow: auto;
  background-color: white;
  border-radius: 20px;
}

.customoverlay {
  position:relative;
  bottom:50px;
  left: 2px;
  border-radius:6px;
  border: 1px solid #ccc;
  border-bottom:2px solid #ddd;
  float:left;
}
.customoverlay:nth-of-type(n) {
  border:0;
  box-shadow:0px 1px 2px #888;
}
.customoverlay a {
  display:block;
  text-decoration:none;
  color:#000;
  text-align:center;
  border-radius:6px;
  font-size:14px;
  font-weight:bold;
  overflow:hidden;
  background: #0a7800;
  background: #0a7800 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;
}
.customoverlay .title {
  display:block;
  text-align:center;
  background:#fff;
  margin-right:35px;
  padding:10px 15px;
  font-size:14px;
  font-weight:bold;}

.customoverlay:after {
  content:'';
  position:absolute;
  margin-left:-12px;
  left:50%;
  bottom:-12px;
  width:22px;
  height:12px;
  background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
</style>