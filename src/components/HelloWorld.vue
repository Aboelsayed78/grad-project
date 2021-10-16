<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the vue-cli documentation
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.hello {
  margin-top: 275px;
}
h1 {
  margin: 0;
  color: #eee;
  font-size: 50px;
  margin-bottom: 25px;
}
p {
  color: #eee;
  font-size: 30px;
}
</style>
