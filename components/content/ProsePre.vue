<script setup lang="ts">
import { useClipboard } from "@vueuse/core";

defineProps({
  code: {
    type: String,
    default: ""
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
});

const { copy, copied, text } = useClipboard();
</script>

<template>
  <div class="flex flex-col border rounded-lg relative z-20">
    <div class="bg-gray-900 text-gray-300 px-4 py-2 text-sm rounded-t-lg flex items-center gap-2 justify-between">
      <div class="flex items-center gap-2">
        <Icon name="ph:terminal-bold" size="16"/>
        <span class="font-semibold">
          {{ filename || language || "Code" }}
        </span>
      </div>
      <div class="flex items-center gap-2">
        <div class="border border-gray-600 text-gray-500 font-semibold px-2 py-0.5 rounded text-xs">
          {{ language || "plaintext" }}
        </div>
        <button @click="copy(code)" class="w-4 h-4 flex items-center justify-center">
          <Icon name="bxs:copy-alt"/>
        </button>
        <Icon v-if="copied" name="ic:round-check" size="16"/>
      </div>
    </div>
    <pre class="bg-gray-800 rounded-b-lg p-4 text-sm text-gray-300 overflow-x-auto" :class="$props.class"><slot/></pre>
  </div>
</template>

<style lang="scss" scoped>
pre code .line {
  @apply block;
}

:deep(pre) {
  @apply font-bold;
}
</style>
