<template>
  <ion-app>
    <ion-router-outlet :animated="false" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent, onBeforeMount } from "vue";
import { useApp } from "./state/useApp";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const { init, getDistrict } = useApp();
    const { locale } = useI18n({ useScope: "global" });
    locale.value = localStorage.getItem("appLocale") || "en";
    onBeforeMount(async () => {
      console.log("app init");
      await getDistrict();
      await init();
    });

    return {
      init,
      locale,
    };
  },
});
</script>

<style>
.pageContent {
  padding: 20px;
  /* height: 100%; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
}
.bgContainer {
  position: fixed;
  left: 0;
  right: 0;
  height: 300px;
  bottom: 40px;
  background-image: url(/assets/images/bg/bg_home.png);
  background-position: center bottom;
  background-size: cover;
  z-index: -1;
  overflow: visible;
}

.logoContainer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.logoContainer img {
  max-height: 60px;
}
.inputContainer {
  width: 100%;
  padding: 0px 20px;
  border-radius: 25px;
  border: 1px solid var(--ion-color-primary);
  margin-bottom: 10px;
  background-color: #fff;
  min-height: 50px;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
}

.ion-page {
  max-width: 640px;
  margin: 0 auto;
}
.link {
  color: var(--ion-color-primary);
}
html {
  background-color: #fff;
}

ion-select {
  --padding-start: 0px;
}
</style>
