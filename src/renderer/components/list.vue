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
import ClassRoom from '~/mixins/class'

export default {
  props: {
    titleZh: String,
    titleEn: String,
  },
  mixins: [ClassRoom]
};
</script>

<style scoped>
@import "@/assets/components/list-and-detail.css";

.activity {
  display: flex;
  flex-wrap: wrap;
  outline: white 0.5rem solid;
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
  letter-spacing: 3px;
  /* Google Font */
  font-family: "Wt12", Serif;
}
a.class-room span {
  font-size: 2rem;
}
</style>
