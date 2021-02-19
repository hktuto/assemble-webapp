<template>
  <WithHeaderFooter>
    <div class="pageContent">
      <h3 class="header">{{ t("myprofile.title") }}</h3>
      <IonInput :placeholder="t('myprofile.firstname')"></IonInput>
      <IonInput :placeholder="t('myprofile.lastname')"></IonInput>
      <IonInput :placeholder="t('myprofile.mobile')"></IonInput>
      <IonInput :placeholder="t('myprofile.email')"></IonInput>
      <IonInput :placeholder="t('myprofile.district')"></IonInput>
      <IonTextarea :placeholder="t('myprofile.address')"></IonTextarea>
      <IonButton mode="ios">
        {{ t("action.update") }}
      </IonButton>
      <IonButton mode="ios">
        {{ t("action.changeplan") }}
      </IonButton>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import { IonButton, IonInput, IonTextarea } from "@ionic/vue";
export default defineComponent({
  components: {
    WithHeaderFooter,
    IonInput,
    IonTextarea,
    IonButton,
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style></style>
