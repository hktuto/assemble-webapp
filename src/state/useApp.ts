import { reactive, toRefs } from "vue";

const state = reactive({
  firstLunched: true,
  locale: "en",
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

  return {
    ...toRefs(state),
    init,
    setFirstLunch,
  };
}
