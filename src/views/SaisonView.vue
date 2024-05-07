<template>
  <div class="container-saison">
    <div class="overlay-saison">
      <p>SAISON 2024</p>
    </div>
  </div>
</template>

<style>
.container-saison {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.overlay-saison {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../assets/pr_racing5.jpg") center/cover no-repeat;
  width: 100%;
  height: 1000px;
  padding: 20px;
}

.overlay-saison p {
  margin: 0px;
  font-size: 112px;
  color: white;
}
</style>
