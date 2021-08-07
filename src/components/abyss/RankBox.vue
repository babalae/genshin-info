<template>
  <div class="column is-one-quarter" v-if="data.length > 0">
    <article class="message">
      <div class="message-header">
        <p>
          {{ tittle }}
        </p>
      </div>
      <div class="message-body">
        <div class="exploration-content column" v-for="(record,i) in data" :key="i">
          <article class="media">
            <div class="media-left">
              <figure class="image" style="width: 32px">
                <img :src="record.avatar_icon" :alt="record.avatar_id">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                {{ record.value }}
                <progress class="progress is-small is-link" :value="record.value" :max="data[0].value"></progress>
              </div>
            </div>
          </article>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "RankBox",
  props: ['tittle','data']
}
</script>

<style scoped>

</style>