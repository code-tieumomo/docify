<script setup lang="ts">
useHead({
  title: 'Danh mục'
})

const rawCategories = (await queryContent().only('category').find()).map((item) => item.category);
const categories = Array.from(new Set(rawCategories));
</script>

<template>
  <section>
    <h1 class="text-2xl font-bold">Danh mục</h1>
    <p class="mt-2 text-gray-600">
      Danh sách tất cả các danh mục
    </p>
    <div class="flex items-center gap-2 flex-wrap mt-8">
      <NuxtLink v-for="cate in categories" :to="`/categories/${cate}`" class="text-sm border-2 px-2 py-1 rounded-md border-gray-700 font-semibold">
        {{ cate }}
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>

</style>
