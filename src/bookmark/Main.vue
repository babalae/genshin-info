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
export default {
  name: "genshin-info-webpack2",
  components: {BaseInfo, AbyssInfo},
  props: ['baseInfo', 'abyssInfo']
}
</script>

<style scoped>

</style>
