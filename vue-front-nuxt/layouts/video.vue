<template>
  <div class="guli-player">
    <div class="head">
      <a href="#" title="谷粒学院">
    <img class="logo" src="~/assets/img/logo.png" lt="谷粒学院"></a></div>
    <div class="body">
      <div class="content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import vod from '@/api/vod'
export default {
  layout: 'video',
  asyncData({ params, error }) {
    return vod.getPlayAuth(params.vid)
      .then(response => {
        return {
          playAuth: response.data.data.playAuth,
          vid: params.vid
        }
      })
  },
  mounted() {
    // eslint-disable-next-line no-undef
    new Aliplayer({
      id: 'J_prismPlayer',
      vid: this.vid, // 视频id
      playauth: this.playAuth, // 播放凭证
      encryptType: '1', // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设
      width: '100%',
      height: '500px'
    }, function(player) {
      console.log('播放器创建成功')
    })
  }
}
</script>
