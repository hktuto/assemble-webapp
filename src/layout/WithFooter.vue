<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <slot />
    </ion-content>
    <AppFooter />
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import AppFooter from "@/components/AppFooter.vue";
export default defineComponent({
  components: { IonPage, IonContent, AppFooter },
});
</script>
