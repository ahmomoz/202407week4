<template>
  <section class="stores-wrap py-80 pt-sm-40 pb-sm-64">
    <div class="container">
      <div class="d-flex card-row">
        <div class="column">
          <div class="wrap-title mt-16 mt-sm-0">
            <h2 class="fz-48 fz-sm-24 fw-bold ms-16">
              門市據點
            </h2>
          </div>
        </div>
      </div>
      <div class="d-flex card-row stores-select-group mt-32">
        <div class="column w-100 d-flex align-items-center">
          <h6 class="fz-24 fz-sm-16">
            選擇地區
          </h6>
          <select name="area" class="ms-16" style="font-size:18px;">
            <option value="Taipei">台北市</option>
            <option value="Taichung">台中市</option>
            <option value="Kaohsiung">高雄市</option>
          </select>
        </div>
      </div>
      <ul class="d-flex card-row stores-card-group mt-40 mt-sm-24">
        <li class="column">
          <div class="stores-card d-flex flex-direction-column">
            <div class="stores-img ratio">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/store-1.png" alt="store-image">
            </div>
            <div class="stores-name py-8 px-16">
              <h6 class="fz-24 black-color ">
                台北中山旗艦店
              </h6>
            </div>
            <div class="stores-content black-color d-flex flex-direction-column p-16">
              <div class="stores-tel d-flex">
                <img
                  src="https://i.imgur.com/k4v8f0z.png"
                  alt="phone-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">電話：(02)000-1234</p>
              </div>
              <div class="stores-time d-flex">
                <img
                  src="https://i.imgur.com/05r855u.png"
                  alt="time-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">營業時間：10:00-21:00</p>
              </div>
              <div class="stores-address d-flex">
                <img
                  src="https://i.imgur.com/PZUjwjE.png"
                  alt="address-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">地址：台北市中山區南京東路25巷2-1號</p>
              </div>
            </div>
            <RouterLink
              class="stores-link light-color text-align-center py-16"
              to="/stores/content">
              詳細資訊
            </RouterLink>
          </div>
        </li>
        <li class="column">
          <div class="stores-card d-flex flex-direction-column">
            <div class="stores-img ratio">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/store-2.png" alt="store-image">
            </div>
            <div class="stores-name py-8 px-16">
              <h6 class="fz-24 black-color">
                台北綠園店
              </h6>
            </div>
            <div class="stores-content black-color d-flex flex-direction-column p-16">
              <div class="stores-tel d-flex">
                <img
                  src="https://i.imgur.com/k4v8f0z.png"
                  alt="phone-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">電話：(02)000-2345</p>
              </div>
              <div class="stores-time d-flex">
                <img
                  src="https://i.imgur.com/05r855u.png"
                  alt="time-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">營業時間：10:00-21:00</p>
              </div>
              <div class="stores-address d-flex">
                <img
                  src="https://i.imgur.com/PZUjwjE.png"
                  alt="address-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">地址：台北市中正區復興南路 132-1 號</p>
              </div>
            </div>
            <RouterLink
              class="stores-link light-color text-align-center py-16"
              to="/stores/content">
              詳細資訊
            </RouterLink>
          </div>
        </li>
        <li class="column">
          <div class="stores-card d-flex flex-direction-column">
            <div class="stores-img ratio">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/store-3.png" alt="store-image">
            </div>
            <div class="stores-name py-8 px-16">
              <h6 class="fz-24 black-color ">
                台中清水旗艦店
              </h6>
            </div>
            <div class="stores-content black-color d-flex flex-direction-column p-16">
              <div class="stores-tel d-flex">
                <img
                  src="https://i.imgur.com/k4v8f0z.png"
                  alt="phone-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">電話：(02)000-1234</p>
              </div>
              <div class="stores-time d-flex">
                <img
                  src="https://i.imgur.com/05r855u.png"
                  alt="time-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">營業時間：10:00-21:00</p>
              </div>
              <div class="stores-address d-flex">
                <img
                  src="https://i.imgur.com/PZUjwjE.png"
                  alt="address-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">地址：台中市清水區經南一路 23 號 8 樓</p>
              </div>
            </div>
            <RouterLink
              class="stores-link light-color text-align-center py-16"
              to="/stores/content">
              詳細資訊
            </RouterLink>
          </div>
        </li>
        <li class="column">
          <div class="stores-card d-flex flex-direction-column">
            <div class="stores-img ratio">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/store-4.png" alt="store-image">
            </div>
            <div class="stores-name py-8 px-16">
              <h6 class="fz-24 black-color ">
                高雄中正形象店
              </h6>
            </div>
            <div class="stores-content black-color d-flex flex-direction-column p-16">
              <div class="stores-tel d-flex">
                <img
                  src="https://i.imgur.com/k4v8f0z.png"
                  alt="phone-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">電話：(07)000-2345</p>
              </div>
              <div class="stores-time d-flex">
                <img
                  src="https://i.imgur.com/05r855u.png"
                  alt="time-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">營業時間：10:00-21:00</p>
              </div>
              <div class="stores-address d-flex">
                <img
                  src="https://i.imgur.com/PZUjwjE.png"
                  alt="address-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">地址：高雄市苓雅區中正路 38 號 12 樓</p>
              </div>
            </div>
            <RouterLink
              class="stores-link light-color text-align-center py-16"
              to="/stores/content">
              詳細資訊
            </RouterLink>
          </div>
        </li>
        <li class="column">
          <div class="stores-card d-flex flex-direction-column">
            <div class="stores-img ratio">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/store-5.png" alt="store-image">
            </div>
            <div class="stores-name py-8 px-16">
              <h6 class="fz-24 black-color ">
                高雄夢時代店
              </h6>
            </div>
            <div class="stores-content black-color d-flex flex-direction-column p-16">
              <div class="stores-tel d-flex">
                <img
                  src="https://i.imgur.com/k4v8f0z.png"
                  alt="phone-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">電話：(07)000-1234</p>
              </div>
              <div class="stores-time d-flex">
                <img
                  src="https://i.imgur.com/05r855u.png"
                  alt="time-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">營業時間：10:00-21:00</p>
              </div>
              <div class="stores-address d-flex">
                <img
                  src="https://i.imgur.com/PZUjwjE.png"
                  alt="address-icon"
                  class="me-10 mt-4"
                  style="width: 24px;">
                <p class="fz-20">地址：高雄市前鎮區中華一路 63 號 6 樓</p>
              </div>
            </div>
            <RouterLink
              class="stores-link light-color text-align-center py-16"
              to="/stores/content">
              詳細資訊
            </RouterLink>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
</script>
<style scoped>
</style>
