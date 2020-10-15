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
    <section class="section">
      <div class="container">
        <div class="field has-addons">
          <p class="control">
            <input id="uid" class="input" type="text" placeholder="请输入UID" v-model="uid" @keyup.enter="search">
          </p>
          <p class="control">
            <a class="button is-info" :class="{'is-loading': searching}" @click="search">查询</a>
          </p>
        </div>
        <article class="message" :class="tipsClass">
          <div class="message-body">
            {{ tips }}
          </div>
        </article>
      </div>
    </section>
    <section class="section" v-if="roleInfo.stats !== undefined">
      <div class="container">
        <div class="columns is-multiline is-mobile has-text-centered">
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">活跃天数</p>
              <p class="title title-custom">{{ roleInfo.stats.active_day_number }}</p>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">成就达成数</p>
              <p class="title title-custom">{{ roleInfo.stats.achievement_number }}</p>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">风神瞳</p>
              <p class="title title-custom">{{ roleInfo.stats.anemoculus_number }}</p>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">岩神瞳</p>
              <p class="title title-custom">{{ roleInfo.stats.geoculus_number }}</p>
            </div>
          </div>
        </div>
        <div class="columns is-multiline is-mobile has-text-centered">
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">获得角色数</p>
              <p class="title title-custom">{{ roleInfo.stats.avatar_number }}</p>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">解锁传送点</p>
              <p class="title title-custom">{{ roleInfo.stats.way_point_number }}</p>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">解锁秘境</p>
              <p class="title title-custom">{{ roleInfo.stats.domain_number }}</p>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">深境螺旋</p>
              <p class="title title-custom">{{ roleInfo.stats.spiral_abyss }}</p>
            </div>
          </div>
        </div>
        <div class="columns is-multiline is-mobile has-text-centered">
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">华丽宝箱数</p>
              <p class="title title-custom">{{ roleInfo.stats.luxurious_chest_number }}</p>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">珍贵宝箱数</p>
              <p class="title title-custom">{{ roleInfo.stats.precious_chest_number }}</p>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">精致宝箱数</p>
              <p class="title title-custom">{{ roleInfo.stats.exquisite_chest_number }}</p>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div>
              <p class="heading heading-custom">普通宝箱数</p>
              <p class="title title-custom">{{ roleInfo.stats.common_chest_number }}</p>
            </div>
          </div>
        </div>
        <div class="avatars-box">
          <div class="avatar-content" v-for="(avatar,i) in roleInfo.avatars" :key="i">
            <div class="box" style="box-shadow: none">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="avatar.image" alt="Image">
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ avatar.name }}</strong>
                      <small> {{ avatar.element }} </small>
                      <small>{{ avatar.rarity }}★</small>
                      <br>
                      等级：{{ avatar.level }}
                      <br>
                      好感度：{{ avatar.fetter }}
                      <br>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      uid: '',
      roleInfo: [],

      tips: '请输入UID点击查询',
      tipsClass: '',
      searching: false
    }
  },
  mounted() {
  },
  methods: {
    search() {
      this.roleInfo = []
      this.uid = document.querySelector('#uid').value
      if (this.uid === null || this.uid === undefined || this.uid === '') {
        this.tips = '👆 请输入UID'
        this.tipsClass = 'is-warning'
        return
      }
      this.searching = true
      this.tips = '查询中，请耐心等待...'
      fetch('//service-joam13r8-1252025612.gz.apigw.tencentcs.com/uid/' + this.uid, {
        method: 'GET',
        mode: 'cors',
      }).then(res => res.json()).then(json => {
        if (json.retcode == 0) {
          this.roleInfo = json.data
          this.tips = 'UID: ' + this.uid + ' 查询成功'
          this.tipsClass = 'is-success'
        } else if (json.retcode == -1) {
          this.tips = '查询无结果，可能造成这种情况的原因：1.UID不存在 2.不是米哈游官服UID 3.没有在米游社同步并公开角色信息'
          this.tipsClass = 'is-warning'
        } else {
          this.tips = '查询失败！' + json.message
          this.tipsClass = 'is-danger'
        }
        this.searching = false
      })
    }
  }
}
</script>

<style>
#app {
  /*background-color: #e2e2e2;*/
}

.avatars-box {
  display: flex;
  flex-wrap: wrap;
}

.avatar-content {
  width: 100%;
  padding: 0.5rem 1rem;
}

@media screen and (min-width: 768px) {
  .avatar-content {
    width: 50%;
    padding: 0.5rem 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .avatar-content {
    width: 25%;
    padding: 0.5rem 1rem;
  }
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
</style>
