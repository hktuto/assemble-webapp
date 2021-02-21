<template>
  <WithHeaderFooter :header="t('register.title')">
    <div class="pageContent">
      <div class="inputContainer">
        <IonInput
          :placeholder="t('register.firstname')"
          v-model="firstname"
        ></IonInput>
      </div>
      <div class="inputContainer">
        <IonInput
          :placeholder="t('register.lastname')"
          v-model="lastname"
        ></IonInput>
      </div>
      <div class="inputContainer">
        <IonInput :placeholder="t('register.phone')" v-model="phone"></IonInput>
      </div>
      <div class="inputContainer">
        <IonInput :placeholder="t('register.email')" v-model="email"></IonInput>
      </div>
      <div class="inputContainer">
        <IonSelect
          mode="ios"
          :placeholder="t('register.district')"
          v-model="district"
        >
          <ion-select-option
            v-for="item in districts"
            :key="item.id"
            :value="item.id"
            >{{ item.district_name }}</ion-select-option
          >
        </IonSelect>
      </div>
      <div class="inputContainer">
        <IonTextarea
          :placeholder="t('register.address')"
          v-model="address"
        ></IonTextarea>
      </div>
      <div class="inputContainer">
        <IonInput
          type="password"
          :placeholder="t('register.password')"
          v-model="password"
        ></IonInput>
      </div>
      <div class="inputContainer">
        <IonInput
          type="password"
          :placeholder="t('register.confirmpassword')"
          v-model="confirmPassword"
        ></IonInput>
      </div>
      <IonButton mode="ios" expand="block" @click="submit">
        {{ t("action.submit") }}
      </IonButton>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
import { useI18n } from "vue-i18n";
import {
  IonInput,
  IonTextarea,
  IonButton,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";

import useUser, { RegisterForm } from "@/state/useUser";

import { Plugins } from "@capacitor/core";
import { useApp } from "@/state/useApp";
import { useRouter } from "vue-router";
const { Toast } = Plugins;

export default defineComponent({
  components: {
    WithHeaderFooter,
    IonInput,
    IonTextarea,
    IonButton,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const { t } = useI18n();
    const { districts } = useApp();
    const { register } = useUser();
    const router = useRouter();
    const registerForm = reactive<RegisterForm>({
      firstname: "",
      lastname: "",
      password: "",
      phone: "",
      email: "",
      address: "",
      district: "",
    });
    const confirmPassword = ref("");

    const validate = () => {
      const missingField = [];
      for (const [key, value] of Object.entries(registerForm)) {
        if (!value) {
          missingField.push(t(`register.${key}`));
        }
      }

      if (missingField.length > 0) {
        throw t("error.missingField", { field: missingField.join(",") });
      }
    };

    const checkPassword = () => {
      if (registerForm.password !== confirmPassword.value) {
        throw t("error.confirmPassword");
      }
    };

    const reset = () => {
      registerForm.firstname = "";
      registerForm.lastname = "";
      registerForm.phone = "";
      registerForm.email = "";
      registerForm.district = "";
      registerForm.address = "";
      registerForm.password = "";
      confirmPassword.value = "";
    };

    const submit = async () => {
      try {
        await validate();
        await checkPassword();
        await register(registerForm);
        router.push({ name: "OTP" });
        Toast.show({
          text: t("otp.send"),
        });
        reset();
      } catch (error) {
        console.log(error);
        Toast.show({
          text: error,
        });
      }
    };
    return {
      ...toRefs(registerForm),
      confirmPassword,
      districts,
      t,
      registerForm,
      submit,
    };
  },
});
</script>

<style></style>
