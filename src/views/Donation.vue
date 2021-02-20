<template>
  <WithHeaderFooter :header="t('donation.title')">
    <div class="pageContent">
      <p>{{ t("donation.info") }}</p>
      <p>{{ t("donation.donate") }}</p>
      <IonRadioGroup v-model="amount">
        <div class="row">
          <div class="item" @click="amount = '100'">
            <IonRadio slot="start" value="100" color="dark"></IonRadio>
            <IonLabel>$100</IonLabel>
          </div>
          <div class="item" @click="amount = '200'">
            <IonRadio slot="start" value="200" color="dark"></IonRadio>
            <IonLabel>$200</IonLabel>
          </div>
          <div class="item" @click="amount = '500'">
            <IonRadio slot="start" value="500" color="dark"></IonRadio>
            <IonLabel>$500</IonLabel>
          </div>
          <div class="item" @click="amount = 'other'">
            <IonRadio slot="start" value="other" color="dark"></IonRadio>
            <IonLabel>{{ t("donation.other") }}</IonLabel>
          </div>
        </div>
      </IonRadioGroup>
      <div class="row" v-if="amount === 'other'">
        <div class="item full">
          <IonInput v-model="customeValue" type="number" class="customeInput">
            <span style="margin-right:10px" slot="start"> {{ "HKD " }}</span>
          </IonInput>
        </div>
      </div>

      <div class="inputContainer">
        <IonInput
          v-model="email"
          type="email"
          :placeholder="t('register.email')"
        ></IonInput>
      </div>
      <div class="inputContainer">
        <IonInput
          v-model="name"
          type="email"
          :placeholder="t('register.name')"
        ></IonInput>
      </div>

      <IonButton mode="ios" expand="block" @click="submit">
        {{ t("action.next") }}
      </IonButton>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import {
  IonButton,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonInput,
} from "@ionic/vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    WithHeaderFooter,
    IonButton,
    IonRadioGroup,
    IonRadio,
    IonLabel,
    IonInput,
  },
  setup() {
    const { t } = useI18n();
    const amount = ref("100");
    const customeValue = ref(0);
    const email = ref("");
    const name = ref("");
    const router = useRouter();

    const submit = async () => {
      if (amount.value && email.value && name.value) {
        router.push({
          name: "DonationComplete",
          query: {
            amount:
              amount.value === "other" ? customeValue.value : amount.value,
            email: email.value,
            name: name.value,
            donating_in: "HKD",
          },
        });
      }
    };
    return {
      t,
      amount,
      name,
      email,
      submit,
      customeValue,
    };
  },
});
</script>

<style scoped>
.pageContent {
  align-items: flex-start;
}
.row {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
}
.item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  color: #fff;
  background-color: var(--ion-color-primary);
  margin-right: 5px;
  border-radius: 5px;
}
.item.full {
  width: 100%;
}
</style>
