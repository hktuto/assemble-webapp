<template>
  <WithHeaderFooter
    background="/assets/menu/bg_howto.svg"
    :header="t('howto.title')"
  >
    <div class="pageContent">
      <div class="logoContainer left">
        <IonImg src="/assets/images/icons/img_logo.png" />
      </div>
      <IonImg src="/assets/images/types-of-bin3.png" @click="goDetail"></IonImg>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import { IonImg } from "@ionic/vue";

import { Plugins } from "@capacitor/core";
const { Browser } = Plugins;

export default defineComponent({
  components: { WithHeaderFooter, IonImg },
  setup() {
    const { t, locale } = useI18n();
    const goDetail = async () => {
      const url =
        locale.value === "en"
          ? "https://loverecyclingplus.com/recycling/superadmin/pdf/types.pdf"
          : "https://loverecyclingplus.com/recycling/superadmin/pdf/chinese-types.pdf";
      await Browser.open({
        url,
      });
    };
    return {
      t,
      goDetail,
    };
  },
});
</script>

<style></style>
