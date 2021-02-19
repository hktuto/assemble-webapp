import { createRouter, createWebHistory } from "@ionic/vue-router";
import { NavigationGuard, RouteRecordRaw } from "vue-router";
import { useApp } from "./state/useApp";
import { useUser } from "./state/useUser";
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
const TermsAndConditions = () => import("./views/TermsAndConditions.vue");
const ContactUs = () => import("./views/ContactUs.vue");
const ChangePlan = () => import("./views/ChangePlan.vue");

const needAuth: NavigationGuard = function(to: any, from: any, next: any) {
  const { isLogin } = useUser();
  if (!isLogin.value) {
    next({ name: "login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
};

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
    path: "/Landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Donation",
    name: "Donation",
    component: Donation,
  },
  {
    path: "/MyProfile",
    name: "MyProfile",
    component: MyProfile,
    beforeEnter: needAuth,
  },
  {
    path: "/HowTo",
    name: "HowTo",
    component: HowTo,
  },
  {
    path: "/Schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/OurServices",
    name: "OurServices",
    component: OurServices,
  },
  {
    path: "/TermsAndConditions",
    name: "TermsAndConditions",
    component: TermsAndConditions,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/ChangePlan",
    name: "ChangePlan",
    component: ChangePlan,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
