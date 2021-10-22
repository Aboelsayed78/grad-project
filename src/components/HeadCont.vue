<template>
  <div class="head-cont">
    <div class="contain">
      <div class="content">
        <h2>{{ msg }}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dolorem veritatis maiores in minima. Id tempora consequatur vitae rem
          eveniet alias aut itaque,
        </p>
        <button>about us</button>
      </div>
      <div class="search">
        <span>
          <img alt="Vue logo" src="../assets/logo.png" />
        </span>
        <label for="city"> where do you wanna go</label>
        <font-awesome-icon icon="map-marker-alt" />
        <input type="text" id="city" name="city" placeholder="city" />
        <label for="date">when do you wanna go</label>
        <input type="date" id="date" name="date" />
        <button>search</button>
      </div>
      <div class="clear"></div>
    </div>
    <font-awesome-icon icon="angle-double-down" />
  </div>
</template>

<script>
export default {
  name: "HeadCont",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/_reset.scss";
.head-cont {
  overflow: hidden;
  margin-top: 170px;
  color: #eee;
  .content {
    float: left;
    width: 55%;
    margin-right: 15%;
    background-color: $trans-color;
    border-radius: 5px;
    border: 2px solid transparent;
    padding: 30px;
    transition: all 0.25s ease-in-out;
    &:hover{
      border: 2px solid $main-color;
    }
    h2 {
      text-transform: capitalize;
      font-size: 40px;
      margin: 20px 0;
    }
    p {
      text-transform: capitalize;
      font-size: 22px;
      line-height: 2;
    }
    button {
      background-color: $main-color;
      border-radius: 5px;
      border: none;
      width: 150px;
      color: #fff;
      font-size: 22px;
      text-transform: capitalize;
      padding: 10px;
      margin-top: 20px;
      cursor: pointer;
      text-align: center;
    }
  }
  .search {
    position: relative;
    float: left;
    width: 30%;
    text-align: center;
    background-color: $trans-color;
    border-radius: 5px;
    border: 2px solid transparent;
    padding: 20px;
    transition: all 0.25s ease-in-out;
    &:hover{
      border: 2px solid $main-color;
    }
    span {
      display: block;
      width: 15%;
      margin: 0 auto 10px auto;
      img {
        width: 100%;
      }
    }
    label {
      text-transform: capitalize;
      display: block;
      width: 100%;
      font-size: 22px;
    }
    svg{
      position: absolute;
      right: 40px;
      top: 135px;
      font-size: 22px;
      color: #000;
    }
    input {
      border-radius: 5px;
      display: block;
      margin: 15px 0;
      width: 100%;
      height: 40px;
      padding: 10px;
      color: #666;
      background-color: #ddd;
      border: 2px solid transparent;
      font-size: 22px;
      text-transform: capitalize;
      transition: all 0.25s ease-in-out;
      &:focus {
        outline: none;
        border: 2px solid $main-color;
        background-color: #fff;
      }
    }
    input[type="date"] {
      text-transform: uppercase;
    }
    button {
      display: block;
      background-color: $main-color;
      border-radius: 5px;
      border: none;
      width: 100%;
      height: 40px;
      color: #fff;
      font-size: 22px;
      text-transform: capitalize;
      padding: 5px;
      cursor: pointer;
      text-align: center;
    }
  }
  svg{
    position: absolute;
    right: 48.5%;
    top: 90%;
    font-size: 50px;
    color: #eeee;
    transition: all 0.25s ease-in-out;
    &:hover{
      color: $main-color;
    }
  }
}
</style>
