<template>
  <div class="container-saison">
    <div class="overlay-saison">
      <h2>SAISON 2024</h2>
    </div>
  </div>
  <div class="saison">
    <div class="mai">
      <img src="../assets/dsm.jpeg" />
      <div class="texte-saison">
        <p>Mai - DEMIGNY</p>
        <p>9 - 10 Mai 2024</p>
        <p>Course de Prairie MC DEMIGNY</p>
      </div>
      <img src="../assets/quad_mai.jpg" />
    </div>
    <div class="juin">
      <img src="../assets/10h.jpeg" />
      <div class="texte-saison">
        <p>Juin - GONCOURT</p>
        <p>19e Édition - 8 et 9 Juin 2024</p>
        <p>Endurance quad 10H de Goncourt</p>
      </div>
      <img src="../assets/quad_juin.png" />
    </div>
    <div class="aout">
      <img src="../assets/72h.png" />
      <div class="texte-saison">
        <p>Août - PONT DE VAUX</p>
        <p>22 - 25 Août 2024</p>
        <p>Endurance quad 12h de Pont de Vaux</p>
      </div>
      <img src="../assets/quad_aout.jpeg" />
    </div>
    <div class="octobre">
      <img src="../assets/6h.jpg" />
      <div class="texte-saison">
        <p>Octobre - Visan</p>
        <p>Endurance de quad 6H de Visan</p>
      </div>
      <img src="../assets/quad_octobre.jpeg" />
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

.overlay-saison h2 {
  margin: 0px;
  font-size: 112px;
  color: white;
}

.saison {
  display: grid;
  height: 100%;
}

.saison img {
  width: 100%;
  height: auto;
  max-width: 500px;
}

.mai {
  display: grid;
  grid-template-columns: repeat(3, 20%);
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #dbe2dd;
}

.juin {
  display: grid;
  grid-template-columns: repeat(3, 20%);
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #c7cec9;
}

.aout {
  display: grid;
  grid-template-columns: repeat(3, 20%);
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #dbe2dd;
}

.octobre {
  display: grid;
  grid-template-columns: repeat(3, 20%);
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #c7cec9;
}

.texte-saison{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.texte-saison p{
  margin: 0;
}
</style>
