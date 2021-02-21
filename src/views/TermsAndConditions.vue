<template>
  <WithHeaderFooter
    :header="t('terms.title')"
    background="/assets/menu/bg_aboutus.svg"
  >
    <div class="pageContent">
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

<style scoped>
li {
  font-size: 12px;
  line-height: 1.2;
  margin-bottom: 10px;
}
.bgContainer {
  background-image: url(/assets/images/bg/bg_about.png);
}
</style>
