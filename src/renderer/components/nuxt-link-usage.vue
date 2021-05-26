<template lang="pug">
  nuxt-link(v-if="!hasDomainName" :to="link" :title="title" :target="target")
    slot
  a(v-else :href="link" :title="title" :target="target")
    slot
</template>

<script>

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
    return /^(http|https)/.test(this.link)
  },
};

export default {
  name: 'RadioOptions',
  props,
  computed,
  components: {}
};
</script>
