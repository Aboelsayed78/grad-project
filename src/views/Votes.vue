<template>
  <div class="votes">
    <div class="contain">
      <VoteComp like="86" unlike="23"/>
      <VoteComp like="62" unlike="33"/>
      <VotePage />
    </div>
  </div>
</template>

<script>
import VoteComp from "../components/VoteComp.vue";
import VotePage from "../components/VotePage.vue";
export default {
  name: "Votes",
  components: {
    VoteComp,
    VotePage,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_reset.scss";
.votes {
  padding: 25px 0;
}
</style>
