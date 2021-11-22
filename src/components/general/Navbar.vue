<template>
  <div id="navbar" class="navbar">
    <div class="contain">
      <div class="logo">
        <img alt="Vue logo" src="../../assets/logo.png" />
      </div>
      <div class="nav-tabs">
        <div class="web-tabs">
          <ul>
            <li>
              <router-link to="/">home</router-link>
            </li>
            <li>
              <router-link to="/votes">votes</router-link>
            </li>
            <li>
              <router-link to="/trips">trips</router-link>
            </li>
            <li>
              <router-link to="/agencies">agencies</router-link>
            </li>
            <li>
              <router-link to="/contact">contact</router-link>
            </li>
          </ul>
        </div>
        <div class="login-tab">
          <button
            onclick="document.getElementById('forms').style.display='block'"
          >
            login
          </button>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted: function () {
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").classList.add("trans");
      } else {
        document.getElementById("navbar").classList.remove("trans");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/_reset.scss";
.navbar {
  position: fixed;
  padding: 5px 35px;
  margin: 15px 2.5%;
  width: 95%;
  border-radius: 40px;
  background-color: $trans-color;
  z-index: 1;
  border: 2px solid transparent;
  transition: all 0.25s ease-in-out;
  &:hover {
    border: 2px solid $main-color;
  }
  &.trans {
    background-color: $second-color;
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 0;
    .contain {
      .nav-tabs {
        .login-tab {
          button {
            padding: 5px;
          }
        }
      }
    }
    &:hover{
      border: 2px solid transparent;
    }
  }
  .contain {
    .logo {
      float: left;
      width: 45%;
      margin-right: 5%;
      text-align: left;
      img {
        width: 40px;
      }
    }
    .nav-tabs {
      float: left;
      border: none;
      width: 50%;
      & > div {
        display: inline-block;
      }
      .web-tabs {
        width: 82%;
        margin-right: 5%;
        ul {
          li {
            display: inline-block;
            width: 20%;
            padding: 6px 2.5px;
            font-size: 20px;
            text-align: center;
            text-transform: capitalize;
            a {
              color: #eee;
              &.router-link-exact-active {
                color: $main-color;
              }
            }
          }
        }
      }
      .login-tab {
        width: 13%;
        button {
          background-color: $main-color;
          border-radius: 5px;
          border: none;
          width: 100%;
          text-transform: capitalize;
          padding: 8px;
          cursor: pointer;
          text-align: center;
          color: #fff;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
