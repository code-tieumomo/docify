<script setup lang="ts">
import dayjs from "dayjs";

useHead({
  title: "Docify",
  meta: [
    {
      name: "description",
      content: "Trang chủ của blog"
    }
  ]
});

const { data } = await useAsyncData("articles", () => queryContent().sort({ date: -1 }).find());
</script>

<template>
  <section>
    <h1 class="text-2xl font-bold">Mới nhất</h1>
    <p class="mt-1 text-gray-600">
      Danh sách các bài viết mới nhất
    </p>
    <div class="mt-8 grid grid-cols-2 gap-4">
      <div v-for="article in data" class="flex gap-4">
        <div class="rounded-lg overflow-hidden group w-1/3 shrink-0">
          <img
            :src="article.image || '/alt-thumb.png'"
            :alt="article.title"
            class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2">
        </div>
        <div class="flex flex-col justify-center">
          <div v-if="article.author" class="flex items-center gap-2">
            <img :src="article.author_avatar" :alt="article.author" class="w-7 h-7 rounded-full object-cover border">
            <div class="flex items-center gap-1">
              <h3 class="font-bold text-sm">{{ article.author }}</h3>
              /
              <p class="text-xs">Maintainer</p>
            </div>
          </div>
          <NuxtLink class="mt-2" :to="article._path">
            <h2 class="text-xl font-bold">{{ article.title }}</h2>
          </NuxtLink>
          <div class="text-gray-600 text-xs mt-2 flex items-center gap-1">
            <div class="border px-2 py-0.5 rounded-md border-gray-400">
              {{ article.category }}
            </div>
            / {{ dayjs(article.date).format("DD-MM-YYYY") }}
          </div>
          <p class="mt-2 text-sm line-clamp-3">{{ article.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
