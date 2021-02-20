/* eslint-disable @typescript-eslint/camelcase */
<template>
  <WithHeaderFooter :header="t('otp.title')">
    <div class="pageContent">
      <div class="inputContainer">
        <IonInput v-model="otp"></IonInput>
      </div>
      <IonButton mode="ios" expand="block" :disabled="!otp" @click="submit">{{
        t("action.submit")
      }}</IonButton>
    </div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import useUser, { OTPForm } from "@/state/useUser";

import { IonInput, IonButton } from "@ionic/vue";

import { useRouter } from "vue-router";
import { Plugins } from "@capacitor/core";
const { Toast } = Plugins;
export default defineComponent({
  components: { WithHeaderFooter, IonInput, IonButton },
  setup() {
    const { t } = useI18n();
    const { user, submitOTP } = useUser();
    const router = useRouter();
    const form = reactive<OTPForm>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      email_id: computed(() => user.value.email),
      otp: "",
    });
    const submit = async () => {
      try {
        if (form.otp) {
          console.log(form);
          await submitOTP(form);
          router.push({ name: "RegisterPayment" });
        }
      } catch (error) {
        Toast.show({
          text: error,
        });
      }
      form.otp = "";
    };
    return {
      ...toRefs(form),
      submit,
      t,
    };
  },
});
</script>
