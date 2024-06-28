<template>
  <div class="container-actualite">
    <div class="overlay-actualite">
      <h2>ACTUALITE</h2>
    </div>
  </div>
</template>

<style>
.container-actualite {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.overlay-actualite {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../assets/pr_racing8.jpg") center/cover no-repeat;
  width: 100%;
  height: 1000px;
  padding: 20px;
}

.overlay-actualite h2 {
  margin: 0px;
  font-size: clamp(15px, 3vw, 112px);
  color: white;
}

@media (max-width: 1440px) {
  .overlay-actualite {
    height: 700px;
  }
}

@media (max-width: 1024px) {
  .overlay-actualite {
    height: 500px;
  }
}

@media (max-width: 834px) {
}

@media (max-width: 768px) {
  .overlay-actualite {
    height: 500px;
  }

}

@media (max-width: 480px) {
  .overlay-actualite {
    height: 200px;
    justify-content: flex-end;
  }

}

@media (max-width: 400px) {
  .overlay-actualite {
    height: 200px;
  }

}
</style>
