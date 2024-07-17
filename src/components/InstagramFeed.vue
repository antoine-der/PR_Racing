<template>
  <div class="instagram-feed-container">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="!media.length" class="loading">Loading...</div>
    <div v-else class="instagram-feed">
      <div v-for="item in media" :key="item.id" class="instagram-post">
        <img
          :src="item.media_url"
          :alt="item.caption"
          v-if="
            item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM'
          "
          class="post-image"
        />
        <video controls v-if="item.media_type === 'VIDEO'" class="post-video">
          <source :src="item.media_url" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

  <script>
import axios from "axios";

export default {
  data() {
    return {
      media: [],
      error: null,
    };
  },
  mounted() {
    this.fetchInstagramMedia();
  },
  methods: {
    async fetchInstagramMedia() {
      const accessToken = process.env.INSTAGRAM_TOKEN;
      const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,permalink,media_type&access_token=${accessToken}`;

      try {
        const response = await axios.get(endpoint);
        this.media = response.data.data;
      } catch (error) {
        this.error = "Failed to fetch Instagram media.";
        console.error(error);
      }
    },
  },
};
</script>
  
  <style scoped>
.instagram-feed-container {
  width: 100%;
}

.error {
  color: red;
  text-align: center;
}

.loading {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
}

.instagram-feed {
  display: grid;
  grid-template-columns: repeat(3, 25%);
  gap: 1px;
  justify-content: center;
  padding-top: 50px;
  background-color: #c7cec9;
}

.instagram-post {
  position: relative;
}

.post-image,
.post-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-video {
  display: block;
}

@media (max-width: 768px) {
  .instagram-feed{
    grid-template-columns: repeat(3, 30%);
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