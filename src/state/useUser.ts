import { reactive, toRefs } from "vue";

const state = reactive({
  isLogin: false,
  user: null,
});

export function useUser() {
  return {
    ...toRefs(state),
  };
}
