<template>
  <div class="trips">
    <div class="contain">
      <div class="filter">
        <form action="">
          <label for="">
            city<font-awesome-icon icon="map-marker-alt" />
          </label>
          <input type="text" name="" id="" placeholder="city" />

          <label for="">
            transportation<font-awesome-icon icon="bus-alt" />
          </label>
          <select name="" id="">
            <option value="">all</option>
            <option value="">flight</option>
            <option value="">sea</option>
            <option value="">bus</option>
          </select>

          <label for=""> food<font-awesome-icon icon="utensils" /> </label>
          <select name="" id="">
            <option value="">any</option>
            <option value="">full</option>
            <option value="">half</option>
            <option value="">none</option>
          </select>

          <label for=""> residence<font-awesome-icon icon="building" /> </label>
          <select name="" id="">
            <option value="">any</option>
            <option value="">hotel</option>
            <option value="">apartment</option>
            <option value="">shaleh</option>
          </select>

          <label for=""> nights<font-awesome-icon icon="clock" /> </label>
          <input type="number" name="" id="" placeholder="nights" />

          <label for=""> price<font-awesome-icon icon="coins" /> </label>
          <input type="number" name="" id="min" placeholder="min" />
          <input type="number" name="" id="max" placeholder="max" />

          <label for="">
            date<font-awesome-icon :icon="['far', 'calendar']" />
          </label>
          <input type="date" name="" id="" />

          <label for=""> Tags<font-awesome-icon icon="tags" /></label>
          <div class="tags-cont">
            <span class="tag">cruise</span>
            <span class="tag">treasures</span>
            <span class="tag">honey moon</span>
            <span class="tag">religion</span>
            <span class="tag">safari</span>
            <span class="tag">beach</span>
            <span class="tag">medical</span>
          </div>
          <button>filter<font-awesome-icon icon="filter" /></button>
        </form>
      </div>
      <div class="trips-cont">
        <TripComp />
        <TripComp />
        <TripComp />
        <TripComp />
        <TripPage />
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import TripComp from "../components/TripComp.vue";
import TripPage from "../components/TripPage.vue";
export default {
  name: "Trips",
  components: {
    TripComp,
    TripPage,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_reset.scss";
.trips {
  margin-top: 50px;
  .filter {
    float: left;
    width: 18%;
    margin-right: 4%;
    form {
      label,
      input,
      select,
      button {
        width: 100%;
        display: block;
        height: 40px;
        font-size: 20px;
        font-weight: bold;
        padding: 5px;
      }
      label {
        padding: 5px 7px;
        height: auto;
        position: relative;
        text-transform: capitalize;
        transition: all 0.25s ease-in-out;
        &:hover {
          color: $main-color;
        }
        svg {
          top: 10px;
          right: 10px;
          position: absolute;
        }
      }
      input,
      select {
        border-radius: 5px;
        margin-bottom: 15px;
        font-weight: normal;
        font-size: 18px;
        color: #666;
        background-color: #f8f8f8;
        border: 2px solid transparent;
        box-shadow: 1px 1px 3px 0 #ccc;
        transition: all 0.25s ease-in-out;
        &:focus {
          border: 2px solid $main-color;
        }
        &#min {
          margin-bottom: 5px;
        }
      }
      input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
      }
      .tags-cont {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 15px;
        .tag {
          text-transform: capitalize;
          padding: 0 6px;
          border: 2px solid $main-color;
          border-radius: 5px;
          margin: 2px 5px;
          font-size: 18px;
          transition: all 0.25s ease-in-out;
          cursor: pointer;
          &:hover {
            color: #fff;
            background-color: $main-color;
          }
        }
      }
      button {
        position: relative;
        background-color: #42b983;
        border-radius: 5px;
        border: none;
        color: #fff;
        cursor: pointer;
        text-align: left;
        text-transform: capitalize;
        padding: 5px 15px;
        box-shadow: 2px 2px 5px 0 #ccc;
        svg {
          top: 10px;
          right: 15px;
          position: absolute;
        }
      }
    }
  }
  .trips-cont {
    float: left;
    width: 78%;
  }
}
</style>
