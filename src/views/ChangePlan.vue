<template>
  <WithHeaderFooter :header="t('changeplan.title')">
    <div class="pageContent">
      <IonRadioGroup v-model="plan">
        <IonRow>
          <IonCol size="6">
            <h3 class="titleColor">
              <IonRadio value="99"></IonRadio>
              <b>{{ t("plan.plana.title") }}</b>
            </h3>
            <h6>
              {{ t("plan.plana.name") }}
            </h6>
          </IonCol>
          <IonCol size="6">
            <h3 class="titleColor">
              <IonRadio value="149"></IonRadio>
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
      </IonRadioGroup>
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
import { defineComponent, ref } from "vue";
import { IonButton, IonRow, IonCol, IonRadioGroup, IonRadio } from "@ionic/vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import { apiService } from "@/api";
import useUser from "@/state/useUser";
import { useRouter } from "vue-router";
import { Plugins } from "@capacitor/core";
const { Toast } = Plugins;
export default defineComponent({
  components: {
    WithHeaderFooter,
    IonButton,
    IonRow,
    IonCol,
    IonRadioGroup,
    IonRadio,
  },
  setup() {
    const { t } = useI18n();
    const { user } = useUser();
    const router = useRouter();
    const plan = ref("");
    plan.value = (localStorage.getItem("rate") || 99) as string;
    const changePlan = async () => {
      const fd = new FormData();
      fd.append("user_id", user.value.user_id);
      fd.append("auth_key", user.value.auth_key);
      fd.append("plan", plan.value);
      const {
        data: { status, message },
      } = await apiService.post("UserPanel/change_plan", fd);
      if (status) {
        localStorage.setItem("rate", plan.value);
        Toast.show({
          text: t("changeplan.success"),
        });
        router.push({ name: "Home" });
      } else {
        Toast.show({
          text: message,
        });
      }
    };

    return {
      t,
      plan,
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
