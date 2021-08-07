<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-half">
        <strong>统计周期：</strong>{{ data.start_time }} ~ {{ data.end_time }}
      </div>
      <div class="column is-half">
        <strong>最深抵达：</strong>{{ data.max_floor }}
      </div>
      <div class="column is-half">
        <strong>战斗次数：</strong>{{ data.total_battle_times }}
      </div>
      <div class="column is-half">
        <strong>胜利次数：</strong>{{ data.total_win_times }}
      </div>
      <div class="column is-half">
        <strong>渊星总数：</strong>{{ data.total_star }}⭐
      </div>
    </div>
    <hr/>
    <div class="columns is-multiline is-vcentered">
      <div class="column is-half" v-if="data.defeat_rank.length > 0">
        <div>
          <strong>最多击破数：</strong>{{ data.defeat_rank[0].value }}
          <img class="side-head" :src=" data.defeat_rank[0].avatar_icon" alt="">
        </div>
      </div>
      <div class="column is-half" v-if="data.damage_rank.length > 0">
        <div>
          <strong>最强一击：</strong>{{ data.damage_rank[0].value }}
          <img class="side-head" :src=" data.damage_rank[0].avatar_icon" alt="">
        </div>
      </div>
      <div class="column is-half" v-if="data.take_damage_rank.length > 0">
        <div>
          <strong>承受最多伤害：</strong>{{ data.take_damage_rank[0].value }}
          <img class="side-head" :src=" data.take_damage_rank[0].avatar_icon" alt="">
        </div>
      </div>
      <div class="column is-half" v-if="data.energy_skill_rank.length > 0">
        <div>
          <strong>元素爆发次数：</strong>{{ data.energy_skill_rank[0].value }}
          <img class="side-head" :src=" data.energy_skill_rank[0].avatar_icon" alt="">
        </div>
      </div>
      <div class="column is-half" v-if="data.normal_skill_rank.length > 0">
        <div>
          <strong>元素战技释放数：</strong>{{ data.normal_skill_rank[0].value }}
          <img class="side-head" :src=" data.normal_skill_rank[0].avatar_icon" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryBox",
  props: ['data']
}
</script>

<style scoped>
.side-head {
  height: 36px;
}
</style>