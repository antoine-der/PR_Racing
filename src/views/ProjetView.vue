<template>
  <div class="container-projet">
    <div class="overlay-projet">
      <h2>LE PROJET</h2>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.container-projet {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
}

.overlay-projet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../assets/pr_racing7.jpg") center/cover no-repeat;
  width: 100%;
  height: 1000px;
  padding: 20px;
}

.overlay-projet h2 {
  margin: 0px;
  font-size: 112px;
  color: white;
  text-align: center;
}

</style>
