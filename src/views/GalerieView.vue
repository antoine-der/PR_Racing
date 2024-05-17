<script>
import InstagramFeed from '../components/InstagramFeed.vue';

export default {
  name: 'App',
  components: {
    InstagramFeed,
  },
};
</script>

<template>
  <div class="container-galerie">
    <div class="overlay-galerie">
      <h2>GALERIE</h2>
    </div>
  </div>
  <InstagramFeed />
</template>

<style>
.container-galerie {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.overlay-galerie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../assets/pr_racing9.jpg") center/cover no-repeat;
  width: 100%;
  height: 1000px;
  padding: 20px;
}

.overlay-galerie h2 {
  margin: 0px;
  font-size: 112px;
  color: white;
}
</style>
