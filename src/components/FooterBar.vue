<template>
  <div class="footer">
    <div class="footer-right-container">
      <span class="footer-item-one">© 2023 UKSponsored.com</span>
    </div>
    <div class="footer-left-container">
      <span class="footer-item-about">{{ totalJobs }} Jobs posted!</span>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed, ComputedRef } from 'vue'

export default {
  name: 'FooterBar',
  setup() {
    // Vuex Store
    const store = useStore()

    // Computed property to access the 'totalJobs' value from the Vuex store
    const totalJobs: ComputedRef<number> = computed(() => store.state.total)

    // Return reactive variables
    return {
      totalJobs
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #2c3e50;
  text-decoration: none;
}
.footer {
  bottom: 0;
  background-color: white;
  z-index: 10000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 100%;
}
.footer-item-one {
  text-align: right;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 12px;
  margin-left: 20px;
  margin-right: 20px;
}
.footer-item-about {
  text-align: right;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 12px;
  width: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
.footer-left-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 50%;
}
.footer-right-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 50%;
}
</style>
