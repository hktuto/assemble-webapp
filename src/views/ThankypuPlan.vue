<template>
  <WithHeaderFooter>
    <div class="pageContent">
      <h2>{{ t("thankyouplan.title") }}</h2>
      <h4>{{ t("thankyouplan.description") }}</h4>
      <IonButton
        mode="ios"
        expand="block"
        @click="$router.push({ name: 'Login' })"
        >{{ t("action.back") }}</IonButton
      >
    </div>
  </WithHeaderFooter>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { IonButton } from "@ionic/vue";

import { useI18n } from "vue-i18n";

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
