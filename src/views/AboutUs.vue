<template>
  <WithHeaderFooter
    background="/assets/menu/bg_aboutus.svg"
    :header="t('menu.aboutus')"
  >
    <div class="pageContent">
      <div class="logoContainer left">
        <IonImg src="/assets/images/icons/img_logo.png" />
      </div>

      <div class="content center">
        <IonButton expand="block" mode="ios" @click="goAboutUs">
          {{ t("menu.aboutus") }}
        </IonButton>
        <IonButton
          expand="block"
          mode="ios"
          @click="$router.push({ name: 'TermsAndConditions' })"
        >
          {{ t("terms.title") }}
        </IonButton>
        <IonButton
          expand="block"
          mode="ios"
          @click="$router.push({ name: 'ContactUs' })"
        >
          {{ t("contactus.title") }}
        </IonButton>
      </div>
    </div>

    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { IonButton, IonImg } from "@ionic/vue";
import { useI18n } from "vue-i18n";
import { Plugins } from "@capacitor/core";
const { Browser } = Plugins;
export default defineComponent({
  components: { WithHeaderFooter, IonButton, IonImg },
  setup() {
    const { t } = useI18n();
    const goAboutUs = async () =>
      await Browser.open({
        url: "https://loverecyclingplus.com/recycling/website/",
      });
    return {
      t,
      goAboutUs,
    };
  },
});
</script>

<style scoped>
.content {
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 20px;
}
.content > .button-block {
  width: 100%;
  margin: 5px 0;
}

.bgContainer {
  background-image: url(/assets/images/bg/bg_about.png);
}

.pageContent {
  height: 100%;
  padding-bottom: 100px;
}
.content.center {
  justify-content: center;
  align-items: center;
}
</style>
