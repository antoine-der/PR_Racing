<template>
  <div class="container-galerie">
    <div class="overlay-galerie">
      <p>GALERIE</p>
    </div>
  </div>
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

.overlay-galerie p {
  margin: 0px;
  font-size: 112px;
  color: white;
}
</style>
