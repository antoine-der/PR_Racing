<template>
  <div class="container-team">
    <div class="overlay-team">
      <h2>LA TEAM</h2>
    </div>
  </div>
  <div class="team">
    <div class="team-content">
      <img src="../assets/ruben.png" />
      <p>Ruben ARCIS</p>
      <p>16 ans</p>
      <p>Mondial du Quad PDV 2023</p>
      <p>Kenny Quad Contest</p>
    </div>
    <div class="team-content">
      <img src="../assets/philippe.png" />
      <p>Philippe ARCIS</p>
      <p>60 ans</p>
      <p>Mondial du Quad PDV 2023</p>
      <p>Kenny Quad Contest</p>
    </div>
    <div class="team-content">
      <img src="../assets/quentin.png" />
      <p>Quentin NUGUET</p>
      <p>31 ans</p>
      <p>Kenny Quad Contest 2014</p>
      <p>Mondial 2015 - 2016 - 2023</p>
    </div>
    <div class="team-content">
      <img src="../assets/florian.png" />
      <p>Florian DESPLANCHES</p>
      <p>39 ans</p>
      <p>Mondial 2015 - 2016 - 2023</p>
    </div>
  </div>
  <div class="machine">
    <img src="../assets/machine.png" />
    <div class="machine-texte">
      <p>Yamaha 450 YFZ-R (2009)</p>
      <p>Elka Stage 5</p>
      <p>Train avant Leager's</p>
      <p>Arbre RPM</p>
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

.overlay-team h2 {
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

.team-content img {
  padding-bottom: 15px;
}

.team-content p {
  color: white;
}

.machine {
  display: grid;
  grid-template-columns: repeat(2, 40%);
  background-color: #c7cec9;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.machine img {
  width: 100%;
  height: auto;
  max-width: 100%;
}
</style>
