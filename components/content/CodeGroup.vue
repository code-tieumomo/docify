<script setup lang="ts">
const isTag = (slot: any, tag: string) => {
  return slot.type && slot.type.tag && slot.type.tag === tag;
};

const isCodeTag = (slot: any) => {
  return isTag(slot, "code-block") || isTag(slot, "code") || isTag(slot, "pre");
};

const _slots = useSlots()?.default?.() || [];
const tabs = _slots
  .filter((slot) => isCodeTag(slot))
  .map((slot, index) => {
    return {
      label: slot?.props?.filename || slot?.props?.label || `${ index }`,
      language: slot?.props?.language || null,
      active: slot?.props?.active || false,
      component: slot
    };
  });
</script>

<template>
  <div class="flex flex-col border-2 p-2 rounded-lg border-gray-300 relative">
    <span class="bg-[#f4f5f9] px-2 absolute -top-3 left-4 text-gray-400 z-10">
      <Icon name="ph:terminal-bold" size="16"/>
    </span>
    <slot/>
  </div>
</template>

<style scoped>

</style>
