/*
 * @Author: Clloz
 * @Date: 2020-11-24 13:40:15
 * @LastEditTime: 2020-11-24 18:49:53
 * @LastEditors: Clloz
 * @Description:
 * @FilePath: /vue-shop/src/plugins/element.js
 * @博观而约取，厚积而薄发，日拱一卒，日进一寸。
 */
import Vue from 'vue';
import { Button, Form, FormItem, Input, Message } from 'element-ui';

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.prototype.$message = Message;
