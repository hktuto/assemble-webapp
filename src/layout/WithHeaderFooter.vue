<template>
  <IonPage>
    <IonHeader :translucent="true" mode="ios">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <IonTitle>{{ title }}</IonTitle>
      </ion-toolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <slot></slot>
    </ion-content>
    <AppFooter></AppFooter>
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
  },
});
</script>
