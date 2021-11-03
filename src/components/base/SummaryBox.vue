<template>
  <div>
    <div class="columns is-multiline is-mobile has-text-centered">
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">活跃天数</p>
          <p class="title title-custom">{{ statsData.active_day_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">成就达成数</p>
          <p class="title title-custom">{{ statsData.achievement_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">获得角色数</p>
          <p class="title title-custom">{{ statsData.avatar_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">解锁传送点</p>
          <p class="title title-custom">{{ statsData.way_point_number }}</p>
        </div>
      </div>
    </div>
    <div class="columns is-multiline is-mobile has-text-centered">
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">风神瞳</p>
          <p class="title title-custom">{{ statsData.anemoculus_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">岩神瞳</p>
          <p class="title title-custom">{{ statsData.geoculus_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">雷神瞳</p>
          <p class="title title-custom">{{ statsData.electroculus_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">解锁秘境</p>
          <p class="title title-custom">{{ statsData.domain_number }}</p>
        </div>
      </div>
    </div>
    <div class="columns is-multiline is-mobile has-text-centered">
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">深境螺旋</p>
          <p class="title title-custom">{{ statsData.spiral_abyss }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">华丽宝箱数</p>
          <p class="title title-custom">{{ statsData.luxurious_chest_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">珍贵宝箱数</p>
          <p class="title title-custom">{{ statsData.precious_chest_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">精致宝箱数</p>
          <p class="title title-custom">{{ statsData.exquisite_chest_number }}</p>
        </div>
      </div>
    </div>
    <div class="columns is-multiline is-mobile has-text-centered">
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">普通宝箱数</p>
          <p class="title title-custom">{{ statsData.common_chest_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">奇馈宝箱数</p>
          <p class="title title-custom">{{ statsData.magic_chest_number }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryBox",
  props: ['statsData']
}
</script>

<style scoped>

</style>
