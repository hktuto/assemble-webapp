<template>
  <WithFooter>
    <div class="pageContent">
      <div class="header">
        <img src="assets/images/home_header.png" />
      </div>
      <div class="content">
        <IonButton
          expand="block"
          mode="ios"
          @click="$router.push({ name: 'OurServices' })"
        >
          {{ t("menu.our_services") }}
        </IonButton>
        <IonButton
          v-if="!isLogin"
          expand="block"
          mode="ios"
          @click="$router.push({ name: 'Login' })"
        >
          {{ t("menu.login") }}
        </IonButton>
        <IonButton
          expand="block"
          mode="ios"
          @click="$router.push({ name: 'Donation' })"
        >
          {{ t("menu.donation") }}
        </IonButton>
        <IonButton
          v-if="isLogin"
          expand="block"
          mode="ios"
          @click="$router.push({ name: 'MyProfile' })"
        >
          {{ t("menu.my_profile") }}
        </IonButton>
        <IonButton expand="block" mode="ios" @click="share">
          {{ t("menu.share") }}
        </IonButton>
        <IonButton size="small" mode="ios" @click="switchLanguage">
          {{ t("language.switch") }}
        </IonButton>
      </div>
    </div>
    <div class="bgContainer"></div>
  </WithFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton } from "@ionic/vue";
import WithFooter from "@/layout/WithFooter.vue";
import { useUser } from "@/state/useUser";

import { Plugins } from "@capacitor/core";
import { useI18n } from "vue-i18n";
const { Share } = Plugins;

export default defineComponent({
  name: "Home",
  components: {
    WithFooter,
    IonButton,
  },
  setup() {
    const { isLogin } = useUser();
    const { locale, t } = useI18n();
    const share = async () =>
      await Share.share({
        title: "this app is awesome",
        text: "really awesome app",
        url: "http://loverecyclingplus.com/",
      });
    const switchLanguage = async () => {
      locale.value = locale.value === "en" ? "zh" : "en";
      localStorage.setItem("appLocale", locale.value);
    };
    return {
      isLogin,
      share,
      switchLanguage,
      t,
    };
  },
});
</script>

<style scoped>
.content {
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}
.content > * {
  width: 100%;
  margin: 5px 0;
}
</style>
