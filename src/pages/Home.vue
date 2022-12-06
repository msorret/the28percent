<template>
  <div>
    <img id="logo_pic" src="../assets/the_28_logo.png" />

    <table id="home_table">
      <tr>
        <th class="home_hdr"><p>About Us!</p></th>
      </tr>

      <tr>
        <td class="home_par">
          <p id="about-us_par">
            The 28% Women in STEM newsletter is a monthly publication designed
            to bring light to the gender gap in STEM, build community in this
            space, and showcase the work of some really cool women. The
            newsletter features events, programs, articles, interviews, art, and
            more!
          </p>
        </td>

        <td>
          <img
            id="home_top-pic"
            class="home_img"
            src="../assets/aboutus.jpeg"
          />
        </td>
      </tr>

      <br />
      <br />
      <br />
      <br />

      <tr>
        <th />
        <th class="home_hdr"><p id="home_team-hdr">The Team!</p></th>
      </tr>

      <tr>
        <td>
          <img id="home_bottom-pic" class="home_img" src="../assets/team.jpg" />
        </td>
        <td class="home_par">
          <p id="home_team-par">
            Brought together in the fall of 2020 at Pasadena High School, the
            newsletter team is made up of writers, artists, photographers,
            designers, and above all, women in STEM. We welcome anyone
            interested to attend a meeting. Submit to the newsletter, or join
            the team!
          </p>
        </td>
      </tr>

      <br />
      <br />

      <tr>
        <td id="home_contact-text">
          Contact out advisor!
          <br />
          <p id="email">
            Email:
            <a
              id="home_email"
              class="home_contact"
              href="mailto: orret.deborah@pusd.us"
            >
              orret.deborah@pusd.us</a
            >
          </p>
        </td>

        <td id="home_sub-text">
          <div id="sub_div">
            Do you want to see your work in the next newsletter? Email Ms.
            Orret!
            <br />
            <br />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
    

<script>
import App from "/App.vue";

export default {
  name: "home",
  props: {},
  data() {
    return {
      overlay3: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap");

.home {
  text-align: center;
  padding: 15px;
}

.overlay2 {
  display: flex;
  flex-direction: column;
  background-color: #738ee6;
  border-style: solid;
  justify-content: center;
  padding: 50px;
}

#submit3 {
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

.alignright {
  display: flex;
  justify-content: flex-end;
}
.aligncenter {
  display: flex;
  justify-content: center;
}

#attach3 {
  font-family: "Dosis";
  background-color: white;
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

.overlayspls {
  position: absolute;
  z-index: 9000;
  margin-left: auto;
  margin-right: auto;
  left: 50;
  right: 50;
  text-align: center;
}
</style>