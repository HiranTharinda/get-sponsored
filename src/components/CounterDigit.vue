<template>
  <div class="value-count">{{ displayValue }}</div>
  <div class="count-sub" v-if="isHome">
    <span class="count-sub">Jobs in United Kingdom</span>
  </div>
</template>

<script lang="ts">
import { ref, watch, PropType } from 'vue'

export default {
  name: 'CounterDigit',
  props: {
    value: {
      type: String as PropType<string>, // Use PropType for type annotation
      required: true
    },
    isHome: {
      type: Boolean as PropType<Boolean>, // Use PropType for type annotation
      required: true
    }
  },
  setup(props) {
    // Reactive reference for displayValue
    const displayValue = ref(props.value)

    // Reactive reference for isHome
    const isHome = ref(props.isHome)

    // Watch for changes in the props.value and update displayValue accordingly
    watch(
      () => props.value,
      (newValue) => {
        displayValue.value = newValue
      }
    )

    // Return reactive variables
    return {
      displayValue,
      isHome
    }
  }
}
</script>

<style scoped>
.value-count {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div.count-sub {
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-size: 0.7rem;
  margin-top: -35px;
  margin-bottom: 26px;
}
span.count-sub {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 0.86rem;
  text-align: center;
}
</style>