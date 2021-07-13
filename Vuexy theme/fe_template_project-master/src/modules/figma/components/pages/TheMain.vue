<template>
  <div class="blockContainer">
    <BaseHeader />
    <div class="main">
      <div class="container-row mal">
        <div class="row">
          <ContentLeft />
          <ContentRight />
        </div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>
<script>
import BaseHeader from '@/modules/figma/components/pages/BaseHeader.vue'
import BaseFooter from '@/modules/figma/components/pages/BaseFooter.vue'
import ContentLeft from '@/modules/figma/components/pages/ContentLeft.vue'
import ContentRight from '@/modules/figma/components/pages/ContentRight.vue'

export default {
  name: 'TheMain',
  components: {
    BaseHeader,
    BaseFooter,
    ContentLeft,
    ContentRight,
  },
}
</script>

<style >
.blockContainer{
  width: 1440px;
  margin: auto;
}

@media screen and (max-width: 1320px) {
  .blockContainer{
    width: 1140px;
    margin: auto;
  }
}
@media screen and (max-width: 1200px) {
  .blockContainer{
    width: 960px;
    margin: auto;
  }
  .header__content-top__name{
    font-size: 16px;
  }
  .main__card--height{
    height: 550px;
  }
  .main__header-title{
    font-size: 22px;
  }
}
@media screen and (max-width: 992px) {
  .blockContainer{
    width: 720px;
    margin: auto;
  }
  .header__content--line-height{
    line-height: unset;
  }
  .header__content-top{
    height: unset;
  }
}
@media screen and (max-width: 768px) {
  .blockContainer{
    width: 540px;
    margin: auto;
  }
  .header__content-top{
    height: unset;
  }
}
.mal{
  padding: 0 30px 500px 30px;
  background: rgb(255, 255, 255);
}
</style>
