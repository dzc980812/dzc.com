import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import Home from "@/components/Home";
import Study from "@/components/Study";

Vue.use(Router);
export interface ICustomRouteOption extends RouteConfig {
	// 在导航栏显示的文字
	routeName: string;
	show: boolean;
	hide: boolean;
}

export default new Router({
	mode: "history",
	// base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			redirect: "/home"
		},
		{
			path: "/home",
			name: "home",
			routeName: "主页",
			component: Home,
			show: true
		},
		{
			path: "/Study",
			name: "Study",
			routeName: "学习",
			component: Study,
			show: true
		}
		// {
		//   path: '/about',
		//   name: 'about',
		//   // route level code-splitting
		//   // this generates a separate chunk (about.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: () =>
		//     import(/* webpackChunkName: "about" */ '@/components/Header')
		// }
	] as ICustomRouteOption[]
});
