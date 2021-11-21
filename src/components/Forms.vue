<template>
  <div id="forms" class="modal-forms-page">
    <div class="modal-forms">
      <span
        onclick="document.getElementById('forms').style.display='none'"
        class="close"
        title="Close"
        >&times;
      </span>
      <div class="forms-nav">
        <ul>
          <li class="active" data-value="user-login">login</li>
          <li class="" data-value="user-signup">signup</li>
          <li class="" data-value="agen-login">agency login</li>
          <li class="" data-value="agen-signup">agency signup</li>
        </ul>
      </div>
      <div class="forms-cont">
        <form id="user-login">
          <h2>login</h2>
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button>login</button>
        </form>
        <form id="user-signup">
          <h2>signup</h2>
          <input type="text" name="" id="" placeholder="Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="tel" name="" id="" placeholder="Phone" />
          <input type="password" name="" id="" placeholder="Password" />
          <input
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
          />
          <button>signup</button>
        </form>
        <form id="agen-login">
          <h2>agency login</h2>
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button>login</button>
        </form>
        <form id="agen-signup">
          <h2>agency signup</h2>
          <input type="text" name="" id="" placeholder="Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="tel" name="" id="" placeholder="Phone" />
          <button>send request</button>
        </form>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Forms",
  mounted: function () {
    $(".forms-nav ul li").on("click", function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $("#" + $(".active").data("value"))
        .slideDown()
        .siblings()
        .slideUp();
    });
  },
};
</script>

<style lang="scss">
@import "../assets/_reset.scss";
.modal-forms-page {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #474e5dd9;
  .modal-forms {
    margin: 8% auto;
    width: 75%;
    position: relative;
    height: 400px;
    background-color: #eee;
    .close {
      position: absolute;
      right: 15px;
      top: -15px;
      font-size: 45px;
      font-weight: bold;
      color: #474242;
      &:hover,
      &:focus {
        color: #f44336;
        cursor: pointer;
      }
    }
    .forms-nav {
      float: left;
      width: 30%;
      height: 100%;
      background-color: #35495e;
      ul {
        padding: 0;
        margin: 0;
        li {
          border-bottom: 1px solid #46617c;
          display: block;
          padding: 10px;
          font-size: 22px;
          text-transform: capitalize;
          color: #fff;
          cursor: pointer;
          border-left: 3px solid transparent;
          transition: all 0.25s ease-in-out;
          &:hover {
            color: $main-color;
          }
          &.active {
            color: $main-color;
            border-left: 3px solid $main-color;
            background-color: #eee;
          }
        }
      }
    }
    .forms-cont {
      float: left;
      width: 70%;
      height: 100%;
      border-right: 3px solid $main-color;
      form {
        display: none;
        text-align: center;
        h2 {
          margin: 15px auto;
          display: inline-block;
          text-transform: capitalize;
          font-size: 30px;
          padding-bottom: 5px;
          border-bottom: 2px solid $main-color;  
        }
        input {
          display: block;
          width: 75%;
          margin: 5px auto;
          padding: 10px;
          background-color: #ddd;
          border-radius: 5px;
          border: 2px solid transparent;
          transition: all 0.25s ease-in-out;
          &:focus {
            border: 2px solid $main-color;
          }
        }
        button {
          position: relative;
          background-color: #42b983;
          margin-top: 10px;
          width: 75%;
          border-radius: 5px;
          border: none;
          font-size: 20px;
          color: #fff;
          cursor: pointer;
          text-align: center;
          text-transform: capitalize;
          padding: 10px 15px;
          box-shadow: 2px 2px 5px 0 #ccc;
        }
      }
      #user-login {
        display: block;
      }
    }
  }
}
</style>
