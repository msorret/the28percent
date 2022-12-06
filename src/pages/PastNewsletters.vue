<template>
  <div id="why">
    <h1>This Month's Newsletter: December 2022</h1>
    <p></p>
    <br /><br />
    <div class="layoutline">
      <div class="square">
        <div class="square2">
          <div class="align">
            <pastnewsletter
              id="featured"
              :linky="newsletters[21]"
              :path="imgs[21]"
              month=""
            />
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
        <pastnewsletter :linky="newsletters[20]" :path="imgs[20]" month="nov" />

        <pastnewsletter :linky="newsletters[19]" :path="imgs[19]" month="oct" />
        <pastnewsletter :linky="newsletters[18]" :path="imgs[18]" month="sep" />
      </div>

      <div class="layoutline">
        <pastnewsletter :linky="newsletters[17]" :path="imgs[17]" month="jun" />

        <pastnewsletter :linky="newsletters[16]" :path="imgs[16]" month="may" />
        <pastnewsletter :linky="newsletters[15]" :path="imgs[15]" month="apr" />
      </div>

      <div class="layoutline">
        <pastnewsletter :linky="newsletters[14]" :path="imgs[14]" month="mar" />

        <pastnewsletter :linky="newsletters[13]" :path="imgs[13]" month="feb" />
        <pastnewsletter :linky="newsletters[12]" :path="imgs[12]" month="jan" />
      </div>
      <h2 class="year">2021</h2>
      <div class="layoutline">
        <pastnewsletter :linky="newsletters[11]" :path="imgs[11]" month="dec" />
        <pastnewsletter :linky="newsletters[10]" :path="imgs[10]" month="nov" />
        <pastnewsletter :linky="newsletters[9]" :path="imgs[9]" month="oct" />
      </div>
      <div class="layoutline">
        <pastnewsletter :linky="newsletters[8]" :path="imgs[8]" month="sep" />
        <pastnewsletter :linky="newsletters[7]" :path="imgs[7]" month="jun" />
        <pastnewsletter :linky="newsletters[6]" :path="imgs[6]" month="may" />
      </div>
      <div class="layoutline">
        <pastnewsletter :linky="newsletters[5]" :path="imgs[5]" month="apr" />
        <pastnewsletter :linky="newsletters[4]" :path="imgs[4]" month="mar" />
        <pastnewsletter :linky="newsletters[3]" :path="imgs[3]" month="feb" />
      </div>
      <div class="layoutline">
        <pastnewsletter :linky="newsletters[2]" :path="imgs[2]" month="jan" />
      </div>
      <h2 class="year">2020</h2>
      <div class="layoutline">
        <pastnewsletter :linky="newsletters[1]" :path="imgs[1]" month="dec" />
        <pastnewsletter :linky="newsletters[0]" :path="imgs[0]" month="nov" />
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
      require("../assets/March2022Cover.png"),
      require("../assets/April2022Cover.png"),
      require("../assets/May2022Cover.png"),
      require("../assets/June2022Cover.png"),
      require("../assets/September2022Cover.png"),
      require("../assets/October2022Cover.png"),
      require("../assets/November2022Cover.png"),
      require("../assets/December2022Cover.png"),
    ],
    newsletters: [
      require("../assets/November2020Newsletter.pdf"),
      require("../assets/December2020Newsletter.pdf"),
      require("../assets/January2021Newsletter.pdf"),
      require("../assets/February2021Newsletter.pdf"),
      require("../assets/March2021Newsletter.pdf"),
      require("../assets/April2021Newsletter.pdf"),
      require("../assets/May2021Newsletter.pdf"),
      require("../assets/June2021Newsletter.pdf"),
      require("../assets/September2021Newsletter.pdf"),
      require("../assets/October2021Newsletter.pdf"),
      require("../assets/November2021Newsletter.pdf"),
      require("../assets/December2021Newsletter.pdf"),
      require("../assets/January2022Newsletter.pdf"),
      require("../assets/February2022Newsletter.pdf"),
      require("../assets/March2022Newsletter.pdf"),
      require("../assets/April2022Newsletter.pdf"),
      require("../assets/May2022Newsletter.pdf"),
      require("../assets/June2022Newsletter.pdf"),
      require("../assets/September2022Newsletter.pdf"),
      require("../assets/October2022Newsletter.pdf"),
      require("../assets/November2022Newsletter.pdf"),
      require("../assets/December2022Newsletter.pdf"),
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
