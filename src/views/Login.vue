<template>
  <WithHeaderFooter :header="t('login.title')">
    <div class="pageContent">
      <div class="inputContainer">
        <IonInput v-model="phone" placeholder="Phone Number"></IonInput>
      </div>
      <div class="inputContainer">
        <IonInput
          v-model="password"
          placeholder="Password"
          type="password"
        ></IonInput>
      </div>
      <IonButton mode="ios" expand="block" @click="submit">
        {{ t("action.login") }}
      </IonButton>
      <hr />
      <span @click="$router.push({ name: 'ForgetPassword' })">
        {{ t("login.forgot-password") }}
      </span>
      <span @click="$router.push({ name: 'Register' })">
        {{ t("login.register1") }}
        {{ t("login.register2") }}
      </span>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { IonInput, IonButton } from "@ionic/vue";
import { useI18n } from "vue-i18n";
import { useUser } from "@/state/useUser";
import { Plugins } from "@capacitor/core";
import { useRouter } from "vue-router";

const { Toast } = Plugins;
export default defineComponent({
  components: { WithHeaderFooter, IonInput, IonButton },
  setup() {
    const { t } = useI18n();
    const { signin } = useUser();
    const router = useRouter();
    const phone = ref("");
    const password = ref("");
    const validate = () => {
      if (!phone.value || !password.value) {
        throw new Error("please fill in required field");
      }
    };
    const reset = () => {
      phone.value = "";
      password.value = "";
    };
    const submit = async () => {
      try {
        await signin(phone.value, password.value);
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
        Toast.show({ text: error });
      }
      reset();
    };
    return {
      t,
      phone,
      password,
      validate,
      submit,
      reset,
    };
  },
});
</script>

<style>
.header {
  align-self: flex-start;
}
</style>
