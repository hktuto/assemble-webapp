<template>
  <WithHeaderFooter>
    <div class="pageContent">
      <h3>
        {{ t("ourservices.title") }}
      </h3>
      <b>
        {{ t("ourservices.slogan1") }}
      </b>
      <b>
        {{ t("ourservices.slogan2") }}
      </b>
      <b>
        {{ t("ourservices.slogan3") }}
      </b>
      <p>
        {{ t("ourservices.notice") }}
      </p>

      <div class="planContent">
        <h3>
          {{ t("ourservices.plana.title") }}
        </h3>
        <h3>
          {{ t("ourservices.planb.title") }}
        </h3>
        <h3>
          {{ t("ourservices.plana.name") }}
        </h3>
        <h3>
          {{ t("ourservices.planb.name") }}
        </h3>
        <h3>
          {{ t("ourservices.plana.sort") }}
        </h3>
        <h3>
          {{ t("ourservices.planb.sort") }}
        </h3>
        <h3>
          {{ t("ourservices.plana.price") }}
        </h3>
        <h3>
          {{ t("ourservices.planb.price") }}
        </h3>
        <h3>
          {{ t("ourservices.plana.detail") }}
        </h3>
        <h3>
          {{ t("ourservices.planb.detail") }}
        </h3>
        <IonButton expand="block" mode="ios">
          {{ t("ourservices.plana.btn") }}
        </IonButton>
        <IonButton expand="block" mode="ios">
          {{ t("ourservices.planb.btn") }}
        </IonButton>
      </div>
      <span>
        {{ t("ourservices.deposite") }}
      </span>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton } from "@ionic/vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
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

<style>
.pageContent {
  align-items: flex-start;
}

.planContent {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20px 20px 20px 20px 20px 20px;
}
</style>
