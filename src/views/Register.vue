<template>
  <WithHeaderFooter>
    <div class="pageContent">
      <h3 class="header">{{ t("register.title") }}</h3>
      <IonInput :placeholder="t('register.firstname')"></IonInput>
      <IonInput :placeholder="t('register.lastname')"></IonInput>
      <IonInput :placeholder="t('register.mobile')"></IonInput>
      <IonInput :placeholder="t('register.email')"></IonInput>
      <IonInput :placeholder="t('register.district')"></IonInput>
      <IonTextarea :placeholder="t('register.address')"></IonTextarea>
      <IonInput :placeholder="t('register.password')"></IonInput>
      <IonInput :placeholder="t('register.confirmpassword')"></IonInput>
      <IonButton mode="ios">
        {{ t("action.submit") }}
      </IonButton>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import { IonInput, IonTextarea, IonButton } from "@ionic/vue";
export default defineComponent({
  components: { WithHeaderFooter, IonInput, IonTextarea, IonButton },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style></style>
