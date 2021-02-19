<template>
  <WithHeaderFooter background="assets/menu/bg_howto.svg">
    <div class="pageContent">
      <h3 class="header">{{ t("howto.title") }}</h3>
      <IonImg src="/assets/images/types-of-bin3.png"></IonImg>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import { IonImg } from "@ionic/vue";
export default defineComponent({
  components: { WithHeaderFooter, IonImg },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style></style>
