<template>
  <div class="head">
    <div class="overlay">
      <HeadCont msg="Welcome To Your Home Page" />
    </div>
  </div>
</template>

<script>
import HeadCont from "../HeadCont.vue";
export default {
  name: "Header",
  components: {
    HeadCont,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/_reset.scss";
.head {
  margin-bottom: 50px;
  position: relative;
  height: 635px;
  background-image: url(../../assets/header-5.jpg);
  background-size: cover;
}
</style>
