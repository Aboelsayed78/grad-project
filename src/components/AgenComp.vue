<template>
  <div class="agen-comp">
    <div class="agen-logo">
      <img src="../assets/header-7.jpg" alt="" />
    </div>
    <div class="agen-specs">
      <span>
        <font-awesome-icon icon="thumbs-up" />
        <p>50</p>
      </span>
      <span>
        <font-awesome-icon icon="plane-departure" />
        <p>15</p>
      </span>
      <span>
        <font-awesome-icon icon="star" />
        <p>4.2</p>
      </span>
    </div>
    <div class="agen-foot">
      <button
        onclick="document.getElementById('agen-page').style.display='block'"
      >
        <span>pyramids for travel</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgenComp",
};
</script>

<style lang="scss" scoped>
@import "../assets/_reset.scss";
.agen-comp {
  width: 23%;
  margin-bottom: 50px;
  background-color: #f8f8f8;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  box-shadow: 1px 1px 5px 0 #ccc;
  &:hover {
    .agen-logo img {
      opacity: 1;
    }
  }
  .agen-logo {
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
      transition: all 0.25s ease-in-out;
      opacity: 0.8;
    }
  }
  .agen-specs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-right: 2px solid $main-color;
    border-left: 2px solid $main-color;
    span {
      display: inline-block;
      width: 30%;
      font-size: 22px;
      padding: 10px 5px;
      transition: all 0.25s ease-in-out;
      &:hover{
        svg{
          color: $main-color;
        }
      }
      svg {
        width: 40%;
        font-size: 22px;
        display: inline-block;
        margin-right: 10%;
        transition: all 0.25s ease-in-out;
      }
      p {
        width: 50%;
        text-transform: capitalize;
        display: inline-block;
      }
    }
  }
  .agen-foot {
    button {
      border-radius: 0 0 5px 5px;
      border: none;
      color: #fff;
      width: 100%;
      font-size: 20px;
      padding: 10px;
      cursor: pointer;
      text-align: center;
      text-transform: capitalize;
      background-color: $main-color;
    }
  }
}
</style>
