<template>
  <nav class="layout-nav-wrap">
    <transition>
      <a href="#" class="hamburger-list-icon"
        @click.prevent="mediaLinkActive =! mediaLinkActive"
        v-show="!mediaLinkActive">
        <img src="https://i.imgur.com/mW0FaCA.png" alt="hamburger-list-icon">
      </a>
    </transition>
    <transition>
      <a href="#" class="cancel-list-icon"
        @click.prevent="mediaLinkActive =! mediaLinkActive"
        v-show="mediaLinkActive">
        <img src="https://i.imgur.com/oD1wN6h.png" alt="cancel-list-icon">
      </a>
    </transition>
    <div class="container">
      <div class="logo-img">
        <a href="#">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/logo-white.png" alt="logo">
        </a>
      </div>
      <ul class="layout-link-group">
        <li :class="{ 'link-active' : $route.path === '/' }">
          <RouterLink class="fz-20 light-color" to="/">
            系列鏡框
          </RouterLink>
        </li>
        <li :class="{ 'link-active' : $route.path === '/service' }">
          <RouterLink class="fz-20 light-color" to="/service">
            門市據點
          </RouterLink>
        </li>
        <li :class="{ 'link-active' : $route.path === '/blog' || $route.path === '/blog/UIUX-news'}">
          <RouterLink class="fz-20 light-color" to="/blog">
            部落格
          </RouterLink>
        </li>
        <li :class="{ 'link-active' : $route.path === '/about'}">
          <RouterLink class="fz-20 light-color" to="/about">
            常見問題
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  <transition>
    <ul class="media-link-wrap" v-show="mediaLinkActive">
      <li :class="{ 'nav-active' : $route.path === '/' }">
        <RouterLink to="/" @click="closeMenu">
          系列鏡框
        </RouterLink>
      </li>
      <li :class="{ 'nav-active' : $route.path === '/service' }">
        <RouterLink to="/service" @click="closeMenu">
          門市據點
        </RouterLink>
      </li>
      <li :class="{ 'nav-active' : $route.path === '/blog' }">
        <RouterLink to="/blog" @click="closeMenu">
          部落格
        </RouterLink>
      </li>
      <li :class="{ 'nav-active' : $route.path === '/about'}">
        <RouterLink to="/about" @click="closeMenu">
          常見問題
        </RouterLink>
      </li>
    </ul>
  </transition>
  <RouterView />
  <footer>
    <div class="footer-logo">
      <a href="#" class="footer-logo-img">
        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/logo.svg" alt="logo">
      </a>
      <div class="footer-logo-text">
        <p>若有數位產品設計和開發相關問題</p>
        <p>歡迎填寫表單，或直接與我聯絡！</p>
      </div>
      <a href="#">service@hexschool.com</a>
    </div>
    <ul class="footer-link-list">
      <li>
        <a href="#">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/list.svg" alt="list-icon">
          <p>填寫表單</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/instagram.svg" alt="ins-icon">
          <p>hexschool_demo</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/facebook.svg" alt="facebook-icon">
          <p>hexschoolTW</p>
        </a>
      </li>
    </ul>
  </footer>
  <transition name="fade">
    <div class="overlay" v-show="mediaLinkActive"
      @click="closeMenu"></div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      mediaLinkActive: false
    }
  },
  methods: {
    closeMenu () {
      this.mediaLinkActive = false
    }
  }
}
</script>

<style scoped>
</style>
