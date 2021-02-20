<template>
  <WithHeaderFooter
    background="/assets/menu/bg_howto.svg"
    :header="t('forgetpassword.title')"
  >
    <div class="pageContent">
      <div class="inputContainer">
        <IonInput
          :placeholder="t('register.phone')"
          v-model="phone"
          mode="ios"
        ></IonInput>
      </div>
      <IonButton mode="ios" expand="block" :disabled="!phone" @click="submit">
        {{ t("action.submit") }}
      </IonButton>
      <hr />
      <span @click="$router.push({ name: 'Login' })">
        {{ t("login.title") }}
      </span>
      <hr />
      <span @click="$router.push({ name: 'OurServices' })">
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
import { useI18n } from "vue-i18n";
import { IonInput, IonButton } from "@ionic/vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { WithHeaderFooter, IonInput, IonButton },
  setup() {
    const { t } = useI18n();
    const phone = ref("");
    const router = useRouter();
    const submit = async () => {
      await console.log(phone.value);
      router.push({
        name: "Login",
      });
    };
    return {
      t,
      phone,
      submit,
    };
  },
});
</script>

<style></style>
