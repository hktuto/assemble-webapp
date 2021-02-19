<template>
  <WithHeaderFooter :header="t('contactus.title')">
    <div class="pageContent">
      <p>{{ t("contactus.companyname") }}</p>
      <p>{{ t("contactus.address1") }}</p>
      <p>{{ t("contactus.address2") }}</p>
      <p>{{ t("contactus.address3") }}</p>
      <p>
        {{ t("contactus.email") }} :
        <a href="mailto:loverecyclingplus@yahoo.com"
          >loverecyclingplus@yahoo.com
        </a>
      </p>
      <p>
        {{ t("contactus.phone") }} :
        <a href="tel:+85293479770">+852 9347 9770</a>
      </p>
      <p>{{ t("contactus.website") }} : loverecyclingplus.com</p>
      <div class="row">
        <IonImg src="/assets/images/fb.png" @click="openFb"></IonImg>
        <a href="https://wa.me/+85293479770">
          <IonImg src="/assets/images/whatsapp.png"></IonImg>
        </a>
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
import { Plugins } from "@capacitor/core";
const { Browser } = Plugins;
export default defineComponent({
  components: { WithHeaderFooter, IonImg },
  setup() {
    const { t } = useI18n();
    const openFb = async () =>
      Browser.open({
        url: "https://www.facebook.com/LoveRecyclingPlus/",
      });
    return {
      t,
      openFb,
    };
  },
});
</script>

<style>
.row {
  display: flex;
}
</style>
