<template>
  <IonFooter v-show="!keyboardShow">
    <div class="footerContainer">
      <div class="menuItem" @click="$router.push({ name: 'Home' })">
        <div :class="{ iconContainer: true, selected: $route.name === 'Home' }">
          <IonIcon
            :src="
              `assets/menu/${$route.name === 'Home' ? 'selected_' : ''}home.svg`
            "
          />
        </div>

        <label>Home {{ t("home.title") }}</label>
      </div>
      <div class="menuItem" @click="$router.push({ name: 'HowTo' })">
        <div
          :class="{ iconContainer: true, selected: $route.name === 'HowTo' }"
        >
          <IonIcon
            :src="
              `assets/menu/${
                $route.name === 'HowTo' ? 'selected_' : ''
              }howto.svg`
            "
          />
        </div>
        <label>{{ t("howto.title") }}</label>
      </div>
      <div class="menuItem" @click="$router.push({ name: 'Schedule' })">
        <div
          :class="{ iconContainer: true, selected: $route.name === 'Schedule' }"
        >
          <IonIcon
            :src="
              `assets/menu/${
                $route.name === 'Schedule' ? 'selected_' : ''
              }schedule.svg`
            "
          />
        </div>
        <label>{{ t("schedule.title") }}</label>
      </div>
      <div class="menuItem" @click="$router.push({ name: 'AboutUs' })">
        <div
          :class="{ iconContainer: true, selected: $route.name === 'AboutUs' }"
        >
          <IonIcon
            :src="
              `assets/menu/${
                $route.name === 'AboutUs' ? 'selected_' : ''
              }aboutus.svg`
            "
          />
        </div>
        <label>{{ t("aboutus.title") }}</label>
      </div>
      <div class="bg_container">
        <img :src="background" />
      </div>
    </div>
  </IonFooter>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { IonFooter, IonIcon } from "@ionic/vue";
import { useI18n } from "vue-i18n";

// import { Plugins } from "@capacitor/core";
// const { Browser } = Plugins;

export default defineComponent({
  components: {
    IonFooter,
    IonIcon,
  },
  props: {
    background: {
      type: String,
      default: "assets/menu/bg_home.svg",
    },
  },
  setup() {
    const { t } = useI18n();
    const keyboardShow = ref(false);
    const hideFooter = () => {
      keyboardShow.value = true;
    };
    const showFooter = () => {
      keyboardShow.value = false;
    };
    onMounted(() => {
      window.addEventListener("keyboardWillShow", hideFooter);
      window.addEventListener("keyboardWillHide", showFooter);
    });

    onUnmounted(() => {
      window.removeEventListener("keyboardWillShow", hideFooter);
      window.removeEventListener("keyboardWillHide", showFooter);
    });
    return {
      t,
      keyboardShow,
      showFooter,
      hideFooter,
    };
  },
});
</script>

<style scoped>
.footerContainer {
  width: 100%;
  height: 110px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 25px 10px 25px;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.menuItemRow {
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
}

.menuItem {
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
}
.bg_container {
  width: 100%;
  height: 110px;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
}
.bg_container > img {
  width: 100%;
}
.iconContainer {
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.iconContainer ion-icon {
  width: 20px;
  height: 20px;
}
.iconContainer.selected {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
label {
  font-size: 12px;
}
</style>
