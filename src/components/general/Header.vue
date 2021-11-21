<template>
  <div class="head">
    <div class="overlay">
      <HeadCont msg="Welcome To Your Home Page" />
      <Forms />
    </div>
  </div>
</template>

<script>
import HeadCont from "../HeadCont.vue";
import Forms from "../Forms.vue";
export default {
  name: "Header",
  components: {
    HeadCont,
    Forms,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/_reset.scss";
.head {
  margin-bottom: 10px;
  position: relative;
  height: 635px;
  background-image: url(../../assets/header-5.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
