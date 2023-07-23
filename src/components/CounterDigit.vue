<template>
  <div class="value-count">{{ displayValue }}</div>
  <div class="count-sub" v-if="isHome">
    <span class="count-sub">Jobs in United Kingdom</span>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "CounterDigit",
  props: {
    value: {
      type: String,
      required: true,
    },
    home: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const displayValue = ref(props.value);
    const isHome = ref(props.home);

    watch(
      () => props.value,
      (newValue) => {
        displayValue.value = newValue;
      }
    );

    return {
      displayValue,
      isHome,
    };
  },
};
</script>

<style scoped>
.value-count {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.digit {
  position: relative;
  margin-right: 5px;
}

.animate {
  animation: bounce 0.5s ease-in-out;
}
div.count-sub {
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 0.7rem;
  margin-top: -35px;
  margin-bottom: 26px;
}
span.count-sub {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 0.86rem;
  text-align: center;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>