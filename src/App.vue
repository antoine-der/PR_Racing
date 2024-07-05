<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  const nav = document.querySelector("nav");
  if (window.scrollY === 0) {
    nav.classList.add("transparent-background");
  } else {
    nav.classList.remove("transparent-background");
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
</script>

<template>
  <header>
    <div class="wrapper">
      <nav
        :class="{
          'transparent-background': isTransparent,
          'menu-open': isMenuOpen,
        }"
      >
        <img src="./assets/logo_v2.png" class="logo" />
        <div class="nav-links">
          <RouterLink to="/" @click="closeMenu">Accueil</RouterLink>
          <RouterLink to="/shopping" @click="closeMenu">Shopping</RouterLink>
          <RouterLink to="/actualite" @click="closeMenu">Actualite</RouterLink>
          <RouterLink to="/team" @click="closeMenu">La team</RouterLink>
          <RouterLink to="/saison" @click="closeMenu">Saison 2024</RouterLink>
          <RouterLink to="/projet" @click="closeMenu">Le projet</RouterLink>
          <RouterLink to="/galerie" @click="closeMenu">Galerie</RouterLink>
          <RouterLink to="/partenaires" @click="closeMenu">Partenaires</RouterLink>
        </div>
        <div class="hamburger" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
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
          <a href="https://www.facebook.com/pr.racing.quad"
            ><font-awesome-icon :icon="['fab', 'facebook']" size="2x"
          /></a>
        </div>
        <div class="social-icon">
          <font-awesome-icon :icon="['fab', 'youtube']" size="2x" />
        </div>
        <div class="social-icon">
          <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
        </div>
        <div class="social-icon">
          <a href="https://www.instagram.com/prracingquad/?hl=fr"
            ><font-awesome-icon :icon="['fab', 'instagram']" size="2x"
          /></a>
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

footer h1 {
  font-size: clamp(20px, 2vw, 32px);
}
.informations-footer p {
  font-size: clamp(15px, 2vw, 25px);
}
.informations-footer {
  font-size: clamp(10px, 1vw, 20px);
}

.informations-footer p {
  color: black;
}

.social-media {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

.social-icon a {
  color: black;
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
  background-color: #580092;
  z-index: 1000;
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
  font-size: clamp(14px, 1vw, 29px);
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

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

.bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}

.menu-open .nav-links {
  display: flex;
  align-items: flex-end;
  width: 50%;
}

.menu-open nav a {
  padding: 14px;
  font-size: 24px;
  width: 100%;
  text-align: center;
}

/* Media queries */
@media (max-width: 1024px) {
  nav a {
    padding: 4px 6px;
  }
}
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
  }

  .hamburger {
    display: flex;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }

  nav a {
    font-size: 20px;
    padding: 10px;
  }

  .logo {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .informations-footer h1{
    font-size: 12px;
  }

  .informations-footer p{
    font-size: 10px;
  }

}

@media (max-width: 400px) {
  nav a {
    font-size: 15px;
    padding: 5px;
  }
}
</style>
