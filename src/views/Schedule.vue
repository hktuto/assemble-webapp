<template>
  <WithHeaderFooter>
    <div class="pageContent">
      <h1>{{ $t("menu.comingsoon") }}</h1>
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

<style></style>
