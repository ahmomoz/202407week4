<template>
  <section class="stores-content-wrap py-80 pt-sm-40 pb-sm-64">
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
            選擇分店
          </h6>
          <select name="area" class="ms-16" style="font-size:18px;">
            <option value="TaipeiZhongshan">台北中山旗艦店</option>
            <option value="TaipeiGreen">台北綠園店</option>
            <option value="TaichungWater">台中清水旗艦店</option>
          </select>
        </div>
      </div>
      <div class="d-flex card-row stores-content-group mt-40 mt-sm-24">
        <div class="column d-flex flex-direction-column">
          <div class="stores-card d-flex flex-direction-column">
            <div class="stores-img">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/store-1.png" alt="store-image">
            </div>
            <div class="stores-text">
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
            </div>
          </div>
        </div>
        <div class="column d-flex flex-direction-column mt-md-24">
          <img src="https://i.imgur.com/X35VW9X.png" alt="store-map">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      modalActive: false
    }
  },
  methods: {
    openModal () {
      this.modalActive = true
    },
    closeModal () {
      this.modalActive = false
    }
  }
}
</script>
<style scoped>
</style>
