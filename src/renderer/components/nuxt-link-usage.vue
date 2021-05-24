<template lang="pug">
  nuxt-link(v-if="!hasDomainName" :to="link" :title="title" :target="target")
    slot
  a(v-else :href="link" :title="title" :target="target")
    slot
</template>

<script>
import {equals} from 'ramda';

const props = {
  link: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: '_self',
  },
};

const computed = {
  hasDomainName() {
    return /^(http|https)/.test(this.link) ||
           equals(this.link, '/ebook/mobile/index.html');
  },
};

export default {
  name: 'RadioOptions',
  props,
  computed,
  components: {}
};
</script>
