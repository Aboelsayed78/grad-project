<template>
  <div id="vote-page" class="modal-vote-page">
    <div class="modal-vote">
      <span
        onclick="document.getElementById('vote-page').style.display='none'"
        class="close"
        title="Close"
        >&times;
      </span>
      <div class="vote-content">
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
        <div class="data-row">
          <label>agency</label>
          <p>pyramid for travel</p>
        </div>
        <div class="data-row">
          <label>destination</label>
          <p>sharm el-sheikh</p>
        </div>
        <div class="data-row">
          <label>description</label>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum
            amet commodi, ab dicta porro consectetur dignissimos nostrum quo
            magnam illum eius necessitatibus nemo modi quae eaque rerum veniam
            dolorem.
          </p>
        </div>
        <div class="data-row">
          <label>exp price</label>
          <p>1250 - 1400 le</p>
        </div>
        <div class="data-vote">
          <button class="like">
            <font-awesome-icon icon="thumbs-up" />like
          </button>
          <button class="unlike">
            <font-awesome-icon icon="thumbs-down" />unlike
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VotePage",
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
.modal-vote-page {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #474e5dd9;
  .modal-vote {
    background-color: #eee;
    margin: 3% auto;
    width: 70%;
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
    .vote-content {
      overflow: hidden;
      .slider-contain {
        margin: 20px auto;
        width: 80%;
        height: 350px;
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
      .data-row {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        label,
        p {
          display: inline-block;
          width: 15%;
          margin: 0 5%;
          font-size: 20px;
          text-transform: capitalize;
          font-weight: bold;
          color: #666;
          text-align: left;
        }
        p {
          width: 75%;
          margin: 0;
        }
      }
      .data-vote {
        text-align: center;
        button {
          margin: 15px;
          border: none;
          border-radius: 5px;
          font-size: 20px;
          text-transform: capitalize;
          padding: 8px 20px;
          cursor: pointer;
          color: #fff;
          width: 150px;
          &.like {
            background-color: #080;
          }
          &.unlike {
            background-color: #f00;
          }
          svg {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
