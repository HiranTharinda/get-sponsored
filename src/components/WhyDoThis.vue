<template>
  <div class="body-wrapper">
    <div class="companies">
      <div class="banner">
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
import { useHead } from "@vueuse/head";
import { computed, reactive } from "vue";
export default {
  name: "WhyDoThis",
  setup() {
    const siteData = reactive({
      title:
        "Free UK Sponsorship Opportunities: Learn Why UKSponsored Offers Free Services",
      description:
        "Discover the reasons behind UKSponsored's commitment to providing free sponsorship opportunity services in the UK. Learn how our platform connects job seekers with sponsorships from top companies without any charges, empowering career growth for all.",
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
.banner-title {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 6rem;
  margin-left: 75px;
  max-width: 800px;
  min-width: 400px;
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
</style>
