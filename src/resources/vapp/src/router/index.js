import { createRouter, createWebHistory } from 'vue-router';
import store from "@/store/index";
import HomePage from '../pages/HomePage.vue';
// import auth from "@/middleware/auth";
import guest from "@/middleware/guest";
import auth from "@/middleware/auth";
import middlewarePipeline from "@/router/middlewarePipeline";


const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { middleware: [guest] },
    component: HomePage
  },
  {
    path: '/userlogin',
    name: 'Login',
    meta: { middleware: [guest] },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../pages/LoginPage.vue')
  },
  {
    path: '/userregister',
    name: 'Register',
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "register" */ '../pages/RegisterPage.vue')
  },
  {
    path: '/userhome',
    name: 'Authorized',
    meta: {middleware: [auth]},
    component: () => import(/* webpackChunkName: "authorized" */ '../pages/AuthHome.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "authorized" */ '../pages/AboutPage.vue')
  },
  {
    path: '/game',
    name: 'Game',
    meta: {middleware: [auth]},
    component: () => import(/* webpackChunkName: "authorized" */ '../pages/GamePage.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../pages/404.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, store };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router
