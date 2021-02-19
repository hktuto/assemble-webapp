<template>
  <WithHeaderFooter>
    <div class="pageContent">
      <h3 class="header">{{ t("login.title") }}</h3>
      <IonInput placeholder="Phone Number"></IonInput>
      <IonInput placeholder="Password"></IonInput>
      <IonButton mode="ios">
        {{ t("action.login") }}
      </IonButton>
      <span>
        {{ t("login.forgot-password") }}
      </span>
      <span>
        {{ t("login.register1") }}
        {{ t("login.register2") }}
      </span>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { IonInput, IonButton } from "@ionic/vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  components: { WithHeaderFooter, IonInput, IonButton },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style>
.header {
  align-self: flex-start;
}
</style>
