<template>
  <WithHeaderFooter :header="t('donation.title')">
    <div class="pageContent">
      <h4>{{ t("donation.donate") }}</h4>
      <div class="inputContainer">
        <IonInput :value="route.query.amount" readonly />
      </div>
      <IonButton mode="ios" expand="block" @click="submit">{{
        t("action.submit")
      }}</IonButton>
    </div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { IonInput, IonButton } from "@ionic/vue";

import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { baseURL } from "@/api";

import { Plugins } from "@capacitor/core";
const { Browser } = Plugins;

export default defineComponent({
  components: { WithHeaderFooter, IonInput, IonButton },
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();

    const submit = async () => {
      const url = `${baseURL}stripe/donation/index.php?amount=${
        route.query.amount
      }&user_id=${localStorage.getItem("user_id")}&email=${
        route.query.email
      }&name=${route.query.name}&donating_in=${route.query.donating_in}`;
      await Browser.open({
        url,
      });
      router.push({
        name: "Thankyou",
      });
    };
    return {
      t,
      route,
      submit,
    };
  },
});
</script>

<style scoped>
.pageContent {
  align-items: flex-start;
}
</style>
