<template>
  <div class="body-wrapper">
    <div class="companies">
      <div class="filters">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          role="img"
          class="search-icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
          ></path>
        </svg>
        <input v-model="userInput" type="text" placeholder="Search..." />

        <div v-if="showSuggestions" id="suggestions-container">
          <!-- Check if there are matching suggestions -->
          <div v-if="matchingSuggestions.length > 0">
            <div
              v-for="suggestion in matchingSuggestions"
              :key="suggestion"
              class="suggestion"
              @click="selectSuggestion(suggestion)"
            >
              {{ suggestion }}
            </div>
          </div>
          <!-- If no suggestions, display the message -->
          <div class="suggestion" v-else>
            Hmm... Seems like they are not here yet!.🤔
          </div>
        </div>
        <div v-if="showAnimation">
          <Vue3Lottie
            animation-link="https://lottie.host/0d77095e-7863-4f5e-9b5c-9982c0d2b6ea/vW6eNpKaBQ.json"
            :height="300"
            :width="300"
            :speed="0.5"
            :loop="false"
            @onComplete="onAnimationComplete"
          />
        </div>
      </div>
      <div v-if="found" class="banner">
        <span class="banner-sub"
          ><p>
            Hey there, international students and expats! 🌏✈️ If you're looking
            for a job in the UK, let's talk about the current job market
            situation. It's a bit of a challenge to find jobs that offer
            sponsorship on regular job boards. 🧭 But when you do manage to find
            one, it's like hitting the jackpot! 💼🎉 Getting sponsored means you
            can work and live your dream in the UK hassle-free!
          </p>
          <p>
            On the other hand, applying for non-sponsoring jobs can be a bit of
            a time-waster. ⏳ So, let's focus on what really matters – finding
            those rare sponsored opportunities that match your skills and
            ambitions! It's worth the effort, and we'll help you get there! 💪
          </p>
          <p>
            Stay determined, stay positive, and let's crack the code together!
            🚀🔍
          </p>
          <p>
            #InternationalOpportunities #UKJobSearch #SponsoredDreams 🌟
          </p></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash";
import companies from "@/assets/company-list.json";
import { useHead } from "@vueuse/head";
import { computed, reactive } from "vue";
export default {
  name: "CompanySponsor",
  setup() {
    const siteData = reactive({
      title:
        "UK Companies Offering Sponsorship Opportunities: Find Your Ideal Sponsorship For Free | UKSponsored",
      description:
        "Explore a comprehensive list of leading UK companies that provide sponsorship opportunities. Use our convenient search function to find companies that sponsor foreign talent. Take the next step in your career with UKSponsored.",
    });
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    });
  },
  data() {
    return {
      found: false,
      userInput: "",
      wordSet: companies,
      showSuggestions: false,
      showAnimation: false,
    };
  },
  methods: {
    onAnimationComplete() {
      this.showAnimation = false;
    },
    selectSuggestion() {
      this.found = true;
      this.showAnimation = true;
      this.userInput = "";
      this.showSuggestions = false;
    },
    debouncedSearch: debounce(function () {
      const userInputLower = this.userInput.trim().toLowerCase();
      this.matchingSuggestions = this.wordSet
        .filter((word) => word.toLowerCase().includes(userInputLower))
        .slice(0, 10);
      this.showSuggestions = true;
    }, 300), // Adjust the debounce delay (in milliseconds) to your preference
  },
  watch: {
    userInput() {
      if (this.userInput) {
        this.found = false;
        this.debouncedSearch();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
}
.body-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  width: 100%;
}
.left-filter {
  align-items: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 75px;
}
.search-icon {
  width: 26px;
  height: 26px;
  margin-left: 36px;
  margin-right: 10px;
  color: #9e9ea7;
  fill: #9e9ea7;
}
.banner-title {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 6rem;
  margin-left: 75px;
  max-width: 800px;
  min-width: 400px;
}
.banner-sub {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  width: 50%;
  max-width: 800px;
  min-width: 400px;
}
.banner {
  /* box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06); */
  top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  z-index: 1000;
  max-width: 800px;
  min-width: 400px;
}
.filters {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 96px;
  border-radius: 40px;
  width: 40%;
  z-index: 1000;
  border: 3px;
  max-width: 800px;
  min-width: 400px;
  background-color: white;
  margin-top: 15px;
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

/* Style for the suggestions container */
#suggestions-container {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  top: 495px;
  position: absolute;
  overflow-y: auto;
  border-radius: 40px;
  min-width: 400px;
  max-width: 800px;
  width: 40%;
  background-color: #fff;
  overflow-y: "hidden";
  overflow-x: "hidden";
}
.suggestions-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

/* Style for individual suggestion items */
.suggestion {
  max-width: 800px;
  min-width: 400px;
  padding: 5px;
  padding-left: 34px;
  padding-right: 34px;
  margin-left: 44px;
  cursor: pointer;
  border-radius: 18px;
}

.suggestion:hover {
  background-color: #f2f2f2;
}
.job-u {
  margin-top: 275px;
}
.companies {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  width: 100%;
}
</style>
