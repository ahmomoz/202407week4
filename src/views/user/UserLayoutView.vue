<template>
  <nav
    class="layout-nav-wrap py-12"
    style="background-color: #aa0601;">
    <div class="container">
      <div class="d-flex card-row layout-nav-group justify-content-space-between align-items-center">
        <div class="column logo-img">
          <a href="#">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/logo-white.png" alt="logo">
          </a>
        </div>
        <ul class="column layout-link-group d-flex g-64">
          <li :class="{ 'link-active' : $route.path === '/products/optical' || $route.path === '/products/sunglasses'}">
            <RouterLink class="layout-link fz-20 fz-sm-16 light-color" to="/products/optical">
              系列鏡框
            </RouterLink>
          </li>
          <li :class="{ 'link-active' : $route.path === '/stores' || $route.path === '/stores/content'}">
            <RouterLink class="layout-link fz-20 fz-sm-16 light-color" to="/stores">
              門市據點
            </RouterLink>
          </li>
          <li :class="{ 'link-active' : $route.path === '/blogs' || $route.path === '/blog'}">
            <RouterLink class="layout-link fz-20 fz-sm-16 light-color" to="/blogs">
              部落格
            </RouterLink>
          </li>
          <li :class="{ 'link-active' : $route.path === '/QA'}">
            <RouterLink class="layout-link fz-20 fz-sm-16 light-color" to="/QA">
              常見問題
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
  <footer
    class="layout-footer-wrap"
    style="background-color: #aa0601;">
    <div class="container">
      <div class="d-flex card-row layout-footer-group">
        <div class="column">
          <nav class="d-flex justify-content-space-between align-items-center pt-48">
            <ul class="layout-footer-link-group d-flex g-48">
              <li>
                <RouterLink class="fz-20 fz-md-16 light-color" to="/">
                  首頁
                </RouterLink>
              </li>
              <li>
                <RouterLink class="fz-20 fz-md-16 light-color" to="/products/optical">
                  系列鏡框
                </RouterLink>
              </li>
              <li>
                <RouterLink class="fz-20 fz-md-16 light-color" to="/stores">
                  門市據點
                </RouterLink>
              </li>
              <li>
                <RouterLink class="fz-20 fz-md-16 light-color" to="/blogs">
                  部落格
                </RouterLink>
              </li>
              <li>
                <RouterLink class="fz-20 fz-md-16 light-color" to="/QA">
                  常見問題
                </RouterLink>
              </li>
            </ul>
            <ul class="icon-group d-flex">
              <li>
                <a href="#">
                  <img
                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/ic-social-fb.png"
                    alt="fb-icon">
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/ic_social_ig.png"
                    alt="ins-icon">
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/ic_social_line.png"
                    alt="line-icon">
                </a>
              </li>
            </ul>
          </nav>
          <ul class="layout-footer-contact-group fz-36 pt-24">
            <li class="d-flex align-items-center">
              <img
                src="https://i.imgur.com/c4AvZEX.png"
                alt="phone-icon"
                class="me-16">
              <a
                href="tel:+0800-000-000"
                class="fz-sm-16 light-color">
                0800-000-000
              </a>
            </li>
            <li class="d-flex align-items-center pt-8">
              <img
                src="https://i.imgur.com/i7CIpAq.png"
                alt="mail-icon"
                class="me-16">
              <a
                href="mailto:glasses@business.com"
                class="fz-sm-16 light-color">
                glasses@business.com
              </a>
            </li>
          </ul>
          <section class="pt-32">
            <div class="copyright-group d-flex justify-content-space-between py-32">
              <div>
                <p class="light-color">Copyright © 2020 Glasses.All rights reserved.</p>
              </div>
              <ul class="d-flex g-48">
                <li><a href="#" class="light-color">隱私權政策</a></li>
                <li><a href="#" class="light-color">服務條款</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>
<style scoped>
</style>
