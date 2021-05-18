<template>
  <img class="VuetifyLogo" alt="Vuetify Logo" :src="vuetify" />
</template>

<style>
.VuetifyLogo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>

<script>
import vuetify from '~/static/vuetify-logo.svg'

const data = function () {
  return {
    vuetify,
  }
}

export default {
  data,
}
</script>
