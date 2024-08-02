<script setup lang="ts">
useHead({
  title: "Thẻ"
})

const rawTags = (await queryContent().only('tags').find()).map((item) => item.tags).flat();
const tags = Array.from(new Set(rawTags));
</script>

<template>
  <section>
    <h1 class="text-2xl font-bold">Thẻ</h1>
    <p class="mt-2 text-gray-600">
      Danh sách tất cả các thẻ
    </p>
    <div class="flex items-center gap-2 flex-wrap mt-8">
      <NuxtLink v-for="tag in tags" :to="`/tags/${tag}`"
                class="text-sm border-2 px-2 py-1 rounded-md font-semibold bg-white">
        # {{ tag }}
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>

</style>
