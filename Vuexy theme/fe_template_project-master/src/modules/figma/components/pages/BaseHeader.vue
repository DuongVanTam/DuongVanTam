<template>
  <div class="header">
    <div class="header__content-top">
      <div class="container-row">
        <div class="row">
          <div class="col-md-12 col-lg-7 col-xl-8 header__content--line-height">
            <img
              src="../../assets/images/img/log.png"
              class="logo"
            >
            <p class="header__content-top__name">
              Cổng thông tin điện tử Bộ kế hoạch và đầu tư
            </p>
          </div>
          <div class="col-md-12 col-lg-5 col-xl-4 header__content--line-height2">
            <span class="header__content-top__link">Liên kết</span>
            <span class="header__content-top__link">RSS</span>
            <span class="header__content-top__link">Sơ đồ</span>
            <span class="header__content-top-right">
              Ngôn ngữ: Tiếng Việt
              <img src="../../assets/images/img/img_15.jpg">
            </span>
          </div>
        </div>
      </div>
    </div>
    <BaseNavbar />
  </div>
</template>
<script>
import BaseNavbar from '@/modules/figma/components/pages/BaseNavbar.vue'

export default {
  name: 'Header',
  components: {
    BaseNavbar,
  },
}
</script>

<style scoped>

.logo{
  width: 49px;
  height: 56px;
  background:none;
  margin-bottom: auto;
  margin-top: auto;
}
.container-row{
  padding: 0 30px;
}
.header__content-top__name{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  margin-left: 9px;
  color: #DB353A;
  margin-bottom: auto;
  margin-top: auto;
}
.header__content-top__link{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  color: #DB353A;
  margin-right: 20px;
}
.header__content-top-right{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  color: #DB353A;
  float: right;
}
.header__content-top{
  background: #FFFFFF;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  height: 76px;
}
.header__content--line-height{
  display: flex;
}
.header__content--line-height2{
  line-height: 76px;
}
.header__navbar--line-height{
  line-height: 38px;
}
.main__header-border{
  margin-bottom: 15px;

}

.fa-circle{
  background-color: white;
  border: 2px solid #DB353A;
  color: white;
  margin-right: 15px;
}

@media screen and (max-width: 576px) {
  .main__image-content{
    margin-bottom: 15px;
  }
  .main__image--fit{
    max-width: 50%;
  }
  .header__content-top{
    height: unset;
  }
}
@media screen and (max-width: 992px) {

  .header__content--line-height{
    line-height: unset !important;
  }
  .header__content-top{
    height: unset;
  }
}
</style>
