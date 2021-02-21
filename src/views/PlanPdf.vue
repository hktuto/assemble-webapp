<template>
  <WithHeader>
    <pdf :src="path" :page="Number($route.params.page)"></pdf>
  </WithHeader>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import WithHeader from "@/layout/WithHeader.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import pdf from "vue3-pdf";
import { useI18n } from "vue-i18n";
export default defineComponent({
  components: { WithHeader, pdf },

  setup() {
    const { t, locale } = useI18n();
    const path = computed(() =>
      locale.value === "en"
        ? "/assets/pdf/plans-eng.pdf"
        : "/assets/pdf/plans-zh.pdf"
    );
    return {
      t,
      path,
    };
  },
});
</script>

<style></style>
