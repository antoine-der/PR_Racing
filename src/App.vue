<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const handleScroll = () => {
  const nav = document.querySelector("nav");
  if (window.scrollY === 0) {
    nav.classList.add("transparent-background");
  } else {
    nav.classList.remove("transparent-background");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Appel à handleScroll lors du chargement initial de la page
  handleScroll();
});
</script>

<template>
  <header>
    <div class="wrapper">
      <nav :class="{ 'transparent-background': isTransparent }">
        <img src="./assets/logo_v2.png" class="logo" />
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/shopping">Shopping</RouterLink>
        <RouterLink to="/actualite">Actualite</RouterLink>
        <RouterLink to="/team">La team</RouterLink>
        <RouterLink to="/saison">Saison 2024</RouterLink>
        <RouterLink to="/projet">Le projet</RouterLink>
        <RouterLink to="/galerie">Galerie</RouterLink>
        <RouterLink to="/partenaires">Partenaires</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <h1>PR RACING QUAD</h1>
    <div class="informations-footer">
      <p>881 Route de ternant</p>
      <p>01190 Saint-Bénigne</p>
      <p>contact@pr-racingquad.com</p>
      <p>06 82 43 44 84</p>

      <div class="social-media">
        <div class="social-icon">
          <a href="https://www.facebook.com/pr.racing.quad"><font-awesome-icon :icon="['fab', 'facebook']" size="2x"/></a>
        </div>
        <div class="social-icon">
          <font-awesome-icon :icon="['fab', 'youtube']" size="2x" />
        </div>
        <div class="social-icon">
          <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
        </div>
        <div class="social-icon">
          <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
header {
  width: 100%;
  justify-content: center;
}

footer {
  width: 100%;
  display: flex;
  background-color: #dbe2dd;
  justify-content: space-evenly;
}

.informations-footer {
  font-size: 20px;
}

.social-media {
  display: flex;
  justify-content: space-between;
}

nav {
  overflow: hidden;
  width: 100%;
  top: 0;
  text-align: center;
  position: fixed;
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: #C266FF;
}

.transparent-background {
  background-color: transparent !important;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 29px;
  font-weight: bold;
  color: white;
  transition: 0.4s;
  font-family: Poppins;
}

nav a:first-of-type {
  border: 0;
}

.logo {
  width: 20%;
  height: auto;
}
</style>
