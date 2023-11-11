import { createRouter, createWebHistory } from "vue-router"
import Home from './components/Home.vue'
import Chat from './components/Chat.vue'
import NotFound from './components/Not.vue'
import Setting from './components/other/setting.vue'
import Login from './components/login.vue'
import Sign from './components/signup.vue'
import Inbox from './components/inbox.vue'

// import 

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Home },
		{ path: "/login", component: Login },
		{ path: "/inbox", component: Inbox },
		{ path: "/:id", component: Chat },
		{ path: "/account", component: Sign },
		{ path: "/settings", component: Setting },
		{ path: "/:pathMatch(.*)*", component: NotFound }
	],
})
export default router;