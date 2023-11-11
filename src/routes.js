import { createRouter, createWebHistory } from "vue-router"
import Chat from './components/Chat.vue'
// import NotFound from './components/Not.vue'
// import Setting from './components/other/setting.vue'
// import Login from './components/login.vue'
// import Sign from './components/signup.vue'
// import Inbox from './components/inbox.vue'

// import 

const router = createRouter({
	history: createWebHistory(),
	routes: [
		// { path: '/', component: Home},
		// { path: "/:id", component: import('./components/Chat.vue') },
		{ path: '/', component: import('./components/Home.vue')},
		{ path: "/login", component: import('./components/login.vue') },
		{ path: "/inbox", component: import('./components/inbox.vue') },
		{ path: "/:id", component: Chat },
		{ path: "/account", component: import('./components/signup.vue') },
		{ path: "/settings", component: import('./components/other/setting.vue') },
		{ path: "/:pathMatch(.*)*", component:import('./components/Not.vue')}
	],
})
export default router;