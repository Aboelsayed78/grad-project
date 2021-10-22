<template>
  <div id="app">
    <Navbar />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/general/Navbar.vue";
import Header from "./components/general/Header.vue";
import Footer from "./components/general/Footer.vue";
export default {
  components: {
    Navbar,
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "assets/_reset.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $second-color;
}
</style>
