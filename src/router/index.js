/*
 * @Author: Clloz
 * @Date: 2020-11-24 13:32:09
 * @LastEditTime: 2020-11-24 18:28:09
 * @LastEditors: Clloz
 * @Description:
 * @FilePath: /vue-shop/src/router/index.js
 * @博观而约取，厚积而薄发，日拱一卒，日进一寸。
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
];

const router = new VueRouter({
    routes,
});
console.log(Vue.prototype.$http);
//路由导航守卫
router.beforeEach((to, from, next) => {
    // next() 表示放行
    console.log(to, from);
    if (to.path === '/login') return next();
    const tokenStr = window.sessionStorage.getItem('token');
    if (!tokenStr) return next('/login');
    next();
});

export default router;
