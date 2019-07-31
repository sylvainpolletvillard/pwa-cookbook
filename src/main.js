import Vue from "vue"
import VueRouter from "vue-router"
import VueI18n from 'vue-i18n'

import { MdApp, MdButton, MdContent, MdIcon, MdDrawer, MdToolbar, MdList, MdMenu } from "vue-material/dist/components";
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import { directive as onClickaway } from 'vue-clickaway';

import App from "./App"
import { router } from "./routes"
import { localStore } from "./utils/store";

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(MdApp);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdIcon);
Vue.use(MdDrawer);
Vue.use(MdToolbar);
Vue.use(MdList);
Vue.use(MdMenu);

Vue.directive("clickaway", onClickaway);

export default new Vue({
	el: '#app',
	render: h => h(App),
	router,
	i18n: new VueI18n({
		locale: localStore.get(localStore.keys.PREF_LOCALE) || (navigator.language === "fr" ? "fr" : "en"),
		fallbackLocale: "en",
		messages: {}
	})
});
