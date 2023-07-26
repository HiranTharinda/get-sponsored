<template>
  <div class="nav-wrapper">
    <div class="nav">
      <div class="nav-right-container">
        <router-link to="/why"> <span class="nav-item-two">Why</span></router-link>
        <router-link to="/"
          ><span class="nav-item"
            ><span class="logo"><span class="logo-uk">UK</span>Sponsored</span></span
          ></router-link
        >
        <router-link to="/companies"> <span class="nav-item-one">Companies</span></router-link>
      </div>

      <div class="nav-left-container">
        <div v-if="isHomeRoute" class="filters">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            role="img"
            class="search-icon"
            @click="handleSearch"
            style="cursor: pointer"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            v-model="searchText"
            @keyup.enter="handleSearch"
          />
        </div>
      </div>
    </div>
    <div class="banner-wrap">
      <div class="left-body">
        <span v-if="isHomeRoute" class="f_count">
          <CounterDigit :value="fTotal" :isHome="isHomeRoute" />
        </span>
        <span v-if="isCompaniesRoute" class="f_count">
          <CounterDigit :value="companiesCount" :isHome="isHomeRoute" />
        </span>
      </div>
      <div v-if="isHomeRoute" class="banner">
        <span class="banner-title">Sponsored!</span>
        <span class="banner-sub"
          >We strive to assist with UK job opportunities that offer sponsorships, helping you
          elevate your career with ease. 🇬🇧💼🚀</span
        >
      </div>

      <div v-if="isWhyRoute" class="banner-why">
        <span class="banner-title-why">Why</span>
        <span class="banner-title-why">Do</span>
        <span class="banner-title-why">This</span>
      </div>
      <div v-if="isCompaniesRoute" class="banner">
        <span class="banner-title">Companies</span>
        <span class="banner-sub"
          >You've got a dream company in mind? 🌟💼 Time to play detective!🕵️‍♂️</span
        >
      </div>
      <div class="right-body"></div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import CounterDigit from './CounterDigit.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'NavBar',
  components: {
    CounterDigit
  },
  setup() {
    // Vue Router
    const route = useRoute()
    // Vuex Store
    const store = useStore()

    // Computed properties
    const isHomeRoute = computed(() => route.name === 'Home')
    const isCompaniesRoute = computed(() => route.name === 'Companies')
    const isWhyRoute = computed(() => route.name === 'Why')
    const fTotal = computed(() => store.state.filteredTotal)
    const companiesCount = computed(() => store.state.companiesCount)

    // Reactive search text
    const searchText = ref('')

    // Function to handle search button click
    const handleSearch = () => {
      store.commit('setPaginated', null)
      store.dispatch('resetData')
      store.commit('updateTitle', searchText.value)
    }

    // Return reactive variables and functions
    return {
      searchText,
      handleSearch,
      route,
      fTotal,
      companiesCount,
      isHomeRoute,
      isCompaniesRoute,
      isWhyRoute
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 900px) {
  .banner-title-why {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 5rem;
    height: 70px;
  }
  .nav {
    top: 0;
    background-color: white;
    z-index: 10000;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 100%;
  }
  .nav-left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 50%;
    margin-right: 5%;
    margin-left: 5%;
  }
  .nav-right-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 50%;
    margin-right: 5%;
    margin-left: 5%;
  }
  .banner-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    max-width: 800px;
    min-width: 400px;
  }
  .banner-sub {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    width: 80%;
  }
  .banner-wrap {
    /* box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06); */
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 310px;
    width: 100%;
    z-index: 1000;
    background-color: white;
  }
  .banner {
    /* box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06); */
    margin-top: -30px;
    margin-bottom: 51px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 275px;
    /* width: 60%; */
    z-index: 1000;
  }
  .banner-why {
    /* box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06); */
    margin-top: -30px;
    margin-bottom: 51px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 275px;
    /* width: 60%; */
    z-index: 1000;
  }
}
@media (min-width: 901px) {
  .banner-why {
    /* box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06); */
    margin-top: -30px;
    margin-bottom: 51px;
    display: flex;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 275px;
    /* width: 60%; */
    z-index: 1000;
  }
  .banner-title-why {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 5rem;
  }
  .banner {
    /* box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06); */
    top: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 275px;
    width: 60%;
    z-index: 1000;
    max-width: 800px;
    min-width: 400px;
    background-color: white;
  }
  .nav-left-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    width: 50%;
    margin-right: 5%;
    margin-left: 5%;
  }
  .nav-right-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
    width: 50%;
    margin-right: 5%;
    margin-left: 5%;
  }
  .nav {
    top: 0;
    background-color: white;
    z-index: 10000;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 100%;
  }
  .banner-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 6rem;
    margin-left: 75px;
    max-width: 800px;
    min-width: 400px;
  }
  .banner-sub {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    width: 50%;
    margin-left: 75px;
    max-width: 800px;
    min-width: 400px;
  }
  .banner-wrap {
    /* box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06); */
    margin-top: 90px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 275px;
    width: 100%;
    z-index: 1000;
    background-color: white;
  }
}
.search-icon {
  width: 26px;
  height: 26px;
  margin-left: 36px;
  margin-right: 10px;
  color: #9e9ea7;
  fill: #9e9ea7;
}
.filters {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  border-radius: 40px;
  width: 40%;
  z-index: 1000;
  border: 3px;
  max-width: 800px;
  min-width: 400px;
  background-color: white;
  margin-top: 18px;
}
input {
  width: 300px;
  padding: 5px;
  border: 0px;
  border-radius: 5px;
  font-size: 1.3rem;
}

input:focus {
  outline: none;
}
.nav-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.left-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 30%;
}
.logo-uk {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
}
span.f_count {
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-size: 6rem;
}
.right-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
.nav-item-one {
  text-align: right;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  width: 49px;
  margin-left: 20px;
  margin-right: 20px;
}
.nav-item-two {
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  width: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
.logo {
  font-family: 'Lobster', cursive;
  font-size: 1rem;
}
</style>
