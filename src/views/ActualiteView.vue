<template>
  <div class="container-actualite">
    <div class="overlay-actualite">
      <p>ACTUALITE</p>
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

.overlay-actualite p {
  margin: 0px;
  font-size: 112px;
  color: white;
}
</style>
