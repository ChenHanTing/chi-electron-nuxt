<template>
  <v-layout>
    <v-flex class="text-center">
      <img :src="v" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import v from '../static/v.png'

const data = function () {
  return {
    v,
  }
}

export default {
  data,
}
</script>
