<template>
  <div class="events">
    <div>
      <div>
        <p id="events-date">{{ date }}</p>
      </div>
    </div>

    <iframe
      id="events-calendar"
      src="https://calendar.google.com/calendar/embed?src=the28percent%40gmail.com&ctz=America%2FLos_Angeles"
    >
    </iframe>

    <!-- <div><script type="text/javascript" src="https://stylemygcal.com/widget.js"></script>
<div class="smgc-calendar-placeholder" id="smgc-cal-zVgcXcnENV3ADTi9RBE1"></div> </div>-->
  </div>
</template>

<script>
export default {
  name: "events",
  props: {},
  data() {
    return {
      date: "January 1",
    };
  },
  async created() {
    const response = await fetch(
      "https://api.ipgeolocation.io/timezone?apiKey=ad9305bd71644ea9b42e8b31e6094f05&tz=America/Los_Angeles"
    );
    const data = await response.json();
    this.date = data.date_time_txt.substring(0, data.date_time_txt.length - 15);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap");

.events {
  text-align: center;
  padding: 15px;
}
</style>