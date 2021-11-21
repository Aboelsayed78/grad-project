<template>
  <div id="agen-page" class="modal-agen-page">
    <div class="modal-agen">
      <span
        onclick="document.getElementById('agen-page').style.display='none'"
        class="close"
        title="Close"
        >&times;
      </span>
      <div class="agen-content">
        <div class="side-panel">
          <div class="agen-logo">
            <img src="../assets/agency-1.jpg" alt="" />
          </div>
          <h2>pyramids for travel</h2>
          <div class="agen-info">
            <div class="agen-stat">
              <span>
                <font-awesome-icon icon="plane-departure" />
                <p>15</p>
              </span>
              <span>
                <font-awesome-icon icon="star" />
                <p>4.2</p>
              </span>
            </div>
            <div class="agen-btn">
              <button class="follow">
                <font-awesome-icon icon="plus" />
                follow <span>75</span>
              </button>
            </div>
          </div>
          <div class="agen-tabs">
            <ul>
              <li class="active" data-id="trips"><span>trips</span></li>
              <li class="" data-id="votes"><span>votes</span></li>
              <li class="" data-id="about"><span>about</span></li>
            </ul>
          </div>
        </div>
        <div class="main-panel">
          <div id="trips" class="agen-trips">
            <h2>Trips</h2>
            <TripComp />
            <TripComp />
            <TripComp />
            <TripComp />
            <TripPage />
          </div>
          <div id="votes" class="agen-votes">
            <h2>Votes</h2>
            <VoteComp like="86" unlike="23" />
            <VoteComp like="62" unlike="33" />
            <VotePage />
          </div>
          <div id="about" class="agen-about">
            <div class="agen-bio">
              <h2>about agency</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt dolores quidem corporis aliquam delectus ipsam,
                assumenda excepturi repudiandae? Quo doloremque numquam magnam
                eos inventore animi autem odit quidem! Mollitia, ducimus Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                dolores quidem corporis aliquam delectus ipsam, assumenda
                excepturi repudiandae? Quo doloremque numquam magnam eos
                inventore animi autem odit quidem! Mollitia, ducimus?
              </p>
            </div>
            <div class="agen-review">
              <h2>rate and review</h2>
              <div class="rating"></div>
              <div class="review">
                <textarea name="" id="" cols="30" rows="10">
write your review...</textarea
                >
                <button>
                  <font-awesome-icon :icon="['fab', 'telegram-plane']" />
                  send review
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TripComp from "../components/TripComp.vue";
import TripPage from "../components/TripPage.vue";
import VoteComp from "../components/VoteComp.vue";
import VotePage from "../components/VotePage.vue";
import $ from "jquery";
export default {
  name: "AgenPage",
  components: {
    TripComp,
    TripPage,
    VoteComp,
    VotePage,
  },
  mounted: function () {
    $(".agen-tabs ul li").on("click", function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $("#" + $(this).data("id"))
        .slideDown()
        .siblings()
        .slideUp();
    });
  },
};
</script>

<style lang="scss">
@import "../assets/_reset.scss";
.modal-agen-page {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #474e5dd9;
  .modal-agen {
    background-color: #f8f8f8;
    margin: 2% auto;
    width: 90%;
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
    .agen-content {
      overflow: hidden;
      border-radius: 5px;
      height: 583px;
      .side-panel {
        float: left;
        width: 25%;
        height: 100%;
        background-color: $second-color;
        .agen-logo {
          text-align: center;
          img {
            width: 75%;
            margin: 20px auto;
            border-radius: 50%;
          }
        }
        h2 {
          margin: 10px auto;
          text-align: center;
          font-size: 22px;
          color: #fff;
          text-transform: capitalize;
        }
        .agen-info {
          .agen-stat {
            display: flex;
            justify-content: center;
            span {
              display: inline-block;
              width: 35%;
              font-size: 22px;
              color: #fff;
              padding: 10px 5px;
              transition: all 0.25s ease-in-out;
              &:hover {
                svg {
                  color: $main-color;
                }
              }
              svg {
                width: 40%;
                font-size: 22px;
                display: inline-block;
                margin-right: 5%;
                transition: all 0.25s ease-in-out;
              }
              p {
                width: 50%;
                display: inline-block;
                margin: 0;
              }
            }
          }
          .agen-btn {
            button {
              border: none;
              display: block;
              margin: 10px auto;
              font-size: 18px;
              text-transform: capitalize;
              padding: 10px 5px;
              cursor: pointer;
              color: #fff;
              width: 55%;
              background-color: crimson;
              border-radius: 5px;
              span {
                background-color: #b71010;
                border-radius: 5px;
                padding: 3px;
                margin-left: 10px;
              }
              svg {
                margin-right: 10px;
              }
            }
          }
        }
        .agen-tabs {
          margin: 20px 0;
          ul {
            padding: 0;
            margin: 0;
            li {
              text-align: center;
              border-left: 3px solid transparent;
              border-bottom: 1px solid #46617c;
              span {
                display: block;
                padding: 5px 0;
                font-size: 25px;
                text-transform: capitalize;
                color: #fff;
                cursor: pointer;
                transition: all 0.25s ease-in-out;
                &:hover {
                  color: $main-color;
                }
              }
              &.active {
                border-left: 3px solid $main-color;
                span {
                  color: $main-color;
                  background-color: #f8f8f8;
                }
              }
            }
          }
        }
      }
      .main-panel {
        float: left;
        width: 75%;
        height: 100%;
        padding: 10px;
        overflow: auto;
        .agen-trips {
          h2 {
            text-align: center;
            text-transform: capitalize;
            font-size: 25px;
            padding: 5px 0;
            display: inline-block;
            border-bottom: 2px solid $main-color;
          }
          .trip-comp {
            margin-bottom: 30px;
          }
        }
        .agen-votes {
          display: none;
          h2 {
            text-align: center;
            text-transform: capitalize;
            font-size: 25px;
            padding: 5px 0;
            display: inline-block;
            border-bottom: 2px solid $main-color;
          }
          .vote-comp {
            margin-bottom: 30px;
            height: 200px;
            .vote-cover {
              width: 35%;
            }
            .vote-cont {
              width: 62%;
              p {
                display: none;
              }
              .vote-stat {
                margin: 25px 0;
              }
            }
          }
        }
        .agen-about {
          display: none;
          .agen-bio {
            border-bottom: 1px solid #ddd;
            padding: 5px;
            margin-bottom: 20px;
            h2 {
              text-transform: capitalize;
              font-size: 25px;
              padding: 5px 0;
              display: inline-block;
              border-bottom: 2px solid $main-color;
            }
            p {
              font-size: 18px;
              margin: 10px;
            }
          }
          .agen-review {
            padding: 5px;
            h2 {
              text-transform: capitalize;
              font-size: 25px;
              padding: 5px 0;
              display: inline-block;
              border-bottom: 2px solid $main-color;
            }
            // .rating {
            // }
            .review {
              padding: 5px;
              text-align: right;
              textarea {
                overflow: auto;
                display: block;
                width: 100%;
                border: 2px solid #bbb;
                border-radius: 5px;
                transition: all 0.25s ease-in-out;
                font-size: 20px;
                height: 150px;
                margin: 15px 0;
                padding: 5px;
                &:focus {
                  outline: none;
                  border-color: $main-color;
                }
              }
              button {
                border-radius: 5px;
                text-transform: capitalize;
                border: none;
                color: #fff;
                width: 150px;
                font-size: 18px;
                padding: 8px;
                cursor: pointer;
                text-align: center;
                background-color: $main-color;
                box-shadow: 1px 1px 5px 0 #ccc;
                svg {
                  font-size: 20px;
                  margin-right: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
