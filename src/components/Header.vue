<template>
  <div class="head">
    <div class="overlay">
      <HelloWorld msg="Welcome To Your Home Page" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  name: "Header",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_reset.scss";
.head {
  margin-bottom: 50px;
  position: relative;
  height: 635px;
  background-image: url(../assets/header-5.jpg);
  background-size: cover;
}
</style>
