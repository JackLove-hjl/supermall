<template>
  <div id="app">
    <main-tab-bar class="tab-bar"></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'


export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
.tab-bar {
  z-index: 10;
}
</style>
