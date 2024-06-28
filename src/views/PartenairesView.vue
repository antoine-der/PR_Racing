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
      <img src="../assets/partenaires/france3.png" />
      <img src="../assets/partenaires/lavoixdelain.png" />
      <img src="../assets/partenaires/leprogres.jpg" />
      <img src="../assets/partenaires/sport-2000.png" />
    </div>
  </div>
  <div class="partenaires">
    <h2>Partenaires Quad</h2>
    <div class="partenaires-logo">
      <img src="../assets/partenaires/3as.jpg" />
      <img src="../assets/partenaires/beringer.png" />
      <img src="../assets/partenaires/mac_extrem.png" />
      <img src="../assets/partenaires/trakof.png" />
    </div>
  </div>
  <div class="partenaires">
    <h2>Industriels</h2>
    <div class="partenaires-logo">
      <img src="../assets/partenaires/IMP.png" />
      <img src="../assets/partenaires/Thevenon.png" />
      <img src="../assets/partenaires/Logo_KBCLIMAT.png" />
      <img src="../assets/partenaires/couturier.png" />
      <img src="../assets/partenaires/terre_secrete.png" />
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
      <img src="../assets/partenaires/comptoir_des_viandes.png" />
    </div>
  </div>
  <div class="partenaires">
    <h2>Services & Assurances</h2>
    <div class="partenaires-logo">
      <img src="../assets/partenaires/AXA.png" />
      <img src="../assets/partenaires/LOGO CANVA.png" />
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
  font-size: clamp(15px, 3vw, 112px);
  color: white;
}

.partenaires{
  background-color: #c7cec9;
  padding-bottom: 50px;
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
  color: #580092;
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
  filter: grayscale(90%);
  transition: filter 0.2s ease;
}

.partenaires img:hover {
  filter: grayscale(0%);

}

@media (max-width: 1440px) {
  .overlay-partenaires {
    height: 700px;
  }
}

@media (max-width: 1024px) {
  .overlay-partenaires {
    height: 500px;
  }

  .partenaires h2{
    font-size: 80px;
  }
}

@media (max-width: 834px) {
  .partenaires h2{
    font-size: 70px;
  }
}

@media (max-width: 768px) {
  .overlay-partenaires {
    height: 500px;
  }

  .partenaires h2{
    font-size: 60px;
  }

}

@media (max-width: 480px) {
  .overlay-partenaires {
    height: 200px;
    justify-content: flex-end;
  }

  .partenaires-logo{
    gap: 30px;
  }

  .partenaires h2{
    padding: 40px 0 ;
    font-size: 40px;
  }

}

@media (max-width: 400px) {
  .overlay-partenaires {
    height: 200px;
  }

  .partenaires h2{
    font-size: 30px;
  }

}
</style>
