<template>
  <div id="why">
    <h1>Featured Newsletter: A Year Ago This Month!</h1>
    <p></p>
    <br /><br />
    <div class="layoutline">
      <div class="square">
        <div class="square2">
          <div class="align">
            <pastnewsletter id="featured" :linky="kk" :path="imgs[3]" />
          </div>
        </div>
      </div>
    </div>
    <br /><br />
    <br /><br />
    <br /><br />
    <div class="layout">
      <h2 class="year">2022</h2>
      <div class="layoutline">
        <pastnewsletter :linky="kk" :path="imgs[13]" month="feb" />
        <pastnewsletter :linky="kk" :path="imgs[12]" month="jan" />
      </div>
      <h2 class="year">2021</h2>
      <div class="layoutline">
        <pastnewsletter :linky="kk" :path="imgs[11]" month="dec" />
        <pastnewsletter :linky="kk" :path="imgs[10]" month="nov" />
        <pastnewsletter :linky="kk" :path="imgs[9]" month="oct" />
      </div>
      <div class="layoutline">
        <pastnewsletter :linky="kk" :path="imgs[8]" month="sep" />
        <pastnewsletter :linky="kk" :path="imgs[7]" month="jun" />
        <pastnewsletter :linky="kk" :path="imgs[6]" month="may" />
      </div>
      <div class="layoutline">
        <pastnewsletter :linky="kk" :path="imgs[5]" month="apr" />
        <pastnewsletter :linky="kk" :path="imgs[4]" month="mar" />
        <pastnewsletter :linky="kk" :path="imgs[3]" month="feb" />
      </div>
      <div class="layoutline">
        <pastnewsletter :linky="kk" :path="imgs[2]" month="jan" />
      </div>
      <h2 class="year">2020</h2>
      <div class="layoutline">
        <pastnewsletter :linky="kk" :path="imgs[1]" month="dec" />
        <pastnewsletter :linky="kk" :path="imgs[0]" month="nov" />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import pastnewsletter from "../components/pastnewsletter.vue";

export default {
  name: "page2",
  data: () => ({
    imgs: [
      require("../assets/November2020Cover.png"),
      require("../assets/December2020Cover.png"),
      require("../assets/January2021Cover.png"),
      require("../assets/February2021Cover.png"),
      require("../assets/March2021Cover.png"),
      require("../assets/April2021Cover.png"),
      require("../assets/May2021Cover.png"),
      require("../assets/June2021Cover.png"),
      require("../assets/September2021Cover.png"),
      require("../assets/October2021Cover.png"),
      require("../assets/November2021Cover.png"),
      require("../assets/December2021Cover.png"),
      require("../assets/January2022Cover.png"),
      require("../assets/February2022Cover.png"),
    ],
  }),
  components: {
    pastnewsletter,
  },
};
</script>

<style>
#why {
}
h1 {
  font-family: "Dosis", Medium;
  font-weight: 1;
  text-align: center;
  font-size: 30px;
}

.square {
  width: 320.78px;
  height: 400px;
  background-color: #8058DB;
  border-style: solid;
  position: relative;
  left: 25px;
}
.square2 {
  width: 320.78px;
  height: 400px;
  background-color: white;
  border-style: solid;
  position: relative;
  right: 50px;
  top: 50px;
}
.year {
  font-family: "Dosis", Bold;
  margin-left: 5%;
}

.layout {
  display: flex;
  flex-direction: column;
}
.layoutline {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
#button {
  font-family: "Dosis", Medium;
  background-color: #54B0CC;
  font-size: 20px;
  width: 125px;
  height: 45px;
}
.align {
  position: relative;
  left: 9.5px;
  top: 12.5px;
}

@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Dosis:wght@300;400;500;700&family=Raleway:wght@300&display=swap");
</style>
