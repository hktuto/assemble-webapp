<template>
  <IonPage>
    <IonHeader :translucent="true" mode="ios">
      <ion-toolbar>
        <ion-buttons name="start">
          <ion-back-button :text="t('action.back')"></ion-back-button>
        </ion-buttons>
        <IonTitle>{{ title }}</IonTitle>
      </ion-toolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <slot></slot>
    </ion-content>
    <AppFooter :background="background"></AppFooter>
  </IonPage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonBackButton,
} from "@ionic/vue";
import AppFooter from "@/components/AppFooter.vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    AppFooter,
    IonHeader,
    IonButtons,
    IonTitle,
    IonBackButton,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "assets/menu/bg_home.svg",
    },
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>
