import { createRouter, createWebHistory } from "@ionic/vue-router";
import { NavigationGuard, RouteRecordRaw } from "vue-router";
import { useApp } from "./state/useApp";
// import { useUser } from "./state/useUser";
import Home from "./views/Home.vue";
import Landing from "./views/Landing.vue";

const Login = () => import("./views/Login.vue");
const Register = () => import("./views/Register.vue");
const Donation = () => import("./views/Donation.vue");
const HowTo = () => import("./views/HowTo.vue");
const Schedule = () => import("./views/Schedule.vue");
const AboutUs = () => import("./views/AboutUs.vue");
const MyProfile = () => import("./views/MyProfile.vue");
const OurServices = () => import("./views/OurServices.vue");

// const needAuth: NavigationGuard = function(to: any, from: any, next: any) {
//   const { isLogin } = useUser();
//   if (!isLogin.value) {
//     next({ name: "login", query: { redirect: to.fullPath } });
//   } else {
//     next();
//   }
// };

const isAppReady: NavigationGuard = function(to: any, from: any, next: any) {
  const { init, firstLunched } = useApp();
  init();
  if (firstLunched.value) {
    next({ name: "Home" });
  } else {
    next({ name: "Landing" });
  }
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Landing,
    beforeEnter: isAppReady,
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/regiser",
    name: "Register",
    component: Register,
  },
  {
    path: "/donation",
    name: "Donation",
    component: Donation,
  },
  {
    name: "MyProfile",
    path: "/my-profile",
    component: MyProfile,
  },
  {
    name: "HowTo",
    path: "/how-to",
    component: HowTo,
  },
  {
    name: "Schedule",
    path: "/Schedule",
    component: Schedule,
  },
  {
    name: "AboutUs",
    path: "/AboutUs",
    component: AboutUs,
  },
  {
    name: "OurServices",
    path: "/OurServices",
    component: OurServices,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
