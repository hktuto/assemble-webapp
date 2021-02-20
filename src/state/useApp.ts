import { apiService } from "@/api";
import { reactive, toRefs } from "vue";

const state = reactive({
  firstLunched: true,
  locale: "en",
  districts: [] as any[],
});

export function useApp() {
  const init = () => {
    const applunched = localStorage.getItem("firstLunched");
    state.firstLunched = !!applunched;
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
    } = await apiService.post("/UserPanel/get_district");
    state.districts = district;
  };

  return {
    ...toRefs(state),
    init,
    setFirstLunch,
    getDistrict,
  };
}
