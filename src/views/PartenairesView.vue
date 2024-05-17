<template>
  <div class="container-partenaires">
    <div class="overlay-partenaires">
      <h2>PARTENAIRES</h2>
    </div>
  </div>
  <div class="partenaires">
    <h2>Presse Marketing</h2>
    <div class="partenaires-logo">
      <img src="../assets/partenaires/com4all.png" />
      <img src="../assets/partenaires/trakof.png" />
      <img src="../assets/partenaires/france3.png" />
      <img src="../assets/partenaires/lavoixdelain.png" />
      <img src="../assets/partenaires/leprogres.jpg" />
    </div>
  </div>
  <div class="partenaires">
    <h2>Industriels</h2>
    <div class="partenaires-logo">
      <img src="../assets/partenaires/IMP.png" />
      <img src="../assets/partenaires/Thevenon.png" />
      <img src="../assets/partenaires/Logo_KBCLIMAT.png" />
      <img src="../assets/partenaires/actif-demenagements.png" />
      <img src="../assets/partenaires/Sablage d'ozan.jpeg" />
      <img src="../assets/partenaires/couturier.png" />
    </div>
  </div>
  <div class="partenaires">
    <h2>Commerces & Restaurants</h2>
    <div class="partenaires-logo">
      <img src="../assets/partenaires/Brin_de_nature.png" />
      <img src="../assets/partenaires/logo-carrefour-contact.png" />
      <img src="../assets/partenaires/pizza_nova.jpg" />
      <img src="../assets/partenaires/cave-berrod.png" />
      <img src="../assets/partenaires/tryba.png" />
      <img src="../assets/partenaires/leRaisin.png" />
    </div>
  </div>
  <div class="partenaires">
    <h2>Services & Assurances</h2>
    <div class="partenaires-logo">
      <img src="../assets/partenaires/AXA.png" />
      <img src="../assets/partenaires/LOGO CANVA.png" />
    </div>
  </div>
  <div class="partenaires">
    <h2>Presse</h2>
    <div class="partenaires-logo">
    </div>
  </div>
</template>

<style>
.container-partenaires {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.overlay-partenaires {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../assets/pr_racing42.jpg") center/cover no-repeat;
  width: 100%;
  height: 1000px;
  padding: 20px;
}

.overlay-partenaires h2 {
  margin: 0px;
  font-size: 112px;
  color: white;
}

.partenaires{
  background-color: #c7cec9;
}

.partenaires:nth-of-type(3){
  background-color: #dbe2dd;
}

.partenaires:nth-of-type(5){
  background-color: #dbe2dd;
}

.partenaires h2{
  display: flex;
  justify-content: center;
  font-size: 100px;
  padding: 83px 0px;
  margin: 0;
}

.partenaires-logo{
  display: grid;
  grid-template-columns: repeat(4,20%);
  gap: 50px;
  justify-items: center;
  align-items: center;
  justify-content: center;
}

.partenaires img {
  width: 100%;
  height: auto;
  max-width: 300px;
}
</style>
