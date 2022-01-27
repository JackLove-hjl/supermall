<template>
  <tab-bar>
    <!-- 用户可传入activeColor用户控制底部文字颜色 -->
    <tab-bar-item path="/home">
      <img src="~assets/img/tabbar/home.png"
           alt=""
           slot="item-icon">
      <img src="~assets/img/tabbar/home_red.png"
           alt=""
           slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.png"
           alt=""
           slot="item-icon">
      <img src="~assets/img/tabbar/category_red.png"
           alt=""
           slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopCar">
      <img src="~assets/img/tabbar/shopCar.png"
           alt=""
           slot="item-icon">
      <div slot="item-text">购物车</div>
      <img src="~assets/img/tabbar/shopCar_red.png"
           alt=""
           slot="item-icon-active">
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img src="~assets/img/tabbar/mine.png"
           alt=""
           slot="item-icon">
      <div slot="item-text">我的</div>
      <img src="~assets/img/tabbar/mine_red.png"
           alt=""
           slot="item-icon-active">
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: "mainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>