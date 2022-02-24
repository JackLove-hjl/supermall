import Toast from './Toast'

const obj = {}

//默认会把Vue传递过来
obj.install = function(Vue) {
    //1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    //2.new的方式创建一个组件对象
    const toast = new toastConstructor()

    //3.将组件对象手动挂载到元素上
    toast.$mount(document.createElement('div'))

    //4.toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}

export default obj