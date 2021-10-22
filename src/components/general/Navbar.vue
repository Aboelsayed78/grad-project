<template>
  <div class="navbar">
    <div class="contain">
      <div class="logo">
        <img alt="Vue logo" src="../../assets/logo.png" />
      </div>
      <div class="nav-tabs">
        <div class="web-tabs">
          <ul>
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="/votes">votes</router-link></li>
            <li><router-link to="/trips">trips</router-link></li>
            <li><router-link to="/agencies">agencies</router-link></li>
            <li><router-link to="/contact">contact</router-link></li>
          </ul>
        </div>
        <div class="login-tab">login</div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "../../assets/_reset.scss";
.navbar {
  position: absolute;
  padding: 5px 35px;
  margin: 15px 2.5%;
  width: 95%;
  border-radius: 40px;
  background-color: rgba(140, 140, 140, 0.4);
  z-index: 1;
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
            font-size: 18px;
            text-transform: capitalize;
            a {
              text-decoration: none;
              color: #eee;
              &.router-link-exact-active {
                color: $main-color;
              }
            }
          }
        }
      }
      .login-tab {
        background-color: $main-color;
        width: 13%;
        border-radius: 5px;
        color: #fff;
        font-size: 18px;
        text-transform: capitalize;
        padding: 3px;
        cursor: pointer;
        text-align: center;
      }
    }
  }
}
</style>
