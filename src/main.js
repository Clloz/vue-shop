/*
 * @Author: Clloz
 * @Date: 2020-11-24 13:32:09
 * @LastEditTime: 2020-11-24 17:40:30
 * @LastEditors: Clloz
 * @Description:
 * @FilePath: /vue-shop/src/main.js
 * @博观而约取，厚积而薄发，日拱一卒，日进一寸。
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import './plugins/element.js';
import axios from 'axios';

import './assets/global.css';
import './assets/fonts/iconfont.css';

// 配置请求根路径
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
