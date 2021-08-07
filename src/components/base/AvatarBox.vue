<template>
  <div class="avatars-box">
    <div class="avatar-content" v-for="(avatar,i) in avatarData" :key="i">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image" style="width: 96px">
              <img :src="avatar.image" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ avatar.name }}</strong>
                <small> {{ avatar.element }} </small>
                <small>{{ avatar.rarity }}⭐</small>
                <br>
                等级：{{ avatar.level }}
                <br>
                好感度：{{ avatar.fetter }}
                <br>
                命座：{{ avatar.actived_constellation_num }}
                <br>
              </p>
            </div>
          </div>
        </article>
      </div>
<!--      <div :class="'avatar-card star-' + avatar.rarity">
        <img :src="avatar.image" alt="">
        <div class="desc">
          Lv.{{ avatar.level }} 🧡 {{ avatar.fetter }}
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "AvatarBox",
  props: ['avatarData']
}
</script>

<style scoped>
.avatars-box {
  display: flex;
  flex-wrap: wrap;
}

.avatar-content {
  width: 100%;
  padding: 0.5rem 1rem;
}

@media screen and (min-width: 768px) {
  .avatar-content {
    width: 50%;
    padding: 0.5rem 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .avatar-content {
    width: 25%;
    padding: 0.5rem 1rem;
  }
}
</style>