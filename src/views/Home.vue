<template>
  <div class="home">
    <div class="features">
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
      <div class="clear"></div>
    </div>
    <div class="seprator">
      <div class="contain">
        <hr />
        <img src="../assets/logo.png" />
      </div>
    </div>
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
    <div class="seprator">
      <div class="contain">
        <hr />
        <img src="../assets/logo.png" />
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
    <div class="seprator">
      <div class="contain">
        <hr />
        <img src="../assets/logo.png" />
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
    <div class="seprator">
      <div class="contain">
        <hr />
        <img src="../assets/logo.png" />
      </div>
    </div>
    <div class="features">
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
      <div class="clear"></div>
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
    margin-bottom: 50px;
    padding: 25px 0;
    .contain {
      display: flex;
      justify-content: space-between;
      .feat {
        float: left;
        width: 28%;
        background-color: #f5f5f5;
        border-radius: 5px;
        transition: all 0.25s ease-in-out;
        box-shadow: 2px 2px 5px 0 #ccc;
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
          color: #666;
          text-align: center;
          span {
            color: $main-color;
          }
        }
      }
    }
  }
  .section {
    margin-bottom: 50px;
    padding: 25px 0;
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
            text-decoration: none;
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
