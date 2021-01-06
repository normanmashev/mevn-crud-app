import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/create",
		name: "Create",
		component: () => import("../views/Create.vue"),
	},
	{
		path: "/:id",
		name: "Post",
		component: () => import("../views/Post.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
