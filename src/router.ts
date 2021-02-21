import { createRouter, createWebHistory } from "@ionic/vue-router";
import { NavigationGuard, RouteRecordRaw } from "vue-router";
import { useApp } from "./state/useApp";
import useUser from "./state/useUser";
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
const ForgetPassword = () => import("./views/ForgetPassword.vue");
const OTP = () => import("./views/otp.vue");
const RegisterPayment = () => import("./views/RegisterPayment.vue");
const DonationComplete = () => import("./views/DonationComplete.vue");
const Thankyou = () => import("./views/Thankyou.vue");

// pdf

const PlanPdf = () => import("./views/PlanPdf.vue");
const HowToPdf = () => import("./views/HowToPdf.vue");

const needAuth: NavigationGuard = async function(
  to: any,
  from: any,
  next: any
) {
  const { init } = useApp();
  const { isLogin } = useUser();
  await init();
  if (!isLogin.value) {
    next({ name: "Login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
};

const isAppReady: NavigationGuard = async function(
  to: any,
  from: any,
  next: any
) {
  const { init, firstLunched } = useApp();
  await init();
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
    name: "OTP",
    path: "/OTP",
    component: OTP,
  },
  {
    name: "RegisterPayment",
    path: "/RegisterPayment",
    component: RegisterPayment,
  },
  {
    path: "/Donation",
    name: "Donation",
    component: Donation,
  },
  {
    path: "/DonationComplete",
    name: "DonationComplete",
    component: DonationComplete,
  },
  {
    path: "/Thankyou",
    name: "Thankyou",
    component: Thankyou,
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
    path: "/HowToPdf",
    name: "HowToPdf",
    component: HowToPdf,
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
    path: "/PlanPdf",
    name: "PlanPdf",
    component: PlanPdf,
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
    beforeEnter: needAuth,
  },
  {
    path: "/ForgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
