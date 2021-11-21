<template>
  <div id="trip-page" class="modal-trip-page">
    <div class="modal-trip">
      <span
        onclick="document.getElementById('trip-page').style.display='none'"
        class="close"
        title="Close"
        >&times;
      </span>
      <div class="trip-content">
        <div class="slider-contain">
          <div id="slider-num" class="slider-num"></div>
          <img src="../assets/header-1.jpg" alt="" />
          <img src="../assets/header-2.jpg" alt="" />
          <img src="../assets/header-3.jpg" alt="" />
          <img src="../assets/header-4.jpg" alt="" />
          <img src="../assets/header-5.jpg" alt="" />
          <img src="../assets/header-7.jpg" alt="" />
          <img src="../assets/header-8.jpg" alt="" />
        </div>
        <div class="slider-controls">
          <span id="prev" class="prev">Previous</span>
          <span id="indicators" class="indicators"></span>
          <span id="next" class="next">Next</span>
        </div>
        <div class="title-row">
          <h2>sharm el-sheikh</h2>
          <h3>pyramids for travel</h3>
        </div>
        <div class="descripe-row">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum
            amet commodi, ab dicta porro consectetur dignissimos nostrum quo
            magnam illum eius necessitatibus nemo modi quae eaque rerum veniam
            dolorem lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            dolorum amet commodi, ab dicta porro consectetur dignissimos nostrum
            quo magnam illum eius necessitatibus nemo modi quae eaque rerum
            veniam dolorem.
          </p>
        </div>
        <div class="data-row">
          <label for="">
            transportation<font-awesome-icon icon="bus-alt" />
          </label>
          <p>flight</p>
        </div>
        <div class="data-row">
          <label for=""> food<font-awesome-icon icon="utensils" /> </label>
          <p>full meal</p>
        </div>
        <div class="data-row">
          <label for=""> residence<font-awesome-icon icon="building" /> </label>
          <p>hotel</p>
        </div>
        <div class="data-row">
          <label for=""> nights<font-awesome-icon icon="clock" /> </label>
          <p>4 nights</p>
        </div>
        <div class="data-row">
          <label for="">
            date<font-awesome-icon :icon="['far', 'calendar']" />
          </label>
          <p>Dec 15</p>
        </div>
        <div class="data-row">
          <label for=""> price<font-awesome-icon icon="coins" /> </label>
          <p>1200 le</p>
        </div>
        <div class="data-row">
          <label for=""> tags<font-awesome-icon icon="tags" /> </label>
          <span class="tag">beach</span>
          <span class="tag">honey moon</span>
          <span class="tag">safari</span>
        </div>
        <div class="data-trip">
          <button class="save">
            <font-awesome-icon icon="heart" />
            <span>save trip</span>
          </button>
          <button class="open">
            <font-awesome-icon icon="external-link-alt" />
            <span>open trip</span>
          </button>
          <button class="views">
            <font-awesome-icon icon="eye" />
            <span>150 views</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TripPage",
  mounted: function () {
    // getting all the images of the slider
    let sliderImages = Array.from(
      document.querySelectorAll(".slider-contain img")
    );
    //getting the number of images
    let sliderControls = sliderImages.length;
    // slide number element
    let slideNum = document.getElementById("slider-num");
    // current slide
    let currentSlide = 1;
    // creating the list of indicators
    let indicatorsUL = document.createElement("ul");
    indicatorsUL.setAttribute("id", "indicators-ul");
    // adding ul to slider
    let mySpan = document.getElementById("indicators");
    mySpan.appendChild(indicatorsUL);
    // creating the li elements
    for (let i = 1; i <= sliderControls; i++) {
      let indicator = document.createElement("li");
      indicator.setAttribute("data-index", i);
      indicatorsUL.appendChild(indicator);
      // indicator.style.width = `${
      //   indicatorsUL.clientWidth / sliderControls - 10
      // }px`;
      indicator.innerText = i;
    }
    // getting all the indicators of the ul
    let indicatorsArr = Array.from(
      document.querySelectorAll("#indicators-ul li")
    );
    // linking the indicators with images
    for (let i = 0; i < indicatorsArr.length; i++) {
      indicatorsArr[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        checker();
      };
    }
    // previous, next button
    let prevBtn = document.getElementById("prev");
    let nextBtn = document.getElementById("next");
    // handling clicking buttons
    let prevSlide = () => {
      if (prevBtn.classList.contains("disabled")) {
        return false;
      } else {
        currentSlide--;
        checker();
      }
    };
    let nextSlide = () => {
      if (nextBtn.classList.contains("disabled")) {
        return false;
      } else {
        currentSlide++;
        checker();
      }
    };
    prevBtn.onclick = prevSlide;
    nextBtn.onclick = nextSlide;
    // creating checker function
    let checker = () => {
      if (currentSlide >= sliderControls && currentSlide > 1) {
        prevBtn.classList.remove("disabled");
        nextBtn.classList.add("disabled");
      } else if (currentSlide <= 1 && currentSlide < sliderControls) {
        nextBtn.classList.remove("disabled");
        prevBtn.classList.add("disabled");
      } else {
        nextBtn.classList.remove("disabled");
        prevBtn.classList.remove("disabled");
      }
      //removing class active from images and indicators
      let removeClasses = () => {
        sliderImages.forEach((image) => {
          image.classList.remove("active");
        });
        indicatorsArr.forEach((indic) => {
          indic.classList.remove("active");
        });
      };
      removeClasses();
      slideNum.innerText = `${currentSlide} of ${sliderControls}`;
      sliderImages[currentSlide - 1].classList.add("active");
      indicatorsUL.children[currentSlide - 1].classList.add("active");
    };
    checker();
  },
};
</script>

<style lang="scss">
@import "../assets/_reset.scss";
.modal-trip-page {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #474e5dd9;
  .modal-trip {
    background-color: #f8f8f8;
    margin: 2% auto;
    width: 80%;
    border: none;
    border-radius: 5px;
    position: relative;
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
    .trip-content {
      overflow: hidden;
      .slider-contain {
        margin: 25px auto;
        width: 80%;
        height: 500px;
        position: relative;
        border: 2px solid $main-color;
        border-radius: 5px;
        box-shadow: 1px 1px 5px 0 #888;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 3px;
          transition: opacity 1s;
          z-index: 1;
          opacity: 0;
          &.active {
            opacity: 1;
          }
        }
        .slider-num {
          position: absolute;
          left: 5px;
          top: 5px;
          background-color: rgba(0, 0, 0, 0.6);
          color: aliceblue;
          padding: 4px 8px;
          font-weight: bold;
          font-size: 16px;
          z-index: 2;
          border-radius: 5px;
        }
      }
      .slider-controls {
        width: 80%;
        margin: 0 auto 20px auto;
        overflow: hidden;
        .next,
        .prev {
          width: 20%;
          background-color: $main-color;
          text-align: center;
          color: aliceblue;
          cursor: pointer;
          padding: 5px;
          font-weight: bold;
          font-size: 16px;
          border-radius: 5px;
          border: 2px solid $main-color;
          user-select: none;
          transition: all 0.2s;
        }
        .prev {
          float: left;
          &.disabled {
            background-color: rgba(4, 117, 74, 0.5);
            border: 2px solid transparent;
            color: aliceblue;
            cursor: no-drop;
          }
        }
        .next {
          float: right;
          &.disabled {
            background-color: rgba(4, 117, 74, 0.5);
            border: 2px solid transparent;
            color: aliceblue;
            cursor: no-drop;
          }
        }
        span.indicators {
          width: 60%;
          overflow: hidden;
          float: left;
          ul {
            width: 100%;
            list-style: none;
            overflow: hidden;
            text-align: center;
            padding: 0;
            margin: 0;
            li {
              display: inline-block;
              background-color: #ddd;
              color: #333;
              width: 13%;
              font-weight: bold;
              text-align: center;
              padding: 7px 8px;
              margin: 0 2px;
              border-radius: 5px;
              cursor: pointer;
              transition: all 0.2s;
              &.active,
              &:hover {
                background-color: $main-color;
                color: aliceblue;
              }
            }
          }
        }
      }
      .data-row,
      .descripe-row {
        padding: 10px 10%;
        color: #666;
        border-bottom: 1px solid #eee;
        border-top: 1px solid transparent;
        transition: all 0.25s ease-in-out;
        &:hover {
          background-color: #eee;
          border-bottom: 1px solid $main-color;
          border-top: 1px solid $main-color;
          label {
            color: $main-color;
          }
        }
        label,
        p {
          display: inline-block;
          width: 20%;
          margin-right: 10%;
          font-size: 18px;
          text-transform: capitalize;
          text-align: left;
          transition: all 0.25s ease-in-out;
        }
        label {
          svg {
            float: left;
            margin-right: 15px;
            margin-top: 4px;
            width: 17px;
          }
        }
        p {
          width: 70%;
          margin: 0;
        }
        span.tag {
          text-transform: capitalize;
          padding: 3px 8px;
          border: 1px solid $main-color;
          border-radius: 5px;
          margin-right: 5px;
          transition: all 0.25s ease-in-out;
          &:hover {
            color: #fff;
            background-color: $main-color;
          }
        }
      }
      .descripe-row {
        p {
          width: 100%;
        }
      }
      .title-row {
        padding: 10px 10%;
        color: #666;
        overflow: hidden;
        margin-top: 10px;
        border-bottom: none;
        display: flex;
        justify-content: space-between;
        h2,
        h3 {
          text-align: left;
          font-size: 30px;
          text-transform: capitalize;
          border-bottom: 2px solid $main-color;
          transition: all 0.25s ease-in-out;
        }
        h3 {
          font-size: 25px;
          text-align: right;
          cursor: pointer;
          &:hover {
            color: $main-color;
          }
        }
      }
      .data-trip {
        text-align: center;
        margin: 10px 0;
        button {
          margin: 15px;
          border: none;
          border-radius: 5px;
          font-size: 20px;
          text-transform: capitalize;
          padding: 10px 15px;
          cursor: pointer;
          color: #fff;
          width: 175px;
          svg {
            margin-right: 15px;
            font-size: 20px;
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
}
</style>
