<template>
  <nav class="products-nav-wrap">
    <div class="container">
      <div class="d-flex card-row products-nav-group w-100">
        <ul class="column d-flex w-100">
          <li class="w-33 text-align-center">
            <RouterLink
              class="text-roboto products-link fz-32 fz-md-24 fz-sm-16 dark-color fw-medium py-24 py-md-16"
              :class="{ 'products-link-active' : $route.path === '/products/optical' }"
              to="/products/optical">
              OPTICAL
            </RouterLink>
          </li>
          <li class="w-33 text-align-center">
            <RouterLink
              class="text-roboto products-link fz-32 fz-md-24 fz-sm-16 dark-color fw-medium py-24 py-md-16"
              :class="{ 'products-link-active' : $route.path === '/products/sunglasses' }"
              to="/products/sunglasses">
              SUNGLASSES
            </RouterLink>
          </li>
          <li class="w-33 text-align-center">
            <RouterLink
              class="text-roboto products-link fz-32 fz-md-24 fz-sm-16 dark-color fw-medium py-24 py-md-16"
              :class="{ 'products-link-active' : $route.path === '/products/functional' }"
              to="/">
              FUNCTIONAL
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header class="products-banner-wrap">
    <div class="d-flex products-banner-group">
      <div class="column w-50">
        <picture>
          <source srcset="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-header-sm-3.png" media="(max-width: 768px)">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-header-3.png" alt="glasses-image">
        </picture>
      </div>
      <div class="column w-50">
        <picture>
          <source srcset="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-header-sm-4.png" media="(max-width: 768px)">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-header-4.png" alt="glasses-image">
        </picture>
      </div>
    </div>
  </header>
  <section class="sunglasses-glasses-wrap text-align-center py-80 pt-sm-40 pb-sm-64">
    <div class="container">
      <h2 class="text-roboto fz-32 fz-sm-24 dark-color fw-medium">
        2020 NEW COLLECTION
      </h2>
      <h2 class="fz-32 fz-sm-24 dark-color">
        賽璐珞鈦金屬混合鏡框
      </h2>
      <div class="d-flex card-row sunglasses-glasses-group text-roboto justify-content-center mt-32">
        <div class="column w-33 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-7.png" alt="glasses-image">
          </div>
          <div class="d-flex justify-content-space-between">
            <p class="fz-24">BJ41600S</p>
            <p class="fz-24 primary-color fw-medium">NTD3,490</p>
          </div>
          <div class="d-flex">
            <div style="width: 24px;height: 24px;background-color: #5F3E2D;border-radius: 4px;"></div>
            <div style="width: 24px;height: 24px;background-color: #B75929;border-radius: 4px;margin-left: 8px;"></div>
          </div>
        </div>
        <div class="column w-33 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-8.png" alt="glasses-image">
          </div>
          <div class="d-flex justify-content-space-between">
            <p class="fz-24">BJ41600S</p>
            <p class="fz-24 primary-color fw-medium">NTD3,490</p>
          </div>
          <div class="d-flex">
            <div style="width: 24px;height: 24px;background-color: #5F3E2D;border-radius: 4px;"></div>
            <div style="width: 24px;height: 24px;background-color: #B75929;border-radius: 4px;margin-left: 8px;"></div>
          </div>
        </div>
        <div class="column w-33 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-9.png" alt="glasses-image">
          </div>
          <div class="d-flex justify-content-space-between">
            <p class="fz-24">BJ41600S</p>
            <p class="fz-24 primary-color fw-medium">NTD3,490</p>
          </div>
          <div class="d-flex">
            <div style="width: 24px;height: 24px;background-color: #5F3E2D;border-radius: 4px;"></div>
            <div style="width: 24px;height: 24px;background-color: #B75929;border-radius: 4px;margin-left: 8px;"></div>
          </div>
        </div>
        <div class="column w-33 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-10.png" alt="glasses-image">
          </div>
          <div class="d-flex justify-content-space-between">
            <p class="fz-24">BJ41600S</p>
            <p class="fz-24 primary-color fw-medium">NTD3,490</p>
          </div>
          <div class="d-flex">
            <div style="width: 24px;height: 24px;background-color: #5F3E2D;border-radius: 4px;"></div>
            <div style="width: 24px;height: 24px;background-color: #B75929;border-radius: 4px;margin-left: 8px;"></div>
          </div>
        </div>
        <div class="column w-33 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-11.png" alt="glasses-image">
          </div>
          <div class="d-flex justify-content-space-between">
            <p class="fz-24">BJ41600S</p>
            <p class="fz-24 primary-color fw-medium">NTD3,490</p>
          </div>
          <div class="d-flex">
            <div style="width: 24px;height: 24px;background-color: #5F3E2D;border-radius: 4px;"></div>
            <div style="width: 24px;height: 24px;background-color: #B75929;border-radius: 4px;margin-left: 8px;"></div>
          </div>
        </div>
        <div class="column w-33 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-12.png" alt="glasses-image">
          </div>
          <div class="d-flex justify-content-space-between">
            <p class="fz-24">BJ41600S</p>
            <p class="fz-24 primary-color fw-medium">NTD3,490</p>
          </div>
          <div class="d-flex">
            <div style="width: 24px;height: 24px;background-color: #5F3E2D;border-radius: 4px;"></div>
            <div style="width: 24px;height: 24px;background-color: #B75929;border-radius: 4px;margin-left: 8px;"></div>
          </div>
        </div>
      </div>
      <div class="d-flex card-row products-page-group justify-content-center mt-80 mt-sm-64">
        <ul class="column d-flex">
          <li class="pagination">
            <a href="#" >上一頁</a>
          </li>
          <li class="pagination">
            <a href="#">1</a>
          </li>
          <li class="pagination pagination-active">
            <a href="#">2</a>
          </li>
          <li class="pagination">
            <a href="#">3</a>
          </li>
          <li class="pagination">
            <a href="#">4</a>
          </li>
          <li class="pagination">
            <a href="#">5</a>
          </li>
          <li class="pagination">
            <a href="#">下一頁</a>
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
