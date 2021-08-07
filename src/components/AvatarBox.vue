<template>
  <div class="avatars-box">
    <div class="avatar-content" v-for="(avatar,i) in avatarData" :key="i">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
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
              </p>
            </div>
          </div>
        </article>
      </div>
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

</style>