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
  height: 800px;
  padding: 20px;
}

.overlay-galerie h2 {
  margin: 0px;
  font-size: clamp(15px, 3vw, 112px);
  color: white;
}

@media (max-width: 1440px) {
  .overlay-galerie {
    height: 700px;
  }
}

@media (max-width: 1024px) {
  .overlay-galerie {
    height: 500px;
  }
}

@media (max-width: 834px) {
}

@media (max-width: 768px) {
  .overlay-galerie {
    height: 500px;
  }

}

@media (max-width: 480px) {
  .overlay-galerie {
    height: 200px;
    justify-content: flex-end;
  }

}

@media (max-width: 400px) {
  .overlay-galerie {
    height: 200px;
  }
}
</style>
