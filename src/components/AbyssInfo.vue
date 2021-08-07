<template>
  <div class="container">
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
    <div class="card" v-if="abyssInfoData.defeat_rank.length > 0">
      <header class="card-header">
        <p class="card-header-title">
          最多击破排行
        </p>
      </header>
      <div class="card-content">
        <DefeatRankBox :data="abyssInfoData.defeat_rank"></DefeatRankBox>
      </div>
    </div>
  </div>
</template>

<script>
import SummaryBox from './abyss/SummaryBox.vue'
import DefeatRankBox from './abyss/DefeatRankBox.vue'
import RevealRankBox from './abyss/RevealRankBox.vue'
// import AvatarBox from './abyss/AvatarBox.vue'
export default {
  name: "AbyssInfo",
  components: {SummaryBox, DefeatRankBox, RevealRankBox},
  props: ['abyssInfoData'],
  mounted() {
    this.dealWithData()
  },

  methods: {
    dateFormat(timestamp, formats) {
      // formats格式包括
      // 1. Y-m-d
      // 2. Y-m-d H:i:s
      // 3. Y年m月d日
      // 4. Y年m月d日 H时i分
      formats = formats || 'Y-m-d';

      let zero = function (value) {
        if (value < 10) {
          return '0' + value;
        }
        return value;
      };

      let myDate = timestamp ? new Date(timestamp) : new Date();

      let year = myDate.getFullYear();
      let month = zero(myDate.getMonth() + 1);
      let day = zero(myDate.getDate());

      let hour = zero(myDate.getHours());
      let minute = zero(myDate.getMinutes());
      let second = zero(myDate.getSeconds());

      return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
        return ({
          Y: year,
          m: month,
          d: day,
          H: hour,
          i: minute,
          s: second
        })[matches];
      });
    },
    dealWithData() {
      this.abyssInfoData.start_time = this.dateFormat(this.abyssInfoData.start_time * 1000, "Y-m-d")
      this.abyssInfoData.end_time = this.dateFormat(this.abyssInfoData.end_time * 1000, "Y-m-d")
    }
  }
}
</script>

<style scoped>

</style>