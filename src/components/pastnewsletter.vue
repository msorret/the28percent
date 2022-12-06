<template>
  <div class="card">
    <div class="pars">
      <p id="newsletter-month">{{ month }}</p>
      <a :href="linky" download>
        <img id="newsletter-image" v-bind:src="path" />
      </a>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    path: { required: true, type: String },
    month: { required: true, type: String },
    linky: { required: true, type: String },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Dosis:wght@500&family=Raleway:wght@300&display=swap");

#newsletter-image {
  width: 300.78px;
  height: 340px;
  text-align: center;
}

#newsletter-month {
  font-size: 20px;
  font-family: "Dosis";
  text-align: center;
}
</style>