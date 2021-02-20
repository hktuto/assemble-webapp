/* eslint-disable @typescript-eslint/camelcase */
import { apiService } from "@/api";
import { reactive, toRefs } from "vue";

const state = reactive({
  isLogin: false,
  user: null as any,
  plan: 99,
});

export type RegisterForm = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  district: string;
  address: string;
  password: string;
};

export type OTPForm = { email_id: any; otp: string };

export default function useUser() {
  const signin = async (phone: string, password: string) => {
    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("password", password);
    const { data } = await apiService.post(
      "/UserPanel/post_customer_login",
      formData
    );
    if (data.status) {
      localStorage.setItem("api_token", data.auth_key);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("phone", data.phonenumber);
      localStorage.setItem("email", data.email_id);
      localStorage.setItem("rate", data.plan);
      state.isLogin = true;
      state.user = data;
    } else {
      state.isLogin = false;
      throw data.message;
    }
  };

  const register = async (form: RegisterForm) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(form)) {
      formData.append(key, value);
    }
    const { data } = await apiService.post(
      "UserPanel/post_customer_register",
      formData
    );
    if (data.status) {
      localStorage.setItem("user_id2", data.user_id);
      localStorage.setItem("email", form.email);
      state.user = {
        user_id: data.user_id,
        email: form.email,
      };
    } else {
      throw data.message;
    }
  };

  const submitOTP = async (form: OTPForm) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(form)) {
      formData.append(key, value);
    }
    const { data } = await apiService.post("/UserPanel/checkotp", form);
    if (!data.status) {
      throw data.message;
    }
  };

  const logout = () => {
    state.user = null;
    localStorage.removeItem("api_token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("phone");
    localStorage.removeItem("email");
    localStorage.removeItem("rate");
    state.isLogin = false;
  };

  return {
    ...toRefs(state),
    signin,
    logout,
    register,
    submitOTP,
  };
}
