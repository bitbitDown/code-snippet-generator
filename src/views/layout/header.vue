<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import EpMoon from "~icons/ep/moon";
import EpSunny from "~icons/ep/sunny";
const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="flex items-center justify-between px-4 py-9">
    <span class="pl-40 font-bold font-serif"> Snippets Generator</span>
    <EpMoon
      v-if="isDark"
      @click="toggleDark()"
      class="cursor-pointer ml-auto"
    ></EpMoon>
    <EpSunny
      class="cursor-pointer ml-auto"
      v-else
      @click="toggleDark()"
    ></EpSunny>
  </header>
</template>

<style lang="scss" scoped></style>
