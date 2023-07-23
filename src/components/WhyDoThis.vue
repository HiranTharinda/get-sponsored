<template>
  <div class="body-wrapper">
    <div class="companies">
      <div class="banner">
        <span class="banner-sub"
          ><p>
            Hey there, international students and expats! 🌏✈️ If you're looking
            for a job in the UK, we know the struggle is real. Finding jobs that
            offer sponsorship on regular job boards can be quite a challenge. 🧭
            But when you do manage to find one, it's like hitting the jackpot!
            💼🎉
          </p>
          <p>
            Getting sponsored means you can work and live your dream in the UK
            hassle-free! We get it, applying for non-sponsoring jobs can be a
            bit of a time-waster. ⏳ So, let's cut through the noise and focus
            on what really matters – finding those rare sponsored opportunities
            that match your skills and ambitions! It's worth the effort, and
            we'll be your partner in this journey. 💪
          </p>
          <p>
            At our awesome free website, we've done all the heavy lifting to
            bring you the latest and greatest job openings from companies with
            sponsorship licenses. 🌟 All our listings are legit and verified, so
            you can trust that you're getting genuine opportunities. By the way,
            did you know there are more than 1.2 million job seekers coming to
            the UK each year? You're not alone on this adventure!
          </p>

          <p>
            Stay determined, stay positive, and let's crack the code together!
            🚀🌟 Your dream job in the UK awaits you, and we're here to make it
            happen. Let's soar to new heights and build an amazing career
            journey together! 🚀💼💫
          </p>

          <p>#InternationalOpportunities #UKJobSearch #SponsoredDreams 🌟</p>
        </span>
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
</style>
