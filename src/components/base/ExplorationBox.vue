<template>
  <div class="exploration-box columns">
    <div class="exploration-content column" v-for="(world,i) in explorationData" :key="i">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image" style="width: 96px; background: #342ca2">
              <img :src="world.icon" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ world.name }}</strong>
                <br>
                探索度：{{ world.exploration_percentage / 10 }}%
                <br>
                <span v-if="world.type === 'Reputation'">声望等级：{{ world.level }}<br></span>
                <span v-if="world.offerings !== undefined && world.offerings.length > 0 ">
                    <span v-for="(offering,j) in world.offerings" :key="j">
                      {{ offering.name }}：{{ offering.level }}<br>
                    </span>
                  </span>
              </p>
            </div>
<!--            <div class="level is-mobile">
              <progress class="progress is-small is-link" :value="world.exploration_percentage" max="1000"></progress>
            </div>-->
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExplorationBox",
  props: ['explorationData']
}
</script>

<style scoped>

</style>