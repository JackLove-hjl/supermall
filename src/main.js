import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false

//安装toast插件(执行toast中index.js中install函数)
Vue.use(toast)

Vue.use(VueLazyLoad, {
    preLoad: 1,
    loading: require('assets/img/common/placeholder.png')
})

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')