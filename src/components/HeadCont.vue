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
      </div>
      <div class="search">
        <span>
          <img alt="Vue logo" src="../assets/logo.png" />
        </span>
        <label for="city"> where do you wanna go</label>
        <input type="text" id="city" name="city" placeholder="city" />
        <label for="date">when do you wanna go</label>
        <input type="date" id="date" name="date" />
        <button>search</button>
      </div>
    </div>
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
  margin-top: 175px;
  color: #eee;
  .content {
    float: left;
    width: 55%;
    margin-right: 15%;
    background-color: #9999;
    border-radius: 5px;
    padding: 45px 20px;
    h2 {
      text-transform: capitalize;
      font-size: 40px;
      margin: 30px 0;
    }
    p {
      text-transform: capitalize;
      font-size: 22px;
      line-height: 2;
    }
  }
  .search {
    float: left;
    width: 30%;
    text-align: center;
    background-color: #9999;
    border-radius: 5px;
    padding: 20px;
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
    input {
      border-radius: 5px;
      display: block;
      margin: 15px 0;
      width: 100%;
      height: 35px;
      padding: 5px 10px;
      border: 2px solid transparent;
      font-size: 22px;
      text-transform: capitalize;
      &:focus {
        outline: none;
        border: 2px solid $main-color;
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
      height: 35px;
      color: #fff;
      font-size: 22px;
      text-transform: capitalize;
      padding: 5px;
      cursor: pointer;
      text-align: center;
    }
  }
}
</style>
