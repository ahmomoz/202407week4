<template>
  <nav
    class="blogs-nav-wrap py-13"
    style="background-color: #650300;"
  >
    <div class="container">
      <div class="d-flex card-row">
        <div class="column d-flex justify-content-space-between">
          <ul class="layout-footer-link-group d-flex g-48">
            <li>
              <RouterLink class="fz-20 light-color" to="/">
                最新消息
              </RouterLink>
            </li>
            <li>
              <RouterLink class="fz-20 light-color" to="/">
                特別企劃
              </RouterLink>
            </li>
            <li>
              <RouterLink class="fz-20 light-color" to="/">
                新品上市
              </RouterLink>
            </li>
            <li>
              <RouterLink class="fz-20 light-color" to="/">
                鏡框小知識
              </RouterLink>
            </li>
          </ul>
          <div class="blogs-icon-group">
            <a href="#">
              <img src="https://i.imgur.com/puZIB9L.png" alt="search-logo">
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <section class="blog-breadcrumb-wrap mt-24 mt-md-8">
    <div class="container">
      <div class="d-flex card-row blog-breadcrumb-group">
        <div class="column d-flex">
          <RouterLink
            class="blog-breadcrumb"
            to="/">
            首頁
          </RouterLink>
          <p style="margin: 0 3px;">/</p>
          <RouterLink
            class="blog-breadcrumb"
            to="/blogs">
            部落格
          </RouterLink>
          <p style="margin: 0 3px;">/</p>
          <RouterLink
            class="blog-breadcrumb"
            to="/blogs">
            特別企劃
          </RouterLink>
          <p style="margin: 0 3px;">/</p>
          <RouterLink
            class="blog-breadcrumb"
            :class="{ 'breadcrumb-active' : $route.path === '/blog/content' }"
            to="/blog/content">
            情人特別企劃
          </RouterLink>
        </div>
      </div>
      <div class="d-flex card-row blog-tag-group mt-8">
        <div class="column d-flex">
          <RouterLink
            class="text-roboto blog-tag fz-24 fw-bold primary-color"
            to="/">
            #special
          </RouterLink>
          <RouterLink
            class="text-roboto blog-tag fz-24 fw-bold primary-color"
            to="/blogs">
            #event
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <main class="blog-content-wrap pt-8">
    <div class="container">
      <div class="d-flex card-row blog-content-group">
        <div class="column">
          <div class="blog-title">
            <h2 class="fz-48 fz-sm-24">
              情人特別企劃
            </h2>
            <h6 class="text-roboto fz-24 fz-sm-16 fw-medium">
              2020 Valentine’s Special
            </h6>
          </div>
          <div class="blog-text">
            <img
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/blogpage-1.png"
            alt="blog-content-image"
            class="mt-16 mt-md-24 mt-sm-16">
            <p class="mt-8 mt-md-16 mt-sm-8">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。<br/>本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
            </p>
            <img
              src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/blogpage-2.png"
              alt="blog-content-image"
              class="mt-40 mt-md-24 mt-sm-16">
            <p class="mt-8 mt-md-16 mt-sm-8">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。<br/>本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
            </p>
            <img
              src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/blogpage-3.png"
              alt="blog-content-image"
              class="mt-40 mt-md-24 mt-sm-16">
            <p class="mt-8 mt-md-16 mt-sm-8">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。<br/>本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
            </p>
            <img
              src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/blogpage-4.png"
              alt="blog-content-image"
              class="mt-40 mt-md-24 mt-sm-16">
            <p class="mt-8 mt-md-16 mt-sm-8">
              2/14(五)-2/20(日)<br/>
              至本店單筆消費滿2980元, 就送情人節限定眼鏡盒1個<br/>
              期間優惠還有~~持他牌鏡框更換鏡片<br/>
              薄型非球面鏡片折300元<br/>
              濾藍光鏡片折500元<br/>
              快快帶上另一半<br/>
              讓彼此每一次睜開眼，都被愛的視線包圍!
            </p>
          </div>
          <div class="blog-share-link-group d-flex align-items-center mt-40">
            <p class="fw-bold me-16">
              Share
            </p>
            <a href="#" class="me-16">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/logo-facebook.png" alt="logo-facebook">
            </a>
            <a href="#">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/logo-instagram.png" alt="logo-instagram">
            </a>
          </div>
        </div>
        <div class="column">
          <div class="tag-title fw-bold d-flex align-items-center">
            <img src="https://i.imgur.com/NsxUfx7.png" alt="label-image">
            <h5 class="text-roboto fz-32 fz-md-16 primary-color">
              TAGS
            </h5>
          </div>
          <div class="tag-content fw-bold">
            <RouterLink
              class="text-roboto blog-tag fz-24 fz-md-16 primary-color me-24"
              to="/">
              #special
            </RouterLink><RouterLink
              class="text-roboto blog-tag fz-24 fz-md-16 primary-color"
              to="/">
              #sale
            </RouterLink>
            <br/>
            <RouterLink
              class="text-roboto blog-tag fz-24 fz-md-16 primary-color me-24"
              to="/">
              #new_item
            </RouterLink>
            <RouterLink
              class="text-roboto blog-tag fz-24 fz-md-16 primary-color"
              to="/">
              #interview
            </RouterLink>
            <br/>
            <RouterLink
              class="text-roboto blog-tag fz-24 fz-md-16 primary-color me-24"
              to="/">
              #trivia
            </RouterLink>
            <RouterLink
              class="text-roboto blog-tag fz-24 fz-md-16 primary-color"
              to="/">
              #news
            </RouterLink>
            <br/>
            <RouterLink
              class="text-roboto blog-tag fz-24 fz-md-16 primary-color"
              to="/">
              #event
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
  <section class="blog-change-page-link-wrap pb-80">
    <div class="container">
      <div class="d-flex card-row">
        <div class="column">
          <div class="blog-change-page-link-group d-flex justify-content-space-between mt-24 pt-24">
            <div class="pre-page-link">
              <a href="#" class="d-flex">
                <img
                  src="https://i.imgur.com/A45XJD9.png"
                  alt="left-arrow"
                  class="me-12">
                <p class="dark-color">上一篇：街頭潮人訪問 1</p>
              </a>
            </div>
            <div class="pre-page-link">
              <a href="#" class="d-flex">
                <p class="dark-color me-12">下一篇：街頭潮人訪問 2</p>
                <img
                src="https://i.imgur.com/GnZnNkG.png"
                alt="right-arrow">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>
<style scoped>
</style>
