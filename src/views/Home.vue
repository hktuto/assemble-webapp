<template>
  <WithFooter background="/assets/menu/bg_home.svg">
    <div class="pageContent">
      <div class="header">
        <img src="/assets/images/home_header.png" />
      </div>
      <div class="content">
        <IonButton
          v-if="!isLogin"
          expand="block"
          mode="ios"
          @click="$router.push({ name: 'OurServices' })"
        >
          {{ t("menu.ourservices") }}
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
          {{ t("menu.myprofile") }}
        </IonButton>
        <IonButton expand="block" mode="ios" @click="share">
          {{ t("menu.share") }}
        </IonButton>
        <IonButton v-if="isLogin" expand="block" mode="ios" @click="logout">
          {{ t("menu.logout") }}
        </IonButton>
        <IonButton
          class="language"
          size="small"
          mode="ios"
          @click="switchLanguage"
        >
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
import useUser from "@/state/useUser";

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
    const { isLogin, logout } = useUser();
    const { locale, t } = useI18n();
    const share = async () =>
      await Share.share({
        title: "love recycling plus 家點匯收",
        text:
          "We Aim to Facilitate And Encourage Recycling In Hong Kong 我們旨在促進和鼓勵回收 我們希望每個人都能為我們的社區，我們的星球和我們的孩子們儘自己的一份力量",
        url: "https://loverecyclingplus.com",
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
      logout,
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
