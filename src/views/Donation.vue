<template>
  <WithHeaderFooter :header="t('donation.title')">
    <div class="pageContent">
      <p>{{ t("donation.info") }}</p>
      <p>{{ t("donation.donate") }}</p>
      <IonButton mode="ios">
        {{ t("action.next") }}
      </IonButton>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import { IonButton } from "@ionic/vue";
export default defineComponent({
  components: { WithHeaderFooter, IonButton },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style></style>
