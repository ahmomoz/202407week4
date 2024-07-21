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
          <source srcset="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-header-sm-1.png" media="(max-width: 768px)">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-header-1.png" alt="glasses-image">
        </picture>
      </div>
      <div class="column w-50">
        <picture>
          <source srcset="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-header-sm-2.png" media="(max-width: 768px)">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-header-2.png" alt="glasses-image">
        </picture>
      </div>
    </div>
  </header>
  <section class="optical-glasses-wrap text-align-center py-80 pt-sm-40 pb-sm-64">
    <div class="container">
      <h2 class="text-roboto fz-32 fz-sm-24 dark-color fw-medium">
        Celluloid Combi
      </h2>
      <h2 class="fz-32 fz-sm-24 dark-color">
        賽璐珞鈦金屬混合鏡框
      </h2>
      <div class="d-flex card-row optical-glasses-group text-roboto mt-32">
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-1.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-2.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-3.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-4.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-1.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-2.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-3.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-4.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-1.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-2.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-3.png" alt="glasses-image">
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
        <div class="column w-25 w-lg-50 w-sm-100">
          <div class="product-card-img">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-4.png" alt="glasses-image">
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
