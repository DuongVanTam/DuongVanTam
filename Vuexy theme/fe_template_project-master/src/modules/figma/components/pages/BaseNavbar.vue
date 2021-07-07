<template>
  <div class="header__navbar">
    <div class="container-row">
      <div class="row">
        <div class="col-md-7 col-lg-7 col-xl-8">
          <span class="header__navbar__link">Giới thiệu</span>
          <span class="header__navbar__link">Bộ Trưởng</span>
          <span class="header__navbar__link">Dịch vụ công</span>
          <span class="header__navbar__link">Tin tức <img src="../../assets/images/img/img_17.png"></span>
        </div>
        <div class="col-md-5 col-lg-5 col-xl-4">
          <div class="header__navbar--flex">
            <div class="header__navbar--flex__group">
              <img src="../../assets/images/img/Path.png">
              <span class="header__navbar__link ">Đường dây nóng</span>
            </div>
            <div class="header__navbar--flex__group ">
              <i
                class="fa fa-address-book"
                style="color: white"
              />
              <span class="header__navbar__link ">Danh bạ điện thoại</span>
            </div>
            <div class="header__navbar--flex__group">
              <span class="header__navbar__link ">Chỉnh cỡ chữ: A a</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseNavbar',
}
</script>

<style scoped>
.header__navbar{
  background-color: #DB353A;
  height: 38px;
}
.header__navbar__link{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.85);
  margin-right: 20px;
  line-height: 38px;
}
.header__navbar--flex{
  display: flex;
  justify-content: space-between;
}
.container-row{
  padding: 0 30px;
}
</style>
