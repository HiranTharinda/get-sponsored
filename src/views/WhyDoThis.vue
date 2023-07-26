<template>
  <div class="body-wrapper">
    <div class="companies">
      <div class="banner">
        <span class="banner-sub"
          ><p>
            Hey there, international students and expats! 🌏✈️ If you're looking
            for a job in the UK, I know the struggle is real. Finding jobs that
            offer sponsorship on regular job boards can be quite a challenge. 🧭
            But when you do manage to find one, it's like hitting the jackpot!
            💼🎉
          </p>
          <p>
            Getting sponsored means you can work and live your dream in the UK
            hassle-free!. Applying for non-sponsoring jobs can be a bit of a
            time-waster. ⏳ So, let's cut through the noise and focus on what
            really matters – finding those rare sponsored opportunities that
            match your skills and ambitions! It's worth the effort 💪
          </p>
          <p>
            You can find a curated job
            <router-link to="/"><span class="link">feed</span></router-link>
            that specifically focuses on openings from companies with
            sponsorship licenses. 🌟 And a
            <router-link to="/companies"
              ><span class="link">search</span></router-link
            >
            feature that verifies if a company has the rights to sponsor!
          </p>

          <p>
            Stay determined, stay positive, and let's crack the code together!
            🚀🌟 Your dream job in the UK awaits you, and we're here to make it
            happen. Let's soar to new heights and build an amazing career
            journey 🚀💼💫
          </p>

          <p>#InternationalOpportunities #UKJobSearch #SponsoredDreams 🌟</p>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, onMounted } from "vue";
import { useHead } from "@vueuse/head";

export default defineComponent({
  name: "WhyDoThis",
  setup() {
    // Reactive site data object
    const siteData = reactive({
      title:
        "Free UK Sponsorship Opportunities: Learn Why UKSponsored Offers Free Services",
      description:
        "Discover the reasons behind UKSponsored's commitment to providing free sponsorship opportunity services in the UK. Learn how our platform connects job seekers with sponsorships from top companies without any charges, empowering career growth for all.",
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

    // Function to scroll to the top of the page
    const scrollToPosition = () => {
      // Scroll the main page (whole window) to the desired position
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Add smooth scrolling effect
      });
    };

    // Call the scrollToPosition function when the component is mounted
    onMounted(() => {
      scrollToPosition();
    });
  },
});
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
.companies {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.banner-sub {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  width: 50%;
  margin-bottom: 100px;
  max-width: 800px;
  min-width: 300px;
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
.link {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1rem;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
</style>
