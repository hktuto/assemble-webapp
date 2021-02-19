<template>
  <WithHeaderFooter>
    <div class="pageContent">
      <h1>{{ $t("menu.comingsoon") }}</h1>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  components: { WithHeaderFooter },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style></style>
