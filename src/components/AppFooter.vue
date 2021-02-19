<template>
  <IonFooter>
    <div class="footerContainer">
      <div class="menuItem" @click="$router.push({ name: 'Home' })">
        <div class="iconContainer">
          <IonIcon />
        </div>

        <label>Home</label>
      </div>
      <div class="menuItem" @click="$router.push({ name: 'HowTo' })">
        <div class="iconContainer">
          <IonIcon />
        </div>
        <label>How To</label>
      </div>
      <div class="menuItem" @click="$router.push({ name: 'Schedule' })">
        <div class="iconContainer">
          <IonIcon />
        </div>
        <label>Schedule</label>
      </div>
      <div class="menuItem" @click="openAboutUs">
        <div class="iconContainer">
          <IonIcon />
        </div>
        <label>About Us</label>
      </div>
      <div class="bg_container">
        <img :src="background" />
      </div>
    </div>
  </IonFooter>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { IonFooter, IonIcon } from "@ionic/vue";
import { useRoute } from "vue-router";

import { Plugins } from "@capacitor/core";
const { Browser } = Plugins;

export default defineComponent({
  components: {
    IonFooter,
    IonIcon,
  },
  setup() {
    const currentRoute = ref("");
    const route = useRoute();
    const background = ref("assets/menu/bg_home.svg");
    watch(route, (newRoute) => {
      switch (newRoute.name) {
        case "Home":
          background.value = "assets/menu/bg_home.svg";
          break;
        case "HowTo":
          background.value = "assets/menu/bg_howto.svg";
          break;
        case "Schedule":
          background.value = "assets/menu/bg_schedule.svg";
          break;
      }
    });

    const openAboutUs = async () =>
      await Browser.open({ url: "https:/loverecyclingplus.com/" });
    return {
      currentRoute,
      route,
      background,
      openAboutUs,
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
  padding: 40px 20px 10px 20px;
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
}
.bg_container {
  width: 100%;
  height: 120px;
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
}
label {
  font-size: 12px;
}
</style>
