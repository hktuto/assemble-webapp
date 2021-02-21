<template>
  <IonPage>
    <IonHeader :translucent="true" mode="ios">
      <ion-toolbar>
        <ion-buttons name="start">
          <ion-back-button :text="t('action.back')"></ion-back-button>
        </ion-buttons>
        <IonTitle color="primary">{{ header }}</IonTitle>
      </ion-toolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <slot></slot>
    </ion-content>
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
import { useI18n } from "vue-i18n";
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonTitle,
    IonBackButton,
  },
  props: {
    header: {
      type: String,
      default: "",
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
