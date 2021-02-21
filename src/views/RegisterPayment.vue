<template>
  <WithHeaderFooter :header="t('plan.title')">
    <div class="pageContent">
      <h5>{{ plan === 99 ? t("plan.plana.name") : t("plan.planb.name") }}</h5>
      <div class="inputContainer">
        <IonLabel>{{ plan }}</IonLabel>
      </div>
      <h5>{{ t("plan.recyclingBin.deposit") }}</h5>
      <div class="inputContainer">
        <IonLabel>$200</IonLabel>
      </div>
      <h5>{{ t("plan.total") }}</h5>
      <div class="inputContainer">
        <IonLabel>{{ total }}</IonLabel>
      </div>
      <IonButton mode="ios" expand="block" @click="confirm">{{
        t("action.submit")
      }}</IonButton>
    </div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";

import { IonLabel, IonButton } from "@ionic/vue";
import { useI18n } from "vue-i18n";
import useUser from "@/state/useUser";

import { Plugins } from "@capacitor/core";
import { baseURL } from "@/api";
import { useRouter } from "vue-router";
const { Browser } = Plugins;

export default defineComponent({
  components: { WithHeaderFooter, IonLabel, IonButton },
  setup() {
    const { t, locale } = useI18n();
    const { plan, user } = useUser();
    const router = useRouter();
    const total = computed(() => plan.value + 200);

    const confirm = async () => {
      const url = `${baseURL}stripe/index.php?amount=${total.value}&user_id=${
        user.value.user_id
      }&lang=${locale.value === "zh" ? "ch" : "en"}`;
      await Browser.open({
        url,
      });
      console.log(url);
      router.push({
        name: "Thankyouplan",
      });
    };
    return {
      t,
      useUser,
      plan,
      total,
      confirm,
    };
  },
});
</script>
