<template>
  <div id="app">
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
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field has-addons is-narrow">
                  <p class="control">
                    <input id="uid" class="input" type="text" placeholder="请输入UID" maxlength="9" v-model="uid"
                           @keyup.enter="search">
                  </p>
                  <p class="control">
                    <a class="button is-info" :class="{'is-loading': searching}" @click="search">查询</a>
                  </p>
                </div>
                <div class="field is-narrow" v-if="baseInfo !== undefined || abyssInfo !== undefined">
                  <button class="button is-success" @click="toImage">下载图片</button>
                </div>
              </div>
            </div>
            <article class="message" :class="tipsClass">
              <div class="message-body">
                {{ tips }}
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
import BaseInfo from './components/BaseInfo.vue'
import AbyssInfo from './components/AbyssInfo.vue'
import html2canvas from 'html2canvas';

export default {
  name: 'App',
  components: {BaseInfo, AbyssInfo},
  data() {
    return {
      uid: '',
      baseInfo: undefined,
      abyssInfo: undefined,

      tips: '请输入UID点击查询',
      tipsClass: '',
      searching: false
    }
  },
  mounted() {
  },
  methods: {
    search() {
      this.uid = document.querySelector('#uid').value
      if (this.uid === null || this.uid === undefined || this.uid === '') {
        this.tips = '👆 请输入UID'
        this.tipsClass = 'is-warning'
        return
      }
      this.searching = true
      this.tips = '查询中，请耐心等待...'

      Promise.all([this.queryBaseInfo(),this.queryAbyssInfo()]).then(values => {
        let baseInfoJson = values[0]
        let abyssInfoJson = values[1]
        if (baseInfoJson.retcode == 0) {
          this.baseInfo = baseInfoJson.data
          this.abyssInfo = abyssInfoJson.data
          this.tips = 'UID: ' + this.uid + ' 查询成功'
          this.tipsClass = 'is-success'
        } else if (baseInfoJson.retcode == -1) {
          this.tips = '查询无结果，可能造成这种情况的原因：1.UID不存在 2.没有在米游社同步并公开角色信息'
          this.tipsClass = 'is-warning'
        } else {
          this.tips = '查询失败！' + baseInfoJson.message
          this.tipsClass = 'is-danger'
        }
        this.searching = false
      }).catch(err => {
        this.tips = '查询失败！' + err
        this.tipsClass = 'is-danger'
      });
    },
    queryBaseInfo() {
      return new Promise((resolve, reject) => {
        fetch('//service-joam13r8-1252025612.gz.apigw.tencentcs.com/uid/' + this.uid, {
          method: 'GET',
          mode: 'cors',
        }).then(res => res.json()).then(json => {
          resolve(json)
        }).catch(function (e) {
          reject(e)
        })
      })
    },
    queryAbyssInfo() {
      return new Promise((resolve, reject) => {
        fetch('//service-joam13r8-1252025612.gz.apigw.tencentcs.com/abyss/' + this.uid, {
          method: 'GET',
          mode: 'cors',
        }).then(res => res.json()).then(json => {
          resolve(json)
        }).catch(function (e) {
          reject(e)
        })
      })
    },
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

<style>
#app {
  /*background-color: #e2e2e2;*/
}


.level-item-custom {
  width: 25%;
}

.heading-custom {
  font-size: 16px !important;
}

.title-custom {
  font-size: 1.75rem !important;
  font-weight: 470 !important;
  line-height: 1 !important;
}

.star-5 {
  background-color: #be844e;
}

.star-4 {
  background-color: #7968a2;
}
</style>
