<template>
  <div class="home">
    <div class="section">
      <div class="contain">
        <div class="sec-cont">
          <h1><span>vote</span> for your favorite trip</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est
            in laborum dolorum adipisci accusantium debitis facere ipsum dolores
            quia corrupti minima vitae animi voluptatum incidunt, placeat totam.
            Maxime, laborum!
          </p>
          <button><router-link to="/votes">take vote</router-link></button>
        </div>
        <div class="sec-img">
          <img src="../assets/header-2.jpg" alt="" />
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="features">
      <div class="overlay">
        <div class="contain">
          <div class="feat">
            <font-awesome-icon icon="vote-yea" />
            <p><span>vote</span> for your favorite trip</p>
          </div>
          <div class="feat">
            <font-awesome-icon icon="plane-departure" />
            <p><span>search</span> for your desired trip</p>
          </div>
          <div class="feat">
            <font-awesome-icon icon="columns" />
            <p><span>compare</span> between traveling agencies</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="contain">
        <div class="sec-img">
          <img src="../assets/header-3.jpg" alt="" />
        </div>
        <div class="sec-cont">
          <h1><span>pick</span> your trip among hundreds</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est
            in laborum dolorum adipisci accusantium debitis facere ipsum dolores
            quia corrupti minima vitae animi voluptatum incidunt, placeat totam.
            Maxime, laborum!
          </p>
          <button><router-link to="/trips">pick a trip</router-link></button>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="holidays">
      <div class="overlay">
        <div class="contain">
          <h1>holiday types</h1>
          <p>explore the world with any type of holiday</p>
          <div class="type">
            <font-awesome-icon icon="ship" />
            <span>cruise</span>
          </div>
          <div class="type">
            <font-awesome-icon icon="archway" />
            <span>treasures</span>
          </div>
          <div class="type">
            <font-awesome-icon icon="heart" />
            <span>honey moon</span>
          </div>
          <div class="type">
            <font-awesome-icon icon="quran" />
            <span>religion</span>
          </div>
          <div class="type">
            <font-awesome-icon icon="tree" />
            <span>safari</span>
          </div>
          <div class="type">
            <font-awesome-icon icon="umbrella-beach" />
            <span>beach</span>
          </div>
          <div class="type">
            <font-awesome-icon icon="briefcase-medical" />
            <span>medical</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="contain">
        <div class="sec-cont">
          <h1><span>compare</span> between many agencies</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est
            in laborum dolorum adipisci accusantium debitis facere ipsum dolores
            quia corrupti minima vitae animi voluptatum incidunt, placeat totam.
            Maxime, laborum!
          </p>
          <button><router-link to="/agencies">find agency</router-link></button>
        </div>
        <div class="sec-img">
          <img src="../assets/header-4.jpg" alt="" />
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="features">
      <div class="overlay">
        <div class="contain">
          <div class="feat">
            <img src="../assets/header-2.jpg" alt="" />
            <p><span>vote</span> for your favorite trip</p>
          </div>
          <div class="feat">
            <img src="../assets/header-3.jpg" alt="" />
            <p><span>search</span> for your desired trip</p>
          </div>
          <div class="feat">
            <img src="../assets/header-4.jpg" alt="" />
            <p><span>compare</span> between traveling agencies</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "../assets/_reset.scss";
.home {
  .features {
    background-image: url("../assets/header-2.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 450px;
    position: relative;
    .overlay{
      .contain {
        display: flex;
        justify-content: space-between;
        .feat {
          width: 28%;
          margin: 100px 0;
          background-color: #f5f5f599;
          border-radius: 5px;
          transition: all 0.25s ease-in-out;
          border: 2px solid transparent;
          &:hover {
            border: 2px solid $main-color;
            svg,
            img {
              opacity: 1;
              color: $main-color;
            }
          }
          svg {
            font-size: 80px;
            display: block;
            margin: 35px auto;
            opacity: 0.8;
            color: $second-color;
            transition: all 0.25s ease-in-out;
          }
          img {
            height: 150px;
            width: 100%;
            opacity: 0.8;
            border-radius: 3px 3px 0 0;
            transition: all 0.25s ease-in-out;
          }
          p {
            display: block;
            font-size: 25px;
            padding: 10px;
            font-family: monospace;
            text-transform: capitalize;
            font-weight: bold;
            color: $second-color;
            text-align: center;
            span {
              color: $main-color;
            }
          }
        }
      }
    }
  }
  .holidays {
    background-image: url(../assets/types.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    height: 450px;
    text-align: center;
    h1 {
      text-transform: uppercase;
      margin-top: 75px;
      color: #fff;
      font-weight: bold;
    }
    p {
      text-transform: capitalize;
      color: #ddd;
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
    }
    .type {
      float: left;
      width: 12%;
      margin: 20px 2.66% 20px 0;
      svg {
        font-size: 120px;
        width: 100%;
        color: #fff;
        padding: 25px;
        border: 2px solid #fff;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
      }
      &:last-of-type {
        margin-right: 0;
      }
      &:hover svg,
      &:hover span {
        color: $main-color;
        border-color: $main-color;
      }
      span {
        color: #ddd;
        font-size: 18px;
        margin-top: 15px;
        text-transform: capitalize;
        display: inline-block;
        transition: all 0.2s ease-in-out;
      }
    }
  }
  .section {
    padding: 50px 0;
    .contain {
      display: flex;
      justify-content: space-between;
      .sec-cont {
        float: left;
        width: 60%;
        text-align: left;
        h1 {
          text-transform: capitalize;
          font-weight: bold;
          color: #666;
          span {
            color: $main-color;
            padding-bottom: 5px;
            border-bottom: 2px solid $main-color;
          }
        }
        p {
          color: #999;
          text-transform: capitalize;
          margin: 20px 0;
          font-size: 20px;
          line-height: 2;
        }
        button {
          background-color: $main-color;
          border: none;
          border-radius: 5px;
          font-size: 20px;
          text-transform: capitalize;
          padding: 8px 20px;
          cursor: pointer;
          box-shadow: 2px 2px 5px 0 #ccc;
          a {
            color: #fff;
          }
        }
      }
      .sec-img {
        float: left;
        width: 35%;
        img {
          width: 100%;
          border-radius: 5px;
          border: 1px solid #ddd;
          box-shadow: 2px 2px 5px 0 #bbb;
        }
      }
    }
  }
}
</style>
