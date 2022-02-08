import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const authState = store.state.auth;

const routes = [
  // Defaults
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Home.vue"),
    // If the user needs to be a guest to view this page.
    meta: {
      auth: true,
    },
  },
  // Login
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/SignIn.vue"),
    meta: {
      auth: false,
    },
  },
  {
    path: "/sign-up",
    name: "signup",
    component: () => import("@/views/SignUp.vue"),
    meta: {
      auth: false,
    },
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: () => import("@/views/ForgotPassword.vue"),
    meta: {
      auth: false,
    },
  },
  {
    path: "/reset-password",
    name: "resetPassword",
    component: () => import("@/views/ResetPassword.vue"),
    meta: {
      auth: false,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/logs/activity",
    name: "logs.activity",
    component: () => import("@/views/logs/Activity.vue"),
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  if (to.matched.some((m) => m.meta.auth) && !authState.authenticated) {
    /*
     * If the user is not authenticated and visits
     * a page that requires authentication, redirect to the login page
     */
    next({
      name: "login",
    });
  } else if (to.matched.some((m) => !m.meta.auth) && authState.authenticated) {
    /*
     * If the user is authenticated and visits
     * an guest page, redirect to the dashboard page
     */
    next({
      name: "dashboard",
    });
  } else if (to.matched.some((m) => m.meta.auth) && authState.authenticated) {
    store.dispatch("auth/checkSession");
    next();
  } else {
    next();
  }

  return false;
});

export default router;
