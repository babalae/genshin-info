<template>
  <div>
    <div class="exploration-content column" v-for="(record,i) in data" :key="i">
    <article class="media">
      <div class="media-left">
        <figure class="image" style="width: 32px">
          <img :src="record.avatar_icon" :alt="record.avatar_id">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <progress class="progress is-small is-link" :value="record.value" :max="data[0].value"></progress>
        </div>
      </div>
    </article>
  </div>
  </div>
</template>

<script>
export default {
  name: "DefeatRankBox",
  props: ['data']
}
</script>

<style scoped>

</style>