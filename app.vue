<script setup>
    import InteractiveMap from "./components/InteractiveMap.vue";
    import NModal from "./components/NModal.vue";
    import "./assets/main.css";
    import "./assets/modal.css";
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <main id="app">
      <n-h1>
        <n-text type="default"> Rainbow Life </n-text>
      </n-h1>
      <NModal />
      <InteractiveMap />
    </main>
    <n-global-style />
  </n-config-provider>
</template>

<script>
    import { defineComponent } from "vue";
    import { NH1, NText } from "naive-ui";
    import { darkTheme, NConfigProvider, NGlobalStyle } from "naive-ui";

    export default defineComponent({
    components: {
        NH1,
        NText
    },
    });
</script>