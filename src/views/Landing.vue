<template>
  <PageContainer>
    <div class="container">
      <div class="logoContainer">
        <img src="/assets/images/icons/img_logo.png" alt="logo" width="100" />
      </div>

      <ion-slides pager="true" class="slides">
        <ion-slide>
          <div class="slideContainer">
            <IonImg src="/assets/images/slides/s1.png"></IonImg>
          </div>
        </ion-slide>
        <ion-slide>
          <div class="slideContainer">
            <IonImg src="/assets/images/slides/s2.png"></IonImg>
          </div>
        </ion-slide>
        <ion-slide>
          <div class="slideContainer">
            <IonImg src="/assets/images/slides/s3.png"></IonImg>
            <IonButton mode="ios" @click="contuine">
              {{ t("btn.next") }}
            </IonButton>
          </div>
        </ion-slide>
      </ion-slides>
    </div>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContainer from "@/layout/PageContainer.vue";
import { IonSlides, IonSlide, IonImg, IonButton } from "@ionic/vue";
import { useApp } from "@/state/useApp";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
export default defineComponent({
  components: { PageContainer, IonSlides, IonSlide, IonImg, IonButton },
  setup() {
    const { setFirstLunch } = useApp();
    const router = useRouter();
    const { t } = useI18n();
    const contuine = async () => {
      setFirstLunch(true);
      router.push("/home");
    };
    return {
      contuine,
      t,
    };
  },
});
</script>

<style scoped>
.container {
  text-align: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.slides {
  height: calc(100% - 100px);
  width: 100%;
  overflow: hidden;
}
.loginContainer {
  width: 50%;
  height: 50px;
  position: relative;
  margin: 0 auto;
}
.slideContainer {
  width: 100vw;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
