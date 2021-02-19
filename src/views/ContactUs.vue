<template>
  <WithHeaderFooter>
    <div class="pageContent">
      <h3 class="header">{{ t("contactus.title") }}</h3>
      <p>{{ t("contactus.companyname") }}</p>
      <p>{{ t("contactus.address1") }}</p>
      <p>{{ t("contactus.address2") }}</p>
      <p>{{ t("contactus.address3") }}</p>
      <p>{{ t("contactus.email") }} : loverecyclingplus@yahoo.com</p>
      <p>{{ t("contactus.phone") }} : +852 9347 9770</p>
      <p>{{ t("contactus.website") }} : loverecyclingplus.com</p>
      <div class="row">
        <IonImg src="/assets/images/fb.png"></IonImg>
        <IonImg src="/assets/images/whatsapp.png"></IonImg>
      </div>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import { IonImg } from "@ionic/vue";
export default defineComponent({
  components: { WithHeaderFooter, IonImg },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style>
.row {
  display: flex;
}
</style>
