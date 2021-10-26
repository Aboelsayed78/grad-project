<template>
  <div class="vote-comp">
    <div class="vote-cover">
      <img src="../assets/header-7.jpg" alt="" />
    </div>
    <div class="vote-cont">
      <div class="vote-title">
        <h3>sharm el-sheikh</h3>
        <h4>pyramids for travel</h4>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        explicabo officia nulla incidunt aliquid dignissimos distinctio
        perferendis sunt, minima amet...
      </p>
      <div class="vote-stat">
        <span class="vote-like">
          <font-awesome-icon icon="thumbs-up" />{{like}}
        </span>
        <span class="vote-unlike">
          <font-awesome-icon icon="thumbs-down" />{{unlike}}
        </span>
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
  props: {
    like: String,
    unlike: String,
  },
  mounted: function voteWidth() {
    let voteArr = document.getElementsByClassName("vote-comp");
    for(let i=0; i<=voteArr.length; i++){
      let x = document.getElementsByClassName("vote-like")[i],
        y = document.getElementsByClassName("vote-unlike")[i],
        xInt = parseInt(x.innerText), // 50
        yInt = parseInt(y.innerText), // 25
        tot = xInt + yInt, // 75
        xCon = ((xInt / tot) * 100), // 66.6666
        yCon = ((yInt / tot) * 100); // 33.3333
      x.style.width = xCon + "%"; // 66.6%
      y.style.width = yCon + "%"; // 33.3%
    }  
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
  border: 2px solid transparent;
  &:hover {
    border: 2px solid $main-color;
    .vote-cover img {
      opacity: 1;
      color: $main-color;
    }
    .vote-cont .vote-title h3,
    .vote-cont .vote-title h4 {
      border-bottom: 2px solid $main-color;
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
      display: flex;
      justify-content: space-between;
      h3,
      h4 {
        text-align: left;
        text-transform: capitalize;
        border-bottom: 2px solid transparent;
        transition: all 0.25s ease-in-out;
      }
      h4 {
        font-size: 25px;
        text-align: right;
      }
    }
    p {
      color: #999;
      margin: 15px 0;
      text-align: left;
      font-size: 18px;
    }
    .vote-stat {
      margin-bottom: 15px;
      overflow: hidden;
      span {
        padding: 5px 15px;
        color: #fff;
        float: left;
        font-size: 20px;
        &.vote-like {
          background-color: #080;
          border-radius: 5px 0 0 5px;
          text-align: left;
        }
        &.vote-unlike {
          background-color: #f00;
          border-radius: 0 5px 5px 0;
          text-align: right;
        }
        svg {
          margin-right: 10px;
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
