<template>
  <div class="trip-comp">
    <div class="trip-cover">
      <img src="../assets/header-7.jpg" alt="" />
    </div>
    <div class="trip-cont">
      <div class="trip-title">
        <h3>sharm el-sheikh</h3>
        <h4>pyramids for travel</h4>
      </div>
      <div class="trip-feats">
        <span>
          <font-awesome-icon icon="bus-alt" />
          <p>flight</p>
        </span>
        <span>
          <font-awesome-icon icon="clock" />
          <p>4 nights</p>
        </span>
        <span>
          <font-awesome-icon icon="utensils" />
          <p>full meal</p>
        </span>
        <span>
          <font-awesome-icon :icon="['far', 'calendar']" />
          <p>dec 15</p>
        </span>
        <span>
          <font-awesome-icon icon="building" />
          <p>hotel</p>
        </span>
        <span>
          <font-awesome-icon icon="coins" />
          <p>1200 LE</p>
        </span>
      </div>
      <div class="trip-foot">
        <button class="save">
          <font-awesome-icon icon="heart" />
          <span>save trip</span>
        </button>
        <button
          class="open"
          onclick="document.getElementById('trip-page').style.display='block'"
        >
          <font-awesome-icon icon="external-link-alt" />
          <span>open trip</span>
        </button>
        <button  class="views">
          <font-awesome-icon icon="eye" />
          <span>150 views</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TripComp",
};
</script>

<style lang="scss" scoped>
@import "../assets/_reset.scss";
.trip-comp {
  height: 225px;
  padding: 2px;
  margin-bottom: 50px;
  background-color: #f8f8f8;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  box-shadow: 1px 1px 5px 0 #ccc;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid $main-color;
    .trip-cover img {
      opacity: 1;
      color: $main-color;
    }
    .trip-cont .trip-title h3,
    .trip-cont .trip-title h4 {
      border-bottom: 2px solid $main-color;
    }
  }
  .trip-cover {
    float: left;
    height: 100%;
    width: 35%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      transition: all 0.25s ease-in-out;
      opacity: 0.8;
    }
  }
  .trip-cont {
    float: left;
    width: 62%;
    margin: 0 1.5%;
    .trip-title {
      overflow: hidden;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      h3,
      h4 {
        text-align: left;
        font-size: 25px;
        text-transform: capitalize;
        border-bottom: 2px solid transparent;
        transition: all 0.25s ease-in-out;
      }
      h4 {
        font-size: 20px;
        text-align: right;
        cursor: pointer;
        &:hover {
          color: $main-color;
        }
      }
    }
    .trip-feats {
      margin: 18px auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      span {
        display: inline-block;
        width: 28%;
        font-size: 18px;
        padding: 8px 5px;
        transition: all 0.25s ease-in-out;
        &:hover{
          svg{
            color: $main-color;
          }
        }
        svg {
          width: 20%;
          font-size: 20px;
          display: inline-block;
          margin-right: 5%;
          transition: all 0.25s ease-in-out;
        }
        p {
          width: 75%;
          text-transform: capitalize;
          display: inline-block;
        }
      }
    }
    .trip-foot {
      display: flex;
      justify-content: space-between;
      button {
        border-radius: 5px;
        border: none;
        color: #fff;
        width: 28%;
        font-size: 18px;
        padding: 7px;
        cursor: pointer;
        text-align: center;
        svg {
          margin-right: 15px;
          font-size: 20px;
        }
        span {
          text-transform: capitalize;
        }
        &.save {
          background-color: crimson;
        }
        &.open {
          background-color: $main-color;
        }
        &.views {
          background-color: $second-color;
          cursor: auto;
        }
      }
    }
  }
}
</style>
