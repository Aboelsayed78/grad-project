<template>
  <div class="footer">
    <div class="contain">
      <h3>Site Name</h3>
      <div class="web-tabs">
        <ul>
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/votes">votes</router-link></li>
          <li><router-link to="/trips">trips</router-link></li>
          <li><router-link to="/agencies">agencies</router-link></li>
          <li><router-link to="/contact">contact</router-link></li>
        </ul>
      </div>
      <div class="social-icons">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
        <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
        <font-awesome-icon :icon="['fab', 'whatsapp']" />
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
        <font-awesome-icon :icon="['fab', 'youtube']" />
        <font-awesome-icon :icon="['fab', 'google-play']" />
      </div>
      <span>&lt;mohamed elsayed/&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "../assets/_reset.scss";
.footer {
  background-color: $second-color;
  overflow: hidden;
  text-align: center;
  .contain {
    h3 {
      color: #eee;
      margin-top: 15px;
    }
    .web-tabs {
      margin: 15px 0 0 0;
      ul {
        display: flex;
        justify-content: space-between;
        width: 45%;
        margin: 0 auto;
        li {
          float: left;
          width: 15%;
          text-transform: capitalize;
          font-size: 20px;
          a {
            text-decoration: none;
            color: $main-color;
          }
        }
      }
    }
    .social-icons {
      margin: 15px auto 0 auto;
      display: flex;
      width: 30%;
      justify-content: space-between;
      svg {
        width: 10%;
        font-size: 30px;
        color: #eee;
        transition: all 0.25s ease-in-out;
        cursor: pointer;
        &:hover {
          color: $main-color;
        }
      }
    }
    span {
      margin: 15px auto;
      display: block;
      font-size: 22px;
      text-transform: capitalize;
      color: $main-color;
    }
  }
}
</style>
