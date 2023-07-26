<template>
  <div class="body-wrapper">
    <div class="scroll-body">
      <div class="left-body"></div>
      <div class="mid-body">
        <ul class="job-u" @scroll="onScroll">
          <div v-if="loading">
            <Vue3Lottie
              animation-link="https://lottie.host/afbbc643-51be-4be3-a95d-7baa151f2845/hRjcSitwrC.json"
              :height="300"
              :width="300"
              :speed="0.5"
              :loop="true"
            />
          </div>

          <div class="no-resuls" v-else-if="!jobs.length">
            <Vue3Lottie
              animation-link="https://lottie.host/b1ba746b-9ca7-4e97-bc75-e2b4b962f7a1/qoTRGsZOnK.json"
              :height="300"
              :width="300"
              :speed="0.5"
              :loop="false"
            />
            <span class="no-result-text">
              <p>No jobs at the moment. 😕 But we'll hustle to find more.</p>
              <p>🔍💪 Stay tuned! 🎉</p>
            </span>
          </div>
          <li v-for="job in jobs" :key="job.id">
            <AdCard
              :title="job.title"
              :company="job.company"
              :location="job.location"
              :img="job.img"
              :link="job.link"
              :date="job.date"
              :salary="job.salary"
            />
          </li>
          <div class="loading-more" v-if="!hasLoadedAllDataRef">
            <Vue3Lottie
              animation-link="https://lottie.host/afbbc643-51be-4be3-a95d-7baa151f2845/hRjcSitwrC.json"
              :height="100"
              :width="100"
              :speed="0.5"
              :loop="true"
            />
          </div>
          <div class="loading-more" v-else>
            <p>That's all for now.😊</p>
          </div>
        </ul>
      </div>
      <div class="right-body"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useHead } from "@vueuse/head";
import AdCard from "../components/AdCard.vue";

export default defineComponent({
  name: "ScrollBody",
  components: {
    AdCard,
  },
  setup() {
    // Reactive site data object
    const siteData = reactive({
      title:
        "UK Sponsored Jobs: Find Sponsorship Opportunities in Leading Companies Free",
      description:
        "Discover sponsored job opportunities in the UK from top companies for Free. uksponsored connects skilled professionals with companies offering sponsorships for a wide range of roles. Explore your career prospects with UK-based sponsorships now.",
    });

    // Use the @vueuse/head plugin to update the page title and description
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    });

    // Vue Router and Vuex Store
    const route = useRoute();
    const store = useStore();

    // Helper function to check if the current route is the Home route
    const isHomeRoute = () => route.name === "Home";

    // Computed properties derived from the Vuex store state
    const jobs = computed(() => store.state.data);
    const title = computed(() => store.state.title);
    const paginated = computed(() => store.state.paginated);

    // Reactive variables and refs
    const hasLoadedAllDataRef = ref(false);
    const loading = ref(true);
    const offset = ref(0);
    const limit = 10;

    // Function to fetch more data and append it to the jobs array
    const fetchMoreData = () => {
      if (isHomeRoute()) {
        loading.value = true;
        store
          .dispatch("fetchData", {
            title: title.value,
            offset: offset.value,
            limit,
          })
          .then(() => {
            offset.value += limit;
            loading.value = false;
            // Update hasLoadedAllData based on paginated value
            hasLoadedAllDataRef.value = paginated.value === 0;
          })
          .catch((error) => {
            console.error(error);
            loading.value = false;
          });
      }
    };

    // Function to scroll to a specific position
    const scrollToPosition = (pos: number, time: number) => {
      setTimeout(() => {
        if (isHomeRoute()) {
          window.scrollTo({
            top: pos,
            behavior: "smooth", // Add smooth scrolling effect
          });
        }
      }, time); // 3000 milliseconds = 3 seconds (adjust the time as per your requirement)
    };

    // Function to handle the scroll event
    const onScroll = (e: Event) => {
      const { scrollTop, offsetHeight, scrollHeight } = e.target as HTMLElement;
      if (scrollTop + offsetHeight >= scrollHeight && !hasLoadedAllDataRef.value) {
        fetchMoreData();
      }
    };

    // Watch for changes in the title and fetch new data accordingly
    watch(title, (newTitle, oldTitle) => {
      if (newTitle !== oldTitle) {
        // Reset the offset and fetch new data based on the updated title
        offset.value = 0;
        store.commit("updateTitle", newTitle);
        fetchMoreData();
      }
    });

    // Fetch initial data when the component is mounted
    onMounted(() => {
      fetchMoreData();

      // Scroll to a specific position based on the window width
      if (window.innerWidth < 500) {
        scrollToPosition(300, 3000);
      } else {
        scrollToPosition(0, 0);
      }
    });

    // Return reactive variables and methods
    return { jobs, loading, onScroll, hasLoadedAllDataRef };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 900px) {
  .no-result-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
  .no-resuls {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .loading-more {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .end-results {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (min-width: 900px) {
  .no-resuls {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .loading-more {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .end-results {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
li:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
}
.body-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.scroll-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
.mid-body::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.mid-body {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  max-width: 800px;
  min-width: 400px;
  background-color: white;
}
.left-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 25%;
}
.right-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 25%;
}
ul {
  list-style-type: none;
  padding: 0;
  height: 100vh;
  margin-right: 10px;
  margin-bottom: 140px;
  overflow-y: auto;
}
ul::-webkit-scrollbar {
  width: 0 !important;
}
li {
  display: inline-block;
  margin: 8px 10px;
  width: 100%;
}
</style>
