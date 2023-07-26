<template>
  <a :href="link" target="_blank" @click="handleClick(title)">
    <div class="card">
      <div class="nav-left-container">
        <img v-if="img" class="ad-img" :src="img" />
        <img v-else class="ad-img" src="@/assets/company.png" />
      </div>
      <div class="nav-right-container">
        <span class="ad-title">{{ truncatedTitle }}</span>
        <span class="ad-company">{{ truncatedCompany }}</span>
        <span class="ad-location">{{ truncatedLocation }}</span>
        <span v-if="salary" class="ad-salary">{{ salary }}</span>
        <span v-else class="ad-salary-no">{{ 'NOT PROVIDED' }}</span>
        <span class="ad-date">{{ dateString(date) }}</span>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import formatDateDescription from '../utils'

export default defineComponent({
  name: 'AdCard',
  props: {
    title: String,
    company: String,
    location: String,
    img: String,
    link: String,
    date: String,
    salary: String
  },
  data() {
    return {
      screenWidth: window.innerWidth
    }
  },
  computed: {
    truncatedTitle(): string {
      return this.limitString(this.title, 25)
    },
    truncatedCompany(): string {
      return this.limitString(this.company, 30)
    },
    truncatedLocation(): string {
      return this.limitString(this.location, 40)
    }
  },
  methods: {
    dateString(date: string): string {
      return formatDateDescription(date)
    },
    limitString(str: string, maxLength: number): string {
      if (str.length > maxLength && this.screenWidth < 900) {
        return str.slice(0, maxLength - 3) + '...'
      }
      return str
    },
    handleClick(title: string): void {
      // Your logic here to handle the click event
      this.$gtag.event('Job Click', {
        event_category: 'Jobs',
        event_label: title,
        value: title + ' was clicked'
      })
      // You can perform any actions you want when the link is clicked
    },
    updateScreenSize(): void {
      this.screenWidth = window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenSize)
  }
})
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
.ad-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1rem;
}
.ad-company {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
}
.ad-location {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.7rem;
}
.ad-salary-no {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  color: white;
}
.ad-date {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: green;
  font-size: 0.8rem;
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
  height: 120px;
  width: 70%;
}
</style>
