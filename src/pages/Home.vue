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
          <img
            id="home_bottom-pic"
            class="home_img"
            src="../assets/aboutus.jpeg"
          />
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
            Do you want to see your work in the next newsletter? Submit your
            work here!
            <br />
            <br />
            <button class="home_submit" id="home_sub-button">
              Submit Content!
            </button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap");

.home {
  text-align: center;
  padding: 15px;
}
</style>