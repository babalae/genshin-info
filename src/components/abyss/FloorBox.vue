<template>
  <div class="columns is-multiline" v-if="floorData.length > 0">
    <div class="column is-half" v-for="(floor, i) in floorData" :key="i">
      <article class="message">
        <div class="message-header">
          <p>
            第{{ floor.index }}层
          </p>
          <span>
            <span>⭐ {{ floor.star }} / {{ floor.max_star }}</span>
          </span>
        </div>
        <div class="message-body">
          <!-- 房间 -->
          <div class="column" v-for="(level, j) in floor.levels" :key="j+100">
            <span><strong>第{{ level.index }}间</strong>
              <small style="margin-left: 10px">
                {{ dateFormat(level.battles[0].timestamp * 1000, 'Y-m-d H:i:s') }}
              </small>
            </span>
            <div class="columns is-vcentered is-multiline is-mobile">
              <!-- 上半 -->
              <div class="column is-narrow avatar-column" v-for="(avatar,k1) in level.battles[0].avatars"
                   :key="k1+1000">
                <div :class="'avatar-card star-' + avatar.rarity">
                  <img :src="avatar.icon" alt="">
                  <div class="desc">
                    Lv.{{ avatar.level }}
                  </div>
                </div>
              </div>
              <!-- 中间显示⭐ -->
              <div class="column is-narrow">
                <div v-for="k2 of level.star" :key="k2+3000">
                  ⭐
                </div>
              </div>
              <!-- 下半 -->
              <div class="column is-narrow avatar-column" v-for="(avatar,k3) in level.battles[0].avatars"
                   :key="k3+2000">
                <div :class="'avatar-card star-' + avatar.rarity">
                  <img :src="avatar.icon" alt="">
                  <div class="desc">
                    Lv.{{ avatar.level }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>

</template>

<script>
export default {
  name: "FloorBox",
  props: ['floorData']
}
</script>

<style scoped>
.avatar-card {
  width: 38px;
  border-radius: 0.25rem;
}

.avatar-card .desc {
  background-color: #cccccc;
  border-radius: 0 0 0.25rem 0.25rem;
  text-align: center;
  font-size: 12px;
  margin-top: -5px;
}

.avatar-column {
  padding: 10px 8px;
}
</style>
