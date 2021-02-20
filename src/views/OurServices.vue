<template>
  <WithHeaderFooter :header="t('ourservices.title')">
    <div class="pageContent">
      <p style="font-size: 14px; line-height: 1.4">
        <b>
          {{ t("ourservices.slogan1") }}
        </b>
        <br />
        <b>
          {{ t("ourservices.slogan2") }}
        </b>
        <br />
        <b>
          {{ t("ourservices.slogan3") }}
        </b>
      </p>

      <p>
        {{ t("ourservices.notice1") }}
        <img class="whatsapp" src="/assets/images/whatsapp.png" />
        <a href="https://wa.me/+85293479770"> 93479770 </a>
        {{ t("ourservices.notice2") }}
      </p>
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
          <small @click="openPlanPdf">
            {{ t("plan.plana.detail") }}
          </small>
        </IonCol>
        <IonCol size="6">
          <h4>
            {{ t("plan.planb.price") }}
          </h4>
          <small @click="openPlanPdf">
            {{ t("plan.planb.detail") }}
          </small>
        </IonCol>
        <IonCol size="6">
          <IonButton size="small" mode="ios" @click="register(99)">
            {{ t("plan.plana.btn") }}
          </IonButton>
        </IonCol>
        <IonCol size="6">
          <IonButton size="small" mode="ios" @click="register(149)">
            {{ t("plan.planb.btn") }}
          </IonButton>
        </IonCol>
      </IonRow>
      <IonCol size="12">
        <small style="text-align: center">
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
import useUser from "@/state/useUser";
import { useRouter } from "vue-router";

import { Plugins } from "@capacitor/core";
const { Browser } = Plugins;
export default defineComponent({
  components: { WithHeaderFooter, IonButton, IonRow, IonCol },
  setup() {
    const { t, locale } = useI18n();
    const { plan } = useUser();
    const router = useRouter();
    const register = (pickPlan: number) => {
      plan.value = pickPlan;
      localStorage.setItem("rate", String(pickPlan));
      router.push({ name: "Register" });
    };
    const openPlanPdf = async () => {
      const url =
        locale.value === "en"
          ? "https://loverecyclingplus.com/recycling/superadmin/pdf/plans.pdf"
          : "https://loverecyclingplus.com/recycling/superadmin/pdf/chinese-plans.pdf";
      await Browser.open({ url });
    };
    return {
      t,
      plan,
      register,
      openPlanPdf,
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

.whatsapp {
  width: 14px;
  position: relative;
  top: 2px;
}
</style>
