import dateFilter from "./dateFilter";
import descriptionFilter from "./descriptionFilter";
export default {
	install(Vue) {
		Vue.filter("dateFilter", dateFilter);
		Vue.filter("descriptionFilter", descriptionFilter);
	},
};
