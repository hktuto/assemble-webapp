<template>
  <WithHeaderFooter background="/assets/menu/bg_howto.svg">
    <div class="pageContent">
      <h3 class="header">{{ t("terms.title") }}</h3>
      <ol>
        <li>{{ t("terms.t1") }}</li>
        <li>{{ t("terms.t2") }}</li>
        <li>{{ t("terms.t3") }}</li>
        <li>{{ t("terms.t4") }}</li>
        <li>{{ t("terms.t5") }}</li>
        <li>{{ t("terms.t6") }}</li>
      </ol>
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
