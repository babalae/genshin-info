<template>
  <div>
    <div class="columns is-multiline is-mobile is-centered">
      <div class="column is-narrow" v-for="(reocrd,i) in data" :key="i">
        <div :class="'avatar-card star-' + reocrd.rarity">
          <img :src="reocrd.avatar_icon" alt="">
          <div class="desc">
            {{ reocrd.value }} 次
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RevealRankBox",
  props: ['data']
}
</script>

<style scoped>

</style>