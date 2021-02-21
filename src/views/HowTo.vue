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
import { useRouter } from "vue-router";

// import { Plugins } from "@capacitor/core";
// const { Browser } = Plugins;

export default defineComponent({
  components: { WithHeaderFooter, IonImg },
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const goDetail = async () => {
      router.push({
        name: "HowToPdf",
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
