<template>
  <ion-app>
    <ion-router-outlet :animated="false" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import { useApp } from "./state/useApp";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const { init } = useApp();
    const { locale } = useI18n({ useScope: "global" });
    locale.value = localStorage.getItem("appLocale") || "en";
    return {
      init,
      locale,
    };
  },
});
</script>

<style>
.pageContent {
  padding: 20px 20px 120px 20px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
}
.bgContainer {
  position: fixed;
  left: 0;
  right: 0;
  height: 180px;
  bottom: 40px;
  background-image: url(/assets/images/home/home_bg.png);
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
  padding: 0px 10px;
  border-radius: 25px;
  border: 1px solid var(--ion-color-primary);
  margin-bottom: 10px;
}
</style>
