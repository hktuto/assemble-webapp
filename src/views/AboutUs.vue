<template>
  <WithHeaderFooter background="/assets/menu/bg_aboutus.svg">
    <div class="pageContent">
      <div class="logoContainer left">
        <IonImg src="/assets/images/icons/img_logo.png" />
        <h3 class="header">{{ t("menu.aboutus") }}</h3>
      </div>

      <div class="content">
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
        url: "https://loverecyclingplus.com/",
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
</style>
