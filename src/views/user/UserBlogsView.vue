<template>
  <nav
    class="blogs-nav-wrap py-13"
    style="background-color: #650300;"
  >
    <div class="container">
      <div class="d-flex card-row">
        <div class="column w-100 d-flex justify-content-space-between">
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
  <section class="blogs-wrap py-80 pt-sm-40 pb-sm-64">
    <div class="container">
      <div class="d-flex card-row blogs-title-group">
        <div class="column">
          <div class="wrap-title mt-16 mt-sm-0">
            <h2 class="fz-48 fz-sm-24 fw-bold ms-16">
              部落格
            </h2>
          </div>
        </div>
      </div>
      <div class="d-flex card-row blogs-content-group">
        <ul class="column mt-32">
          <li class="blogs-card d-flex g-24">
            <div class="blogs-img w-50 w-sm-100">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/blog-1.png" alt="blog-cover">
            </div>
            <div class="blogs-content w-50 w-sm-100 d-flex flex-direction-column">
              <div class="d-flex justify-content-space-between">
                <div class="blogs-title">
                  <RouterLink
                    class="fz-32 fz-md-24 dark-red-color d-block"
                    to="/blog/content">
                    情人特別企劃
                  </RouterLink>
                  <h7 class="text-roboto fz-20 fz-md-16 fw-medium">
                    2020 Valentine’s Special
                  </h7>
                </div>
                <div class="blogs-date">
                  <p class="fw-medium">2020/02/14</p>
                </div>
              </div>
              <div class="blogs-text mt-16 mt-md-4">
                <p class="blogs-text-pc fz-20 fz-md-16">
                  一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！<br/>即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯
                </p>
                <p class="blogs-text-md fz-20 fz-md-16">
                  一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻⋯⋯
                  <RouterLink
                    class="blogs-media-link dark-color"
                    to="/blog/content">
                    more
                  </RouterLink>
                </p>
              </div>
              <div class="blogs-link">
                <RouterLink
                  class="text-roboto dark-red-color fz-36 fw-black"
                  to="/blog/content">
                  MORE
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="blogs-card d-flex g-24 mt-60 mt-md-24">
            <div class="blogs-img w-50 w-sm-100">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/blog-2.png" alt="blog-cover">
            </div>
            <div class="blogs-content w-50 w-sm-100 d-flex flex-direction-column">
              <div class="d-flex justify-content-space-between">
                <div class="blogs-title">
                  <RouterLink
                    class="fz-32 fz-md-24 dark-red-color d-block"
                    to="/blog/content">
                    街頭潮人訪問
                  </RouterLink>
                  <h7 class="text-roboto fz-20 fz-md-16 fw-medium">
                    Street Interview
                  </h7>
                </div>
                <div class="blogs-date">
                  <p class="fw-medium">2020/02/02</p>
                </div>
              </div>
              <div class="blogs-text mt-16 mt-md-4">
                <p class="blogs-text-pc fz-20 fz-md-16">
                  炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯
                </p>
                <p class="blogs-text-md fz-20 fz-md-16">
                  炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣⋯⋯
                  <RouterLink
                    class="blogs-media-link dark-color"
                    to="/blog/content">
                    more
                  </RouterLink>
                </p>
              </div>
              <div class="blogs-link">
                <RouterLink
                  class="text-roboto dark-red-color fz-36 fw-black"
                  to="/blog/content">
                  MORE
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="blogs-card d-flex g-24 mt-60 mt-md-24">
            <div class="blogs-img w-50 w-sm-100">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/blog-3.png" alt="blog-cover">
            </div>
            <div class="blogs-content w-50 w-sm-100 d-flex flex-direction-column">
              <div class="d-flex justify-content-space-between">
                <div class="blogs-title">
                  <RouterLink
                    class="fz-32 fz-md-24 dark-red-color d-block"
                    to="/blog/content">
                    春季新品上市
                  </RouterLink>
                  <h7 class="text-roboto fz-20 fz-md-16 fw-medium">
                    New Selection
                  </h7>
                </div>
                <div class="blogs-date">
                  <p class="fw-medium">2020/02/14</p>
                </div>
              </div>
              <div class="blogs-text mt-16 mt-md-4">
                <p class="blogs-text-pc fz-20 fz-md-16">
                  2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯
                </p>
                <p class="blogs-text-md fz-20 fz-md-16">
                  一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻⋯⋯
                  <RouterLink
                    class="blogs-media-link dark-color"
                    to="/blog/content">
                    more
                  </RouterLink>
                </p>
              </div>
              <div class="blogs-link">
                <RouterLink
                  class="text-roboto dark-red-color fz-36 fw-black"
                  to="/blog/content">
                  MORE
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="blogs-card d-flex g-24 mt-60 mt-md-24">
            <div class="blogs-img w-50 w-sm-100">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/blog-4.png" alt="blog-cover">
            </div>
            <div class="blogs-content w-50 w-sm-100 d-flex flex-direction-column">
              <div class="d-flex justify-content-space-between">
                <div class="blogs-title">
                  <RouterLink
                    class="fz-32 fz-md-24 dark-red-color d-block"
                    to="/blog/content">
                    設計師獨享鏡框優惠
                  </RouterLink>
                  <h7 class="text-roboto fz-20 fz-md-16 fw-medium">
                    Sales for Designer
                  </h7>
                </div>
                <div class="blogs-date">
                  <p class="fw-medium">2020/01/18</p>
                </div>
              </div>
              <div class="blogs-text mt-16 mt-md-4">
                <p class="blogs-text-pc fz-20 fz-md-16">
                  2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯
                </p>
                <p class="blogs-text-md fz-20 fz-md-16">
                  2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，⋯⋯
                  <RouterLink
                    class="blogs-media-link dark-color"
                    to="/blog/content">
                    more
                  </RouterLink>
                </p>
              </div>
              <div class="blogs-link">
                <RouterLink
                  class="text-roboto dark-red-color fz-36 fw-black"
                  to="/blog/content">
                  MORE
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="blogs-card d-flex g-24 mt-60 mt-md-24">
            <div class="blogs-img w-50 w-sm-100">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/blog-5.png" alt="blog-cover">
            </div>
            <div class="blogs-content w-50 w-sm-100 d-flex flex-direction-column">
              <div class="d-flex justify-content-space-between">
                <div class="blogs-title">
                  <RouterLink
                    class="fz-32 fz-md-24 dark-red-color d-block"
                    to="/blog/content">
                    抵抗夏日大作戰
                  </RouterLink>
                  <h7 class="text-roboto fz-20 fz-md-16 fw-medium">
                    Summer Special
                  </h7>
                </div>
                <div class="blogs-date">
                  <p class="fw-medium">2019/08/07</p>
                </div>
              </div>
              <div class="blogs-text mt-16 mt-md-4">
                <p class="blogs-text-pc fz-20 fz-md-16">
                  2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯
                </p>
                <p class="blogs-text-md fz-20 fz-md-16">
                  2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，⋯⋯
                  <RouterLink
                    class="blogs-media-link dark-color"
                    to="/blog/content">
                    more
                  </RouterLink>
                </p>
              </div>
              <div class="blogs-link">
                <RouterLink
                  class="text-roboto dark-red-color fz-36 fw-black"
                  to="/blog/content">
                  MORE
                </RouterLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="d-flex card-row products-page-group justify-content-center mt-124 mt-md-80 mt-sm-64">
        <ul class="column d-flex">
          <li class="pagination">
            <a href="#" class="dark-color">上一頁</a>
          </li>
          <li class="pagination">
            <a href="#" class="dark-color">1</a>
          </li>
          <li class="pagination pagination-active">
            <a href="#" class="dark-color">2</a>
          </li>
          <li class="pagination">
            <a href="#" class="dark-color">3</a>
          </li>
          <li class="pagination">
            <a href="#" class="dark-color">4</a>
          </li>
          <li class="pagination">
            <a href="#" class="dark-color">5</a>
          </li>
          <li class="pagination">
            <a href="#" class="dark-color">下一頁</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
</script>
<style scoped>
</style>
