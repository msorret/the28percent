  <template>
  <div class="goddammit">
    <!--very cool, thank you codesandbox.io for 
    not saving properly the first time-->
    <div class="hover">
      <p color="yes">{{ test }}</p>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    test: { required: true, type: String },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@500&display=swap");

.goddammit {
  font-family: "Dosis", sans-serif;
  height: 66px;
  width: 215.71px;
  font-size: 20px;
  text-align: center;
  margin-top: 70px;
}
.hover:hover {
  color: #CE5EE0;
}
</style>