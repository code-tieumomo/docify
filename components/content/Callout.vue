<script setup lang="ts">
import colors from "tailwindcss/colors";

const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: "primary"
  },
  to: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: null
  }
});

const mainColor = computed(() => {
  switch (props.color) {
    case "primary":
      return colors.gray[700];
    case "secondary":
      return colors.gray[500];
    case "success":
      return colors.green[500];
    case "warning":
      return colors.yellow[500];
    case "danger":
      return colors.red[500];
    case "info":
      return colors.blue[500];
    default:
      return colors.gray[700];
  }
});
</script>

<template>
  <div
    class="flex items-center pl-4 pr-6 py-3 rounded-md border-2 border-gray-200 bg-gray-50 text-gray-700 text-sm/6 my-5 last:mb-0 font-normal group relative prose-code:bg-white"
    :style="{ borderColor: mainColor, color: mainColor, background: mainColor + '10' }"
  >
    <Icon v-if="icon" :name="icon" class="w-4 h-4 mr-2 inline-flex items-center align-sub"
          :style="{ color: mainColor }"/>
    <slot/>
  </div>
</template>

<style scoped>

</style>
