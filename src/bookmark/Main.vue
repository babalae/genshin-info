<template>
  <div>
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          原神角色信息查询
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <section class="section" ref="displayPanel">
      <div class="container">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              🔍 查询栏
            </p>
            <div class="card-header-icon" aria-label="more options"
                 v-if="baseInfo !== undefined || abyssInfo !== undefined">
              <span class="icon" @click="toImage">📥</span>
            </div>
          </header>
          <div class="card-content">
            <article class="message">
              <div class="message-body">
                {{ msg }}
              </div>
            </article>
          </div>
        </div>
        <div v-if="baseInfo !== undefined">
          <BaseInfo :base-info-data="baseInfo"></BaseInfo>
        </div>
        <div v-if="abyssInfo !== undefined">
          <AbyssInfo :abyss-info-data="abyssInfo"></AbyssInfo>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseInfo from './../components/BaseInfo.vue'
import AbyssInfo from './../components/AbyssInfo.vue'
import html2canvas from "html2canvas";
export default {
  name: "genshin-info-render",
  components: {BaseInfo, AbyssInfo},
  props: ['msg', 'baseInfo', 'abyssInfo'],
  methods: {
    toImage() {
      html2canvas(this.$refs.displayPanel, {
        useCORS: true
      }).then(canvas => {
        let dataURL = canvas.toDataURL("image/png");
        this.imgUrl = dataURL;
        if (this.imgUrl !== "") {
          let alink = document.createElement('a')
          alink.href = dataURL
          alink.download = 'genshin-info-uid-' + this.uid + '.png'
          alink.click()
        }
      });
    }
  }
}
</script>

<style scoped>
.star-5 {
  background-color: #be844e;
}

.star-4 {
  background-color: #7968a2;
}
</style>
