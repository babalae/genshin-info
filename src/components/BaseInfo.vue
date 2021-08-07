<template>
  <div class="container">
    <div class="card" v-if="baseInfoData.stats !== undefined">
      <header class="card-header">
        <p class="card-header-title">
          数据总览
        </p>
      </header>
      <div class="card-content">
        <SummaryBox :stats-data="baseInfoData.stats"></SummaryBox>
      </div>
    </div>
    <div class="card"
         v-if="baseInfoData.world_explorations !== undefined && baseInfoData.world_explorations.length > 0">
      <header class="card-header">
        <p class="card-header-title">
          世界探索
        </p>
      </header>
      <div class="card-content">
        <ExplorationBox :exploration-data="baseInfoData.world_explorations"></ExplorationBox>
      </div>
    </div>
    <div class="card" v-if="baseInfoData.homes !== undefined&& baseInfoData.homes.length > 0">
      <header class="card-header">
        <p class="card-header-title">
          尘歌壶
        </p>
      </header>
      <div class="card-content">
        <HomeBox :home-data="baseInfoData.homes"></HomeBox>
      </div>
    </div>
    <div class="card" v-if="baseInfoData.avatars !== undefined">
      <header class="card-header">
        <p class="card-header-title">
          角色列表
        </p>
      </header>
      <div class="card-content">
        <AvatarBox :avatar-data="baseInfoData.avatars"></AvatarBox>
      </div>
    </div>
  </div>
</template>

<script>
import SummaryBox from './base/SummaryBox.vue'
import ExplorationBox from './base/ExplorationBox.vue'
import HomeBox from './base/HomeBox.vue'
import AvatarBox from './base/AvatarBox.vue'

export default {
  name: "BaseInfo",
  components: {SummaryBox, ExplorationBox, HomeBox, AvatarBox},
  props: ['baseInfoData']
}
</script>

<style scoped>

</style>