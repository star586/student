import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mock from './mock'
import './plugins/element.js'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

//刷新保存状态
if (sessionStorage.getItem("store")) {
    store.replaceState(
        Object.assign({},
            store.state,
            JSON.parse(sessionStorage.getItem("store"))
        )
    );
    sessionStorage.removeItem("store")
}

//监听，在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("store", JSON.stringify(store.state));
});
new Vue({
    router,
    store,
    mock,
    render: h => h(App)
}).$mount('#app')