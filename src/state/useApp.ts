import { apiService } from "@/api";
import { reactive, toRefs } from "vue";
import useUser from "./useUser";

const state = reactive({
  firstLunched: true,
  locale: "en",
  districts: [] as any[],
});

export function useApp() {
  const { validate } = useUser();
  const init = async () => {
    console.log("useApp init run");
    const applunched = localStorage.getItem("firstLunched");
    state.firstLunched = !!applunched;
    const user_id = localStorage.getItem("user_id");
    const api_token = localStorage.getItem("api_token");
    console.log(user_id, api_token);
    if (user_id && api_token) {
      await validate(user_id, api_token);
    }
  };

  const setFirstLunch = (boo: boolean) => {
    if (boo) {
      localStorage.setItem("firstLunched", "true");
    } else {
      localStorage.removeItem("firstLunched");
    }
    state.firstLunched = boo;
  };

  const getDistrict = async () => {
    const {
      data: { district },
    } = await apiService.post("UserPanel/get_district");
    state.districts = district;
  };

  return {
    ...toRefs(state),
    init,
    setFirstLunch,
    getDistrict,
  };
}
