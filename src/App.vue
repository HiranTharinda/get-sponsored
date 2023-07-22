<template>
  <NavBar />
  <router-view />
  <FooterBar />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

@media (max-width: 501px) {
  body {
    background-color: white;
  }
}
@media (min-width: 501px) {
  body {
    background-image: url("./assets/bg.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
}
</style>
