<template>
  <WithHeaderFooter
    background="/assets/menu/bg_howto.svg"
    :header="t('forgetpassword.title')"
  >
    <div class="pageContent">
      <IonInput placeholder="Phone Number"></IonInput>
      <IonButton mode="ios">
        {{ t("action.forgetpassword") }}
      </IonButton>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import { IonInput, IonButton } from "@ionic/vue";

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

<style></style>
