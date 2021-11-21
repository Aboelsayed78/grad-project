<template>
  <div class="agencies">
    <div class="contain">
      <div class="agen-contain">
        <AgenComp />
        <AgenComp />
        <AgenComp />
        <AgenComp />
        <AgenComp />
        <AgenComp />
        <AgenComp />
      </div>
      <div class="clear"></div>
      <AgenPage />
    </div>
  </div>
</template>

<script>
import AgenComp from "../components/AgenComp.vue";
import AgenPage from "../components/AgenPage.vue";
export default {
  name: "Agencies",
  components: {
    AgenComp,
    AgenPage,
  },
};
</script>

<style lang="scss">
@import "../assets/_reset.scss";
.agencies {
  margin-top: 50px;
  .contain {
    .agen-contain {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
