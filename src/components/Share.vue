<template>
  <div>

    <a id="kakao-link-btn" @click="sendkakao" >
      <img src="../assets/icon-kakao.png" />
    </a>

  </div>
</template>

<script>
export default {
  name: "KakaoShare",
  head() {
    return {
      script: [
        {src: '//developers.kakao.com/sdk/js/kakao.min.js'},
      ],
    }
  },
  methods: {
    sendkakao: function () {
      console.log(Kakao.isInitialized());
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '맞혀봐! 할BTI',
          description: '버들부부의 MBTI를 맞추고 경품까지!',
          imageUrl:
              'https://s3.ap-northeast-2.amazonaws.com/front.buddlebuddy.shop/someNail.png',
          link: {
            mobileWebUrl: 'https://front.buddlebuddy.shop/?utm_source=kakao&utm_medium=share&utm_campaign=buddleshop',
            webUrl: 'https://front.buddlebuddy.shop/?utm_source=kakao&utm_medium=share&utm_campaign=buddleshop',
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://front.buddlebuddy.shop/?utm_source=kakao&utm_medium=share&utm_campaign=buddleshop',
              webUrl: 'https://front.buddlebuddy.shop/?utm_source=kakao&utm_medium=share&utm_campaign=buddleshop',
            },
          },
        ],
      })
    }
  },
};
</script>

<style scoped>


</style>