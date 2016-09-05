'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTouch from 'vue-touch';
import App from './app';
import routes from './route';
import * as filters from './filter';
import 'src/assets/fonts/iconfont.css';
import { Tabbar, TabItem, Header, Cell, Switch, Button, Actionsheet, InfiniteScroll } from 'mint-ui';
import { stopPolling } from 'src/bootstrap/utils';

window.timer = {};
VueTouch.config.swipe = {
  direction: 'horizontal'
};

Vue.use(InfiniteScroll);
Vue.use(VueRouter);
Vue.use(VueTouch);
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
Vue.component(Actionsheet.name, Actionsheet);

router.map(routes);
router.alias({
  '/': '/monitor'
});
router.beforeEach(({to, next}) => {
  stopPolling();
  next();
});
router.start(Vue.component('app', App), 'body');
