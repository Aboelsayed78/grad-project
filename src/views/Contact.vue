<template>
  <div class="contact">
    <div class="contain">
      <h2>contact us</h2>
      <form>
        <input type="text" name="" id="" placeholder="Name" />
        <input type="email" name="" id="" placeholder="Email" />
        <input type="tel" name="" id="" placeholder="Phone" />
        <textarea name="" id="" cols="30" rows="6">Write Your Message</textarea>
        <button>send request</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss">
@import "../assets/_reset.scss";
.contact {
  margin: 50px 0;
  .contain {
    text-align: center;
    h2 {
      text-transform: capitalize;
      font-size: 40px;
      padding-bottom: 5px;
      margin-bottom: 20px;
      display: inline-block;
      border-bottom: 2px solid $main-color;
    }
    form{
      width: 65%;
      margin: 20px auto;
      padding: 25px 0;
      background-color: $second-color;
      border-radius: 5px;
      box-shadow: 3px 3px 5px 0 #999;
      input, textarea {
        display: block;
        width: 80%;
        margin: 10px auto;
        padding: 10px;
        background-color: #fff;
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
        width: 80%;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        text-align: center;
        text-transform: capitalize;
        padding: 10px 15px;
      }
    }
  }
}
</style>
