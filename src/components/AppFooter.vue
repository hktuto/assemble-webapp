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
      <div class="menuItem" @click="$router.push({ name: 'AboutUs' })">
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
import { defineComponent } from "vue";
import { IonFooter, IonIcon } from "@ionic/vue";

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
    return {};
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
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
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
