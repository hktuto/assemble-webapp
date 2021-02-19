<template>
  <IonFooter>
    <div class="footerContainer" :style="{ backgroundImage: background }">
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
    </div>
  </IonFooter>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonFooter, IonIcon } from "@ionic/vue";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
    IonFooter,
    IonIcon,
  },
  setup() {
    const currentRoute = ref("");
    const route = useRoute();
    const background = ref("assets/images");
    return {
      currentRoute,
      route,
      background,
    };
  },
});
</script>

<style scoped>
.footerContainer {
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 20px;
  background-repeat: no-repeat;
  background-position: center bottom;
}
label {
  font-size: 12px;
}
</style>
