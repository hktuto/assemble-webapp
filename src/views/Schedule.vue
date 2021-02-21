<template>
  <WithHeaderFooter background="/assets/menu/bg_schedule.svg">
    <div class="pageContent">
      <h1>coming soon</h1>
    </div>
    <div class="bgContainer"></div>
  </WithHeaderFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WithHeaderFooter from "@/layout/WithHeaderFooter.vue";
export default defineComponent({
  components: { WithHeaderFooter },
});
</script>

<style scoped>
.bgContainer {
  background-image: url(/assets/images/bg/bg_schedule.png);
}
</style>
