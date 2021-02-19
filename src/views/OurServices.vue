<template>
  <WithHeaderFooter>
    <div class="pageContent">
      <h3>
        <b>{{ t("ourservices.title") }}</b>
      </h3>
      <p>
        <b>
          {{ t("ourservices.slogan1") }}
        </b>
        <b>
          {{ t("ourservices.slogan2") }}
        </b>
        <b>
          {{ t("ourservices.slogan3") }}
        </b>
      </p>

      <p>
        {{ t("ourservices.notice") }}
      </p>
      <IonRow>
        <IonCol size="6">
          <h3 class="titleColor">
            <b>{{ t("ourservices.plana.title") }}</b>
          </h3>
          <h6>
            {{ t("ourservices.plana.name") }}
          </h6>
        </IonCol>
        <IonCol size="6">
          <h3 class="titleColor">
            <b>{{ t("ourservices.planb.title") }}</b>
          </h3>
          <h6>{{ t("ourservices.planb.name") }}}</h6>
        </IonCol>

        <div class="divider"></div>

        <IonCol size="6">
          <p>
            {{ t("ourservices.plana.sort") }}
          </p>
        </IonCol>
        <IonCol size="6">
          <p>
            {{ t("ourservices.planb.sort") }}
          </p>
        </IonCol>
        <IonCol size="6">
          <h4>
            {{ t("ourservices.plana.price") }}
          </h4>
          <small>
            {{ t("ourservices.plana.detail") }}
          </small>
        </IonCol>
        <IonCol size="6">
          <h4>
            {{ t("ourservices.planb.price") }}
          </h4>
          <small>
            {{ t("ourservices.planb.detail") }}
          </small>
        </IonCol>
        <IonCol size="6">
          <IonButton size="small" mode="ios">
            {{ t("ourservices.plana.btn") }}
          </IonButton>
        </IonCol>
        <IonCol size="6">
          <IonButton size="small" mode="ios">
            {{ t("ourservices.planb.btn") }}
          </IonButton>
        </IonCol>
      </IonRow>
      <IonCol size="12">
        <small style="text-align:center;">
          {{ t("ourservices.deposite") }}
        </small>
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
    return {
      t,
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
