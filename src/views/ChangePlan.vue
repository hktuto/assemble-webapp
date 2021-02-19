<template>
  <WithHeaderFooter :header="t('changeplan.title')">
    <div class="pageContent">
      <IonRow>
        <IonCol size="6">
          <h3 class="titleColor">
            <b>{{ t("plan.plana.title") }}</b>
          </h3>
          <h6>
            {{ t("plan.plana.name") }}
          </h6>
        </IonCol>
        <IonCol size="6">
          <h3 class="titleColor">
            <b>{{ t("plan.planb.title") }}</b>
          </h3>
          <h6>{{ t("plan.planb.name") }}</h6>
        </IonCol>

        <div class="divider"></div>

        <IonCol size="6">
          <p>
            {{ t("plan.plana.sort") }}
          </p>
        </IonCol>
        <IonCol size="6">
          <p>
            {{ t("plan.planb.sort") }}
          </p>
        </IonCol>
        <IonCol size="6">
          <h4>
            {{ t("plan.plana.price") }}
          </h4>
          <small>
            {{ t("plan.plana.detail") }}
          </small>
        </IonCol>
        <IonCol size="6">
          <h4>
            {{ t("plan.planb.price") }}
          </h4>
          <small>
            {{ t("plan.planb.detail") }}
          </small>
        </IonCol>
      </IonRow>
      <IonCol size="12">
        <IonButton expand="block" mode="ios" @click="changePlan">
          {{ t("changeplan.confirm") }}
        </IonButton>
      </IonCol>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton, IonRow, IonCol } from "@ionic/vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  components: { WithHeaderFooter, IonButton, IonRow, IonCol },
  setup() {
    const { t } = useI18n();
    const changePlan = async () => {
      await console.log("change plan");
    };
    return {
      t,
      changePlan,
    };
  },
});
</script>

<style>
.pageContent {
  align-items: flex-start;
}

.planContent {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  /* grid-template-rows: 20px 20px 20px 20px 20px 20px; */
}
</style>
