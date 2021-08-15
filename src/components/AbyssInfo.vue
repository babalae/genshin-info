<template>
  <div class="container" v-if="abyssInfoData.reveal_rank.length > 0">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          深境螺旋战绩
        </p>
      </header>
      <div class="card-content">
        <SummaryBox :data="abyssInfoData"></SummaryBox>
        <hr/>
        <div class="columns">
          <div class="column">
            <strong>出战次数：</strong>
          </div>
        </div>
        <RevealRankBox :data="abyssInfoData.reveal_rank"></RevealRankBox>
      </div>
    </div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          详细数据
        </p>
      </header>
      <div class="card-content">
        <div class="columns is-multiline">
          <RankBox :tittle="'最多击破数'" :data="abyssInfoData.defeat_rank"></RankBox>
          <RankBox :tittle="'承受最多伤害'"  :data="abyssInfoData.take_damage_rank"></RankBox>
          <RankBox :tittle="'元素爆发次数'"  :data="abyssInfoData.energy_skill_rank"></RankBox>
          <RankBox :tittle="'元素战技释放数'"  :data="abyssInfoData.normal_skill_rank"></RankBox>
        </div>
      </div>
    </div>
    <div class="card" v-if="abyssInfoData.floors !== undefined">
      <header class="card-header">
        <p class="card-header-title">
          阵容
        </p>
      </header>
      <div class="card-content">
        <FloorBox :floor-data="abyssInfoData.floors"></FloorBox>
      </div>
    </div>
  </div>
</template>

<script>
import SummaryBox from './abyss/SummaryBox.vue'
import RankBox from './abyss/RankBox.vue'
import RevealRankBox from './abyss/RevealRankBox.vue'
import FloorBox from './abyss/FloorBox.vue'

export default {
  name: "AbyssInfo",
  components: {SummaryBox, RankBox, RevealRankBox, FloorBox},
  props: ['abyssInfoData'],
  mounted() {
    this.dealWithData()
  },

  methods: {
    dealWithData() {
      this.abyssInfoData.start_time = this.dateFormat(this.abyssInfoData.start_time * 1000, "Y-m-d")
      this.abyssInfoData.end_time = this.dateFormat(this.abyssInfoData.end_time * 1000, "Y-m-d")
    }
  }
}
</script>

<style scoped>

</style>
