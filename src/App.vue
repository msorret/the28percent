<template>
  <div id="app">
    <div class="nav">
      <div class="topnav">
        <div class="left">
          <h1 style="font-size: 40px; width: 250px">28% Newsletter</h1>
          <p style="font-size: 20px; width: 340px" class="tag">
            Women make up only 28% of the STEM work force. This newsletter aims
            to change that.
          </p>
        </div>
        <div class="filler"></div>
        <div class="right">
          <p class="button-label" id="subscribelabel">
            Subscribe to the Newsletter
          </p>
          <button
            style="
              border: none;
              font-size: 35px;
              height: 100px;
              width: 220px;
              font-weight: bold;
            "
            type="button"
            class="buttons"
            id="subscribe"
            v-on:click="overlay1 = true"
          >
            Subscribe!
          </button>
          <p class="button-label" id="submitlabel">
            Submit content to the Newsletter
          </p>
          <button
            style="border: none; font-weight: bold; height: 46px; width: 220px"
            type="button"
            class="buttons"
            id="submit"
            v-on:click="overlay2 = true"
          >
            Submit Content!
          </button>
        </div>
      </div>
      <div class="overlayspls">
        <div class="overlay1" v-if="overlay1 == true">
          <div class="alignright">
            <button class="xbutton" v-on:click="overlay1 = false">X</button>
          </div>
          <br />
          <div class="aligncenter">
            <form>
              <input id="textbox" type="text" placeholder="Email" />
            </form>
          </div>
          <div class="aligncenter">
            <button v-on:click="overlay1 = false" id="subscribe2" type="submit">
              Subscribe!
            </button>
          </div>
        </div>

        <div class="overlay2" v-if="overlay2 == true">
          <div class="alignright">
            <button class="xbutton" v-on:click="overlay2 = false">X</button>
          </div>
          <div class="overlaybox">
            <br />
            <div class="aligncenter">
              <form>
                <input type="text" placeholder="Name" /><br /><br />
                <input type="text" placeholder="Email" /><br /><br />
                <button id="attach">attach files here!</button>
              </form>
            </div>
            <br />
          </div>
          <div class="aligncenter">
            <button v-on:click="overlay2 = false" id="submit2" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div id="bottomnav">
        <router-link class="link" :to="{ path: '/pastnewsletters' }">
          <navbar test="Past Newsletters" />
        </router-link>
        <router-link class="link" :to="{ path: '/home' }">
          <navbar test="Home" />
        </router-link>
        <router-link class="link" :to="{ path: '/events' }">
          <navbar test="Events" />
        </router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
export default {
  name: "app",
  data() {
    return {
      overlay1: false,
      overlay2: false,
      //its not broken but its not what we want. why
    };
  },
  components: {
    navbar,
  },
};
</script>

<style>
#app {
  margin: 60px;
  padding-left: 10%;
  padding-right: 10%;
}

.topnav {
  display: flex;
  flex-direction: row;
  font-family: "Dosis";
}

.right {
  display: flex;
  flex-direction: column;
  font-family: "Dosis";
}

.left {
  display: flex;
  flex-direction: column;
  font-family: "Dosis";
}

#subscribe {
  background-color: #8058DB;
  font-family: "Dosis", Bold;
  font-size: 20px;
  height: 75px;
}

#submit {
  background-color: #54B0CC;
  font-family: "Dosis", Medium;
  font-size: 20px;
}

.buttons {
  margin-right: 0;
  margin-left: auto;
  display: block;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  width: 175px;
}

.button-label {
  text-align: center;
  font-family: "Dosis" Medium;
  font-size: 14px;
  padding: 1px;
}

.link {
  color: black;
  background-color: white;
}

.link:hover {
  color: #CE5EE0;
}

.router-link-active {
  color: #CE5EE0;
}
#bottomnav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.overlay1 {
  display: flex;
  flex-direction: column;
  background-color: #738ee6;
  border-style: solid;
  position: relative;
  justify-content: center;
  padding: 50px;
}

.overlay2 {
  display: flex;
  flex-direction: column;
  background-color: #738ee6;
  border-style: solid;
  justify-content: center;
  padding: 50px;
}
.overlayspls {
  position: absolute;
  z-index: 9000;
  margin-left: auto;
  margin-right: auto;
  left: 50;
  right: 50;
  text-align: center;
}
.xbutton {
  width: 50px;
  height: 50px;
  background-color: #738ee6;
  color: white;
  font-size: 30px;
  position: relative;
  margin-right: -40px;
  margin-top: -40px;
}

#subscribe2 {
  background-color: #69D1B0;
  font-family: "Dosis", Bold;
  font-size: 20px;
  height: 55px;
  display: block;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  width: 275px;
}

#submit2 {
  background-color: #69D1B0;
  font-family: "Dosis", Bold;
  font-size: 20px;
  height: 50px;
  display: block;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  width: 175px;
}

#attach {
  font-family: "Dosis";
  background-color: white;
}

.overlaybox {
  background-color: #69D1B0;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-style: solid;
}

.filler {
  width: 75%;
}

.alignright {
  display: flex;
  justify-content: flex-end;
}
.aligncenter {
  display: flex;
  justify-content: center;
}
#textbox {
  height: 200%;
  position: relative;
  margin-top: -20px;
  margin-bottom: 20px;
}

.home_img {
  border: solid 4px #69D1B0;
  border-radius: 10px;
  width: 400px;
}

.home_par {
  font-size: 20px;
  font-family: "Dosis";
}

.home_hdr {
  font-size: 35px;
  font-family: "Dosis";
  text-align: left;
}

#home_sub-text {
  font-family: "Dosis";
  font-size: 35px;
  width: 400px;
}

#home_sub-button {
  font-family: "Dosis";
  border: none;
  background-color: #54B0CC;
  border-radius: 8px;
  height: 70px;
  width: 400px;
  font-size: 35px;
}

#about-us_par {
  width: 400px;
}

#home_contact-text {
  font-family: "Dosis";
  font-size: 35px;
}

#home_email {
  color: black;
  font-size: 20px;
}

#home_top-pic {
  margin-left: 90px;
}

#home_table {
  margin-left: auto;
  margin-right: auto;
}

#email {
  font-size: 20px;
}

#sub_div {
  margin-top: 120px;
  margin-left: 100px;
}

#home_team-par {
  margin-left: 100px;
  width: 400px;
}

#home_team-hdr {
  margin-left: 100px;
}

#logo_pic {
  border: solid 4px #69D1B0;
  border-radius: 10px;
  margin-bottom: 100px;
  width: 90%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
}

#events-date {
  text-align: left;
  font-family: "Dosis";
  font-size: 35px;
  line-height: 150%;
  font-weight: 500;
}

#events-calendar {
  width: 1050;
  height: 600;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#calendar_days {
  font-family: "Dosis";
}

@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Dosis:wght@300;400;500;700&family=Raleway:wght@300&display=swap");
</style>
