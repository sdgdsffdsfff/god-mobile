'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import routes from './route';
import * as filters from './filter';
import 'src/assets/fonts/iconfont.css';
import { Tabbar, TabItem, Header, Cell, Switch, Button } from 'mint-ui';

Vue.use(VueRouter);
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
const router = new VueRouter({
  linkActiveClass: 'active'
});

Vue.component(Switch.name, Switch);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);

router.map(routes);
router.start(Vue.component('app', App), 'body');
