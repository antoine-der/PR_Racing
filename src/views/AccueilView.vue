<template>
  <div class="container-accueil">
    <div class="overlay">
      <h2>PASSIONNÉ DE QUAD</h2>
      <h3>NOTRE PROJET VOUS INTÉRESSE ?</h3>
      <div class="button-contact">
        <button type="button">
          <RouterLink to="/contact">
            <a>Nous contacter</a>
          </RouterLink>
        </button>
      </div>
    </div>
  </div>
  <div class="sponso">
    <img src="../assets/partenaires/terre_secrete.png" />
    <img src="../assets/partenaires/sport-2000.png" />
    <img src="../assets/partenaires/IMP.png" />
    <img src="../assets/partenaires/Thevenon.png" />
    <img src="../assets/partenaires/kenny.png" />
  </div>
  <div class="beeQuad">
    <img src="../assets/BEE-QUAD.png" />
    <div class="valeurs-text">
      <p>
        Avec la BeeQuad expérience vers la transition écologique dans les sports
        mécaniques, les 72H de Pont-de-Vaux se mettent au vert. Révolution
        annoncée sur la ligne de départ des 72 Heures de Pont-de-Vaux lors de la
        prochaine et 37° édition en août 2024. Cette démarche novatrice portée
        par l’équipe PR Racing Quad, sous la direction de Philippe ARCIS,
        servira de test à l’équipe comme à l’organisation des 72H. L’innovation
        réside dans le carburant utilisé qui est produit à base de déchets
        viticoles français. Le carburant ainsi obtenu est à 95% issu des résidus
        de marc de raisin et ne modifie pas le moteur de la machine. Les
        organisateurs des 72Heures sont totalement ouverts à ce projet qu’ils
        accueillent avec intérêt, conscients des ouvertures futures qu’il va
        permettre en termes d’innovation et de transition écologique.
      </p>
    </div>
  </div>
  <div class="association">
    <div class="valeurs-text">
      <p>
        Notre association PR RACING QUAD a été publiée au journal officiel le 22
        décembre 2022. Le président est Monsieur Philippe ARCIS. L’association
        est domicilier au 811 route de Ternant 01190 Saint Bénigne. SPORTS,
        ACTIVITES DE PLAIN AIR (Sport Mécaniques). Une première saison pleine de
        sagesse de façon à construire un Team sur des bases solides et respecter
        les engagements pris auprès de nos partenaires qui nous font confiance
        et qui nous ont tous reconduit leur soutien. Un grand Merci à tous.
        Chacune des étapes nous fait grandir et gagner en expérience.
      </p>
    </div>
    <img src="../assets/pr_racing4.jpg" />
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
  <div class="ela">
    <div class="valeurs-text">
      <p>
        Nous avons mis en place un partenariat avec l’association ELA. Nous
        sommes de plus en plus dans un monde individualiste et il nous a paru
        indispensable de penser à ceux qui ont des difficultés en leur apportant
        notre soutien.
      </p>
    </div>
    <img src="../assets/ela.jpg" />
  </div>
</template>

<style>
.container-accueil {
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
  height: 800px;
  padding: 20px;
}

.overlay h3 {
  font-size: clamp(10px, 3vw, 48px);
  color: white;
}

.overlay h2 {
  margin: 0px;
  font-size: clamp(15px, 3vw, 112px);
  color: white;
}

.button-contact {
  display: flex;
  padding-top: 30px;
  width: 30%;
  justify-content: center;
}

.button-contact button {
  border-radius: 108px;
  background-color: transparent;
  width: 60%;
  height: auto;
  border: 5px solid white;
  justify-content: center;
}

.button-contact a {
  color: white;
  font-size: clamp(11px, 3vw, 40px);
  text-decoration: none;
}

.sponso {
  display: grid;
  grid-template-columns: repeat(5, 15%);
  column-gap: 15px;
  justify-content: center;
  justify-items: center;
  background-color: #dbe2dd;
  height: 250px;
  padding-top: 15px;
}

.sponso img {
  height: 40%;
}

.valeurs {
  display: flex;
  background-color: #dbe2dd;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.valeurs img {
  width: 30%;
}

.valeurs-text {
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: flex-end;
}

.valeurs-text p {
  width: 90%;
}

.association {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #580092;
  width: 100%;
  height: 100%;
}

.association img {
  width: 30%;
}

.association p {
  color: white;
}

.beeQuad {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c7cec9;
  width: 100%;
  height: 100%;
}

.beeQuad img {
  width: 30%;
}

.ela {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c7cec9;
  width: 100%;
  height: 100%;
}

.ela img {
  width: 30%;
}

.valeurs-text p {
  font-size: 18px;
}

@media (max-width: 1440px) {
  .overlay {
    height: 700px;
  }

  .valeurs-text {
    width: 50%;
  }
  .valeurs-text p {
    font-size: 17px;
  }

  .button-contact button {
    width: 90%;
    border: 5px solid white;
  }

  .sponso {
    height: 200px;
  }

  .sponso img {
    height: 30%;
  }
}

@media (max-width: 1024px) {
  .overlay {
    height: 500px;
  }

  .valeurs-text {
    width: 70%;
  }
  .valeurs-text p {
    font-size: 14px;
  }

  .sponso {
    height: 180px;
  }

  .sponso img {
    height: 25%;
  }
}

@media (max-width: 834px) {
}

@media (max-width: 768px) {
  .overlay {
    height: 500px;
  }

  .sponso {
    height: 150px;
  }

  .sponso img {
    height: 20%;
  }
}

@media (max-width: 480px) {
  .overlay {
    height: 200px;
    justify-content: flex-end;
  }

  .valeurs-text {
    width: 100%;
  }

  .valeurs-text p {
    font-size: 7px;
  }

  .button-contact {
    padding-top: 0px;
  }

  .button-contact button {
    width: 90%;
    border: 3px solid white;
  }

  .sponso {
    height: 90px;
  }

  .sponso img {
    height: 12%;
  }
}

@media (max-width: 400px) {
  .overlay {
    height: 200px;
  }

  .sponso {
    height: 70px;
  }

  .sponso img {
    height: 9%;
  }
}
</style>