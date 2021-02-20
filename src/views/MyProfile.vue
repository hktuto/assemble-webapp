<template>
  <WithHeaderFooter :header="t('myprofile.title')">
    <div class="pageContent" :header="t('myprofile.title')">
      <div class="inputContainer">
        <IonInput
          v-model="userForm.firstname"
          :placeholder="t('myprofile.firstname')"
        ></IonInput>
      </div>
      <div class="inputContainer">
        <IonInput
          v-model="userForm.lastname"
          :placeholder="t('myprofile.lastname')"
        ></IonInput>
      </div>
      <div class="inputContainer">
        <IonInput
          v-model="userForm.phone"
          :placeholder="t('myprofile.mobile')"
        ></IonInput>
      </div>
      <div class="inputContainer">
        <IonInput
          :value="user.email_id"
          :placeholder="t('myprofile.email')"
          readonly
        ></IonInput>
      </div>
      <div class="inputContainer">
        <IonSelect
          mode="ios"
          :placeholder="t('register.district')"
          v-model="userForm.district"
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
          v-model="userForm.address"
          :placeholder="t('myprofile.address')"
        ></IonTextarea>
      </div>
      <IonButton mode="ios" expand="block" @click="update">
        {{ t("action.update") }}
      </IonButton>
      <IonButton
        mode="ios"
        expand="block"
        @click="$router.push({ name: 'ChangePlan' })"
      >
        {{ t("action.changeplan") }}
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
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import useUser, { UserForm } from "@/state/useUser";
import { useApp } from "@/state/useApp";

import { Plugins } from "@capacitor/core";
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
    const { user, updateUser, validate } = useUser();
    const { districts } = useApp();

    const userForm = ref<UserForm>({
      firstname: user.value.firstname,
      lastname: user.value.lastname,
      phone: user.value.phonenumber,
      district: user.value.district,
      address: user.value.address,
      // eslint-disable-next-line @typescript-eslint/camelcase
      user_id: user.value.user_id,
      // eslint-disable-next-line @typescript-eslint/camelcase
      auth_key: user.value.auth_key,
    });
    const setForm = async () => {
      userForm.value = {
        firstname: user.value.firstname,
        lastname: user.value.lastname,
        phone: user.value.phonenumber,
        district: user.value.district,
        address: user.value.address,
        // eslint-disable-next-line @typescript-eslint/camelcase
        user_id: user.value.user_id,
        // eslint-disable-next-line @typescript-eslint/camelcase
        auth_key: user.value.auth_key,
      };
    };
    const update = async () => {
      try {
        await updateUser(userForm.value);
        await validate(userForm.value.user_id, userForm.value.auth_key);
        setForm();
        Toast.show({ text: t("myprofile.updateSuccess") });
      } catch (error) {
        Toast.show({ text: t("myprofile.updateFail") });
        console.log(error);
      }
    };
    setForm();
    return {
      t,
      user,
      districts,
      update,
      userForm,
    };
  },
});
</script>

<style></style>
