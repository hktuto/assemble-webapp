<template>
  <WithHeader>
    <pdf
      v-for="i in numPages"
      :key="i"
      :src="path"
      :page="i"
      class="pdfPage"
    ></pdf>
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
    const numPages = 3;
    const { t, locale } = useI18n();
    const path = computed(() =>
      locale.value === "en"
        ? "/assets/pdf/types-eng.pdf"
        : "/assets/pdf/types-zh.pdf"
    );
    return {
      t,
      path,
      numPages,
    };
  },
});
</script>

<style scoped>
.pdfPage {
  margin-bottom: 20px;
}
</style>
