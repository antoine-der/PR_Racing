<template>
  <div class="container-team">
    <div class="overlay-team">
      <p>LA TEAM</p>
    </div>
  </div>
  <div class="team">
    <div class="team-content">
      <img src="../assets/ruben.png" />
      <span>Ruben ARCIS</span>
      <span>16 ans</span>
      <span>Mondial du Quad PDV 2023</span>
      <span>Kenny Quad Contest</span>
    </div>
    <div class="team-content">
      <img src="../assets/philippe.png" />
      <span>Philippe ARCIS</span>
      <span>60 ans</span>
      <span>Mondial du Quad PDV 2023</span>
      <span>Kenny Quad Contest</span>
    </div>
    <div class="team-content">
      <img src="../assets/quentin.png" />
      <span>Quentin NUGUET</span>
      <span>31 ans</span>
      <span>Kenny Quad Contest 2014</span>
      <span>Mondial 2015 - 2016 - 2023</span>
    </div>
    <div class="team-content">
      <img src="../assets/florian.png" />
      <span>Florian DESPLANCHES</span>
      <span>39 ans</span>
      <span>Mondial 2015 - 2016 - 2023</span>
    </div>
  </div>
</template>

<style>
.container-team {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.overlay-team {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../assets/pr_racing6.jpg") center/cover no-repeat;
  width: 100%;
  height: 1000px;
  padding: 20px;
}

.overlay-team p {
  margin: 0px;
  font-size: 112px;
  color: white;
}

.team {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #580092;
  width: 100%;
  height: 800px;
}

.team-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.team-content img{
  padding-bottom: 15px;
}

.team-content span {
  color: white;
  line-height: 50px;
}
</style>
