<template>
  <a :href="link" target="_blank">
    <div class="card">
      <div class="nav-left-container">
        <img v-if="img" class="ad-img" :src="img" />
        <img v-else class="ad-img" src="@/assets/company.png" />
      </div>
      <div class="nav-right-container">
        <span class="ad-title">{{ title }}</span>
        <span class="ad-company">{{ company }}</span>
        <span class="ad-location">{{ location }}</span>
        <span v-if="salary" class="ad-salary">{{ salary }}</span>
        <span v-else class="ad-salary-no">{{ "NOT PROVIDED" }}</span>
        <span class="ad-date">{{ dateString(date) }}</span>
      </div>
    </div>
  </a>
</template>

<script>
import formatDateDescription from "../utils";
export default {
  name: "AdCard",
  props: {
    title: String,
    company: String,
    location: String,
    img: String,
    link: String,
    date: String,
    salary: String,
  },

  methods: {
    dateString: function (date) {
      return formatDateDescription(date);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #2c3e50;
  text-decoration: none;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
}
img {
  width: 100px;
  height: 100px;
}
.nav-item {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 12px;
  width: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
.ad-title {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1rem;
}
.ad-company {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;
}
.ad-date {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 0.7rem;
  color: green;
}
.ad-location {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.7rem;
}
.ad-salary-no {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  color: white;
}
.logo {
  font-family: "Lobster", cursive;
  font-size: 16px;
  margin-right: 20px;
}
.nav-left-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 30%;
}
.nav-right-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
  height: 120px;
  width: 70%;
}
.square-btn {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 12px;
  background: black;
  width: 100px;
  height: 40px;
  color: white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
