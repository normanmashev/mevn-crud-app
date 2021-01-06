import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import filters from "./filters";
import VueSweetalert2 from "vue-sweetalert2";

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
Vue.use(filters);

new Vue({
	router,
	render: h => h(App),
}).$mount("#app");
