<template lang="pug">
  .activity-layout
    .container.d-flex.title.justify-content-between
      .left.d-flex.flex-column
        span.chinese {{titleZh}}
        span.english {{titleEn}}
      nuxt-link.right.hover-bounce(to="/")
        span 返回
    hr
    .container.activity
      nuxt-link.class-room.hover-popout(v-for="cls in classInfo" :to="cls.link")
        span {{ cls.name }}
</template>

<script>
import ClassRoom from '@/mixins/class'

export default {
  props: {
    titleZh: String,
    titleEn: String,
  },
  mixins: [ClassRoom]
};
</script>

<style scoped lang="scss">
@import "@/assets/components/list-and-detail.scss";

.activity {
  display: flex;
  flex-wrap: wrap;
  outline: white .5rem solid;
  padding: 0;
  margin: 0;
  /* 毛玻璃 */
  background: rgba(255, 255, 255, .2);
}
.class-room {
  width: 20%;
}

a.class-room {
  color: white;
  margin: 30px 0;
  text-align: center;
  span {
    font-size: 2.0rem;
  }
  letter-spacing: 3px;
  /* Google Font */
  font-family: "Wt12", Serif;
}
</style>
