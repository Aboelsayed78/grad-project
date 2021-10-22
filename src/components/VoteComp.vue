<template>
  <div class="vote-comp">
    <div class="vote-cover">
      <img src="../assets/header-7.jpg" alt="" />
    </div>
    <div class="vote-cont">
      <div class="vote-title">
        <h3>sharm el-sheikh</h3>
        <h4>pyramids for travel</h4>
        <div class="clear"></div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        explicabo officia nulla incidunt aliquid dignissimos distinctio
        perferendis sunt, minima amet...
      </p>
      <div class="vote-stat">
        <span id="like">50</span>
        <span id="unlike">25</span>
      </div>
      <button
        onclick="document.getElementById('vote-page').style.display='block'"
      >
        view vote
      </button>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: "VoteComp",
  mounted: function voteWidth() {
    let x = document.getElementById("like"),
      y = document.getElementById("unlike"),
      xCont = x.innerText, // "50"
      yCont = y.innerText, // "25"
      xInt = parseInt(xCont), // 50
      yInt = parseInt(yCont), // 25
      tot = xInt + yInt, // 75
      xRes = (xInt / tot) * 100, // 66.66666666
      yRes = (yInt / tot) * 100; // 33.33333333
    x.style.width = xRes + "%"; // 66.6%
    y.style.width = yRes + "%"; // 33.3%
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_reset.scss";
.vote-comp {
  height: 250px;
  padding: 5px;
  margin-bottom: 75px;
  background-color: #f5f5f5;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  box-shadow: 1px 1px 5px 0 #ccc;
  &:hover {
    background-color: #eee;
    .vote-cover img {
      opacity: 1;
      color: $main-color;
    }
  }
  .vote-cover {
    float: left;
    height: 100%;
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      transition: all 0.25s ease-in-out;
      opacity: 0.8;
    }
  }
  .vote-cont {
    float: left;
    width: 67%;
    margin: 0 1.5%;
    .vote-title {
      overflow: hidden;
      margin-top: 10px;
      h3,
      h4 {
        float: left;
        text-align: left;
        width: 50%;
        text-transform: capitalize;
      }
      h4 {
        font-size: 25px;
        text-align: right;
      }
    }
    p {
      color: #999;
      margin: 20px 0;
      text-align: left;
      font-size: 18px;
    }
    .vote-stat {
      margin-bottom: 20px;
      overflow: hidden;
      span {
        padding: 5px 15px;
        color: #fff;
        float: left;
        font-size: 20px;
        &#like {
          background-color: #080;
          border-radius: 5px 0 0 5px;
          text-align: left;
        }
        &#unlike {
          background-color: #f00;
          border-radius: 0 5px 5px 0;
          text-align: right;
        }
      }
    }
    button {
      background-color: $main-color;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      text-transform: capitalize;
      padding: 8px 20px;
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>
