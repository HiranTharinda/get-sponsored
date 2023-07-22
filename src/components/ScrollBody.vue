<template>
  <div class="body-wrapper">
    <div class="scroll-body">
      <div class="left-body"></div>
      <div class="mid-body">
        <ul class="job-u">
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
        </ul>
      </div>
      <div class="right-body"></div>
    </div>
  </div>
</template>

<script>
import AdCard from "./AdCard.vue";
import { ref, computed, onMounted, watch, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useHead } from "@vueuse/head";
export default {
  name: "ScrollBody",
  components: {
    AdCard,
  },
  setup() {
    const siteData = reactive({
      title:
        "UK Sponsored Jobs: Find Sponsorship Opportunities in Leading Companies Free",
      description:
        "Discover sponsored job opportunities in the UK from top companies for Free. uksponsored connects skilled professionals with companies offering sponsorships for a wide range of roles. Explore your career prospects with UK-based sponsorships now.",
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

    const route = useRoute();
    const store = useStore();
    const isHomeRoute = () => route.name === "Home";
    const jobs = computed(() => store.state.data);
    const title = computed(() => store.state.title);
    const loading = ref(true);
    const offset = ref(0);
    const limit = 10;

    // Function to fetch more data and append it to the jobs array
    const fetchMoreData = () => {
      if (isHomeRoute()) {
        store
          .dispatch("fetchData", {
            title: title.value,
            offset: offset.value,
            limit,
          })
          .then(() => {
            offset.value += limit;
            loading.value = false;
          })
          .catch((error) => {
            console.error(error);
            loading.value = false;
          });
      }
    };

    // Function to check if the user has reached the bottom of the page
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;

      if (windowBottom >= docHeight) {
        // User has reached the bottom, load more data
        fetchMoreData();
      }
    };

    watch(title, (newTitle, oldTitle) => {
      if (newTitle !== oldTitle) {
        // Reset the offset and fetch new data based on the updated title
        offset.value = 0;
        store.commit("updateTitle", newTitle);
        fetchMoreData();
      }
    });

    // Add an event listener for the scroll event on the window object
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    // Fetch initial data when the component is mounted
    onMounted(() => {
      fetchMoreData();
    });

    // Clean up the event listener when the component is about to be unmounted
    // This is important to avoid memory leaks when the component is removed from the DOM
    const cleanup = () => {
      window.removeEventListener("scroll", handleScroll);
    };
    return { jobs, loading, cleanup };
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
  margin-right: 10px;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 100%;
}
</style>
