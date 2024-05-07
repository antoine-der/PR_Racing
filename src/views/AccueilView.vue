<template>
  <div class="container-slogan">
    <div class="overlay">
      <p>PASSIONNÉ DE QUAD ?</p>
      <p>Notre projet vous intéresse ?</p>
      <div class="button-contact">
        <button type="button">
          <a href="contact.php">Nous contacter</a>
        </button>
      </div>
    </div>
  </div>
  <div class="valeurs">
    <img src="../assets/pr_racing10.jpg" />
    <div class="valeurs-text">
      <p>
        Le sport transmet des valeurs qui vont au-delà de la discipline
        spécifique que l'on pratique.
      </p>
      <p>- L'humilité</p>
      <p>- La détermination</p>
      <p>- Le dépassement de soi</p>
      <p>- La volonté</p>
      <p>- La passion</p>
      <p>- Apporter votre soutien</p>
    </div>
  </div>
  <div class="association">
    <p>
      Notre association PR RACING QUAD a été publiée au journal officiel le 22
      décembre 2022. Le président est Monsieur Philippe ARCIS. L’association est
      domicilier au 811 route de Ternant 01190 Saint Bénigne. SPORTS, ACTIVITES
      DE PLAIN AIR (Sport Mécaniques). Une première saison pleine de sagesse de
      façon à construire un Team sur des bases solides et respecter les
      engagements pris auprès de nos partenaires qui nous font confiance et qui
      nous ont tous reconduit leur soutien. Un grand Merci à tous. Chacune des
      étapes nous fait grandir et gagner en expérience.
    </p>
    <img src="../assets/pr_racing4.jpg" />
  </div>
  <div class="beeQuad">
    <img src="../assets/BEE-QUAD.png" />
    <p>
      Avec la BeeQuad expérience vers la transition écologique dans les sports
      mécaniques, les 72H de Pont-de-Vaux se mettent au vert. Révolution
      annoncée sur la ligne de départ des 72 Heures de Pont-de-Vaux lors de la
      prochaine et 37° édition en août 2024. Cette démarche novatrice portée par
      l’équipe PR Racing Quad, sous la direction de Philippe ARCIS, servira de
      test à l’équipe comme à l’organisation des 72H. L’innovation réside dans
      le carburant utilisé qui est produit à base de déchets viticoles français.
      Le carburant ainsi obtenu est à 95% issu des résidus de marc de raisin et
      ne modifie pas le moteur de la machine. Les organisateurs des 72Heures
      sont totalement ouverts à ce projet qu’ils accueillent avec intérêt,
      conscients des ouvertures futures qu’il va permettre en termes
      d’innovation et de transition écologique.
    </p>
  </div>
</template>

<style>
.container-slogan {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../assets/pr_racing2.png") center/cover no-repeat;
  width: 100%;
  height: 1000px;
  padding: 20px;
}

.overlay p {
  margin: 0px;
  font-size: 80px;
  color: black;
}

.button-contact {
  display: flex;
  padding-top: 30px;
  width: 30%;
  justify-content: center;
}

.button-contact button {
  border-radius: 8px;
  background-color: transparent;
  width: 60%;
  height: auto;
  border: 4px solid black;
  justify-content: center;
}

.button-contact a {
  color: black;
  font-size: 60px;
  text-decoration: none;
}

.valeurs {
  display: flex;
  background-color: #c7cec9;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
}

.valeurs img {
  width: 30%;
}

.valeurs-text {
  width: 30%;
}

.valeurs-text p {
  font-size: 40px;
}

.association {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #dbe2dd;
}

.association img {
  width: 30%;
}

.association p {
  font-size: 40px;
  width: 50%;
}

.beeQuad{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #c7cec9;
}

.beeQuad img{

}

.beeQuad p {
  font-size: 40px;
  width: 50%;
}
</style>