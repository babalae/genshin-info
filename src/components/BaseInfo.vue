<template>
  <div class="container">
    <div class="columns is-multiline is-mobile has-text-centered">
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">活跃天数</p>
          <p class="title title-custom">{{ baseInfoData.stats.active_day_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">成就达成数</p>
          <p class="title title-custom">{{ baseInfoData.stats.achievement_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">风神瞳</p>
          <p class="title title-custom">{{ baseInfoData.stats.anemoculus_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">岩神瞳</p>
          <p class="title title-custom">{{ baseInfoData.stats.geoculus_number }}</p>
        </div>
      </div>
    </div>
    <div class="columns is-multiline is-mobile has-text-centered">
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">获得角色数</p>
          <p class="title title-custom">{{ baseInfoData.stats.avatar_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">解锁传送点</p>
          <p class="title title-custom">{{ baseInfoData.stats.way_point_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">解锁秘境</p>
          <p class="title title-custom">{{ baseInfoData.stats.domain_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">深境螺旋</p>
          <p class="title title-custom">{{ baseInfoData.stats.spiral_abyss }}</p>
        </div>
      </div>
    </div>
    <div class="columns is-multiline is-mobile has-text-centered">
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">华丽宝箱数</p>
          <p class="title title-custom">{{ baseInfoData.stats.luxurious_chest_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">珍贵宝箱数</p>
          <p class="title title-custom">{{ baseInfoData.stats.precious_chest_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">精致宝箱数</p>
          <p class="title title-custom">{{ baseInfoData.stats.exquisite_chest_number }}</p>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div>
          <p class="heading heading-custom">普通宝箱数</p>
          <p class="title title-custom">{{ baseInfoData.stats.common_chest_number }}</p>
        </div>
      </div>
    </div>
    <AvatarBox :avatar-data="baseInfoData.avatars"></AvatarBox>
  </div>
</template>

<script>
import AvatarBox from './AvatarBox.vue'

export default {
  name: "BaseInfo",
  components: {AvatarBox},
  props: ['baseInfoData']
}
</script>

<style scoped>

</style>