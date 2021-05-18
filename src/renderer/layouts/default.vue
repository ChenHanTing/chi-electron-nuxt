<template>
  <div class="chi-layout">
    <nuxt />
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: '畢業光碟',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: '畢業光碟影片'
          }
        ],
      }
    },
    name: "navbar",
    methods: {
    },
    computed: {
    },
  }
</script>

<style scoped>
.chi-layout {
  padding-top: 10vh;
  height: 130vh;
  width: 100vw;
  overflow: hidden;
  background: radial-gradient(circle, rgba(85,210,222,255) 0%, rgba(1,175,201,255) 35%, rgba(0,173,205,255) 100%);
}
</style>
