<template lang="pug">
  nuxt-link-usage.entry.hover-popout(:link="entryLink")
    .entry-image
      img(:src="entryImage" alt="cloud")
</template>

<script>
import NuxtLinkUsage from '~/components/nuxt-link-usage';

export default {
  components: { NuxtLinkUsage },
  props: {
    entryImage: String,
    entryText: String,
    entryLink: String,
    top: Number,
    left: Number
  },
  created() {
    console.log('typeof entryImage:', typeof(this.entryImage));
  },
  computed: {
    cloudPos: function() {
      return {
        top: `${this.top ?? 40}%`,
        left: `${this.left ?? 30}%`
      }
    }
  },
  /**
   * handler: 放入我們需要處理的程序。
   *
   * deep: 當欲觀察值的特性為 call by reference，例如 Object 時，
   *       需將 deep 值設定為 true，告知 watch 需要深度觀察。
   *       否則會因為特性關係，無法觸發監聽器。
   *
   * immediate: 監聽器預設為當值有所變化時才會觸發。如果我們希望在初始化完成後，
   *            就先觸發，執行 handler，就可以將 immediate 值設為 true。
   */
  watch: {
    entryImage: {
      handler() {
        console.log('changed');
        // 路徑為: /_nuxt/assets/images/index/cloud_03.png
        console.log('entryImage:', this.entryImage);
        // 型態為 String
        console.log('typeof entryImage:', typeof(this.entryImage));
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.entry-image {
  position: relative;
}
.entry-image img {
  width: 100%;
  object-fit: contain;
}
.entry-desc {
  position: absolute;
  /* 字顏色 */
  color: white;
  /* 字體 */
  font-family: "Wt06", Serif;
  letter-spacing: 3px;
}
@media screen and (min-width: 1280px) {
  .entry-desc span {
    font-size: 2.6rem;
  }
}
@media screen and (min-width: 992px) and (max-width: 1279px) {
  .entry-desc span {
    font-size: 2rem;
  }
}
@media screen and (max-width: 991px) and (min-width: 768px) {
  .entry-desc span {
    font-size: 1.4rem;
  }
}
.entry {
  z-index: 99;
}
</style>
