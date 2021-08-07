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
.avatar-card {
  width: 100px;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
}

.avatar-card .desc {
  background-color: #f1f1f1;
  border-radius: 0 0 0.25rem 0.25rem;
  text-align: center;
}
</style>