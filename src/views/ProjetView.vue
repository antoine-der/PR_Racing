<template>
  <div class="container-projet">
    <div class="overlay-projet">
      <h2>LE PROJET</h2>
    </div>
  </div>
  <div class="timeline">
    <div class="container left">
      <div class="content">
        <h2>2022</h2>
        <p>
          Création de l’association PR Racing Quad (novembre 2022) Achat d’un
          Yamaha 450 YFZ-R 2009 (décembre 2022).
        </p>
        <img src="../assets/quad_2022.png" />
      </div>
    </div>
    <div class="container right">
      <div class="content">
        <h2>2023</h2>
        <p>
          Première participation au Mondial du Quad de Pont de Vaux 51em en
          qualification – 73em classement final. On termine !
        </p>
        <img src="../assets/pr_racing1.png" width="300px" />
      </div>
    </div>
    <div class="container left">
      <div class="content">
        <h2>2024</h2>
        <p>
          Une montée en puissance avec une saison à venir plus étoffée. Course
          de prairie de Demigny, 10h de Goncourt, le Mondial du Quad de Pont de
          Vaux en catégorie Mondial, les 6h de Visan. D’autres courses pourront
          venir se greffer à ce programme en fonction des aléas mécanique. Deux
          nouveaux pilotes viennent nous rejoindre pour respecter les différents
          formats de course.
        </p>
        <div class="content-2024">
          <img class="content-2024" src="../assets/72h.png" />
          <img class="content-2024" src="../assets/10h.jpeg" />
          <img class="content-2024" src="../assets/6h.jpg" />
        </div>
      </div>
    </div>
    <div class="container right">
      <div class="content">
        <h2>2025/2026</h2>
        <p>
          Une double saison, car nous allons dans une première partie
          participer, comme en 2024, aux courses de Demigny, Goncourt et Pont de
          Vaux. La deuxième partie (à partir de septembre) sera consacrée à la
          préparation de la machine en configuration sable. L’objectif étant sur
          fin 2025, prendre part à une première course de sable qui reste à
          définir, pour aboutir en février 2026 à une participation au mythique
          QUADURO 2026 Enduropale du Touquet Pas-de-Calais.
        </p>
        <div class="content-2024">
          <img class="content-2024" src="../assets/enduropale.png" />
          <img class="content-2024" src="../assets/quad_2025.png" />
        </div>
      </div>
    </div>
    <div class="container left">
      <div class="content">
        <h2>2026</h2>
        <p>
          Après une première participation au QUADURO du Touquet, grosse
          révision de la machine en vue d’une nouvelle participation au Mondial
          du Quad de Pont de Vaux. En effet Pont de Vaux reste et restera une
          course prioritaire pour l’ensemble de la Team PR Racing Quad. En 2026
          nous n’aurons que le QUADURO et Pont de Vaux à notre programme. La
          raison qui nous pousse à limiter nos courses en 2026, s’explique par
          une nouvelle évolution dans nos objectifs. L’achat d’un Yamaha 700
          Raptor et de le préparer pour les rallyes Raid !
        </p>
        <img src="../assets/quad_2026.jpg" />
      </div>
    </div>
    <div class="container right">
      <div class="content">
        <h2>2027</h2>
        <p>
          <b>Un tournant programmé pour la Team PR Racing Quad.</b><br />
          Même si Pont de Vaux restera à notre programme avec notre Yamaha 450
          YFZ-R, la saison sera entièrement consacrée à la préparation mécanique
          de notre Yamaha 700 Raptor et physique d’un pilote pour s’engager sur
          au moins deux courses de préparation. Le Portugal, le Maroc et la
          Tunisie seront alors nos nouveaux terrains de jeux.
        </p>
        <div class="content-2024">
          <img class="content-2024" src="../assets/72h.png" />
          <img class="content-2024" src="../assets/dakar.jpg" />
        </div>
      </div>
    </div>
    <div class="container left">
      <div class="content">
        <h2>2028 ou 2029</h2>
        <p>
          <b>La course mythique en Rallye Raid : LE DAKAR</b><br />
          En effet toutes ces années depuis la création de notre team, ont été
          organisées pour atteindre cet objectif ultime. Le DAKAR ne sera pas
          une fin en soit mais une nouvelle aventure qui débutera.
        </p>
        <div class="content-2024">
          <img class="content-2024" src="../assets/logo_dakar.png" />
          <img class="content-2024" src="../assets/dakar_2.jpg" />
        </div>
      </div>
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
  font-size: clamp(15px, 3vw, 112px);
  color: white;
}

* {
  box-sizing: border-box;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  background: #f6f9fc;
  padding: 100px 26px 100px 26px;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: #8a53ff;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #8a53ff;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid #8a53ff;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #8a53ff;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #8a53ff;
  border-width: 10px 10px 10px 0;
  border-color: transparent #8a53ff transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

.content-2024 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.content-2024 {
  /*height: -webkit-fill-available;*/
}

.content img {
  width: 200px;
  align-items: center;
}

@media (max-width: 1440px) {
  .overlay-projet {
    height: 700px;
  }

  .content-2024 img {
    width: 120px;
  }

  .content p {
    font-size: 20px;
  }
}

@media (max-width: 1024px) {
  .overlay-projet {
    height: 500px;
  }

  .content p {
    font-size: 15px;
  }

  .content-2024 img {
    width: 80px;
  }
}

@media (max-width: 834px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}

@media (max-width: 768px) {
  .overlay-projet {
    height: 500px;
  }

  .content img {
    width: 150px;
  }

  .content p {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .overlay-projet {
    height: 200px;
    justify-content: flex-end;
  }

  .content-2024 img {
    width: 65px;
  }

  .content p {
    font-size: 10px;
  }
}

@media (max-width: 400px) {
  .overlay-projet {
    height: 200px;
  }

  .content p {
    font-size: 8px;
  }
}
</style>
