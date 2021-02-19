import { apiService } from "@/api";
import { reactive, toRefs } from "vue";

const state = reactive({
  isLogin: false,
  user: null,
});

export function useUser() {
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
  };
}
