<template>
  <div class="exploration-box columns">
    <div class="exploration-content column" v-for="(home,i) in homeData" :key="i">
      <div class="box exploration-card" :style="'background-image: url(' + home.icon + ')'">
        <div>
          <p>
            <strong style="color: white">{{ home.name }}</strong>
            <br>
            信任等阶：{{ home.level }} 级
            <br>
            最高洞天仙力：{{ home.comfort_num }}
            <br>
            获得摆设数：{{ home.item_num }}
            <br>
            历史访客数：{{ home.visit_num }}
            <br>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBox",
  props: ['homeData']
}
</script>

<style scoped>
.exploration-card {
  color: white;
  height: 200px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.exploration-card p {
  background-color:rgba(0,0,0,0.5);
  padding: 1.25rem 2.5rem;
  margin: 0 -1.25rem;
}
</style>
