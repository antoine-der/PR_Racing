<template>
  <div class="container-shopping">
    <div class="overlay-shopping">
      <h2>SHOPPING</h2>
    </div>
  </div>
  <div class="shopping">
    <div class="item">
      <a
        href="https://www.wimod.com/pr-racing-quad/46167-t-shirt-pr-racing-quad-x-72h-pont-de-vaux-violet.html"
      >
        <img src="../assets/t-shirt-violet.png" />
        <p>T-Shirt PR Racing Quad x 72h Pont de Vaux violet</p>
        <p>15.00€</p>
      </a>
    </div>
    <div class="item">
      <a
        href="https://www.wimod.com/pr-racing-quad/46243-sweat-zippe-a-capuche-pr-racing-quad-x-72h-pont-de-vaux-noir.html"
      >
        <img src="../assets/sweat.png" />
        <p>T-Shirt PR Racing Quad x 72h Pont de Vaux violet</p>
        <p>48.00€</p>
      </a>
    </div>
    <div class="item">
      <a
        href="https://www.wimod.com/pr-racing-quad/46166-t-shirt-pr-racing-quad-x-72h-pont-de-vaux-noir.html"
      >
        <img src="../assets/t-shirt-noir.png" />
        <p>T-Shirt PR Racing Quad x 72h Pont de Vaux violet</p>
        <p>15.00€</p>
      </a>
    </div>
    <div class="item">
      <a
        href="https://www.wimod.com/pr-racing-quad/46165-t-shirt-pr-racing-club-x-72h-pont-de-vaux-blanc-noir.html"
      >
        <img src="../assets/t-shirt-blanc.png" />
        <p>T-Shirt PR Racing Quad x 72h Pont de Vaux violet</p>
        <p>15.00€</p>
      </a>
    </div>
  </div>
  <div class="shopping second-row">
    <div class="item">
      <a
        href="https://www.wimod.com/pr-racing-quad/46242-casquette-trucker-pr-racing-quad-x-72h-pont-de-vaux-noir.html"
      >
        <img src="../assets/casquette.png" />
        <p>T-Shirt PR Racing Quad x 72h Pont de Vaux violet</p>
        <p>10.00€</p>
      </a>
    </div>
  </div>
</template>

<style>
.container-shopping {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.overlay-shopping {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../assets/pr_racing1.png") center/cover no-repeat;
  width: 100%;
  height: 1000px;
  padding: 20px;
}

.overlay-shopping h2 {
  margin: 0px;
  font-size: clamp(15px, 3vw, 112px);
  color: white;
}

.shopping {
  display: grid;
  grid-template-columns: repeat(4, 20%);
  grid-template-rows: auto;
  justify-content: center;
  column-gap: 50px;
  background-color: #dbe2dd;
}

.shopping a {
  text-decoration: none;
}

.shopping.second-row {
  background-color: #c7cec9;
}

.shopping img {
  width: 100%;
  height: auto;
  max-width: 500px;
  transition: transform 0.3s ease-in-out;
}

.item:hover img {
  transform: scale(1.2); /* Zoom de l'image */
}

@media (max-width: 1440px) {
  .overlay-shopping {
    height: 700px;
  }
}

@media (max-width: 1024px) {
  .overlay-shopping {
    height: 500px;
  }

  .item p{
    font-size: 20px;
  }
}

@media (max-width: 834px) {
  .item p{
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .overlay-shopping {
    height: 500px;
  }

}

@media (max-width: 480px) {
  .overlay-shopping {
    height: 200px;
    justify-content: flex-end;
  }

  .shopping{
    column-gap: 25px;
  }

  .item p{
    font-size: 10px;
  }

}

@media (max-width: 400px) {
  .overlay-shopping {
    height: 200px;
  }

  .shopping{
    column-gap: 20px;
  }

  .item p{
    font-size: 8px;
  }

}
</style>
