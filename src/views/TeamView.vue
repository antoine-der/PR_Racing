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
  <div class="benevole">
    <p>Sans oublier les bénévoles !</p>
    <img src="../assets/equipe.jpg" />
  </div>
  <div class="machine">
    <div class="machine-image">
      <img src="../assets/machine.png" />
      <img src="../assets/machine2.png" />
      <img src="../assets/machine3.png" />
    </div>
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
  height: 800px;
  padding: 20px;
}

.overlay-team h2 {
  margin: 0px;
  font-size: clamp(15px, 3vw, 112px);
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
  align-items: center;
}

.team-content img {
  padding-bottom: 15px;
}

.team-content p {
  color: white;
}

.benevole {
  display: grid;
  grid-template-columns: 80%;
  background-color: #dbe2dd;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding-top: 50px;
}

.benevole img {
  width: 100%;
  height: auto;
  max-width: 100%;
}

.machine {
  display: grid;
  grid-template-columns: repeat(1, 80%);
  background-color: #c7cec9;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.machine-image {
  display: grid;
  grid-template-columns: repeat(3, 40%);
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.machine-image img {
  width: 100%;
  height: auto;
  max-width: 100%;
}

@media (max-width: 1440px) {
  .overlay-team {
    height: 700px;
  }

  .team-content p {
    font-size: 20px;
  }
}

@media (max-width: 1024px) {
  .overlay-team {
    height: 500px;
  }

  .team{
    height: 500px;
  }

  .team-content img {
    width: 80%;
  }

  .team-content p {
    font-size: 17px;
  }

  .benevole p {
    font-size: 17px;
  }

  .machine-texte p {
    font-size: 17px;
  }
}

@media (max-width: 834px) {
  .overlay-team {
    height: 400px;
  }

  .team{
    height: 400px;
  }

  .team-content p {
    font-size: 14px;
  }

  .benevole p {
    font-size: 14px;
  }

  .machine-texte p {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .overlay-team {
    height: 500px;
  }

  .team-content p {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .overlay-team {
    height: 200px;
    justify-content: flex-end;
  }

  .team{
    height: 200px;
  }

  .team-content p {
    font-size: 7px;
  }

  .benevole{
    padding-top: 20px;
  }
}

@media (max-width: 400px) {
  .overlay-team {
    height: 200px;
  }

  .team-content p {
    font-size: 5px;
  }
}
</style>
