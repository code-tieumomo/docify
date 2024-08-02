<script setup lang="ts">
import dayjs from "dayjs";

useHead({
  title: "Thẻ"
});

const route = useRoute();
const slug = route.params.slug;

const { data } = await useAsyncData("articles", () => queryContent().where({ tags: { $contains: slug } }).sort({ date: -1 }).find());
</script>

<template>
  <section>
    <h1 class="text-2xl font-bold">{{ slug }}</h1>
    <p class="mt-2 text-gray-600">
      Danh sách tất cả các bài viết thuộc thẻ <strong>"{{ slug }}"</strong>
    </p>
    <div class="mt-8 grid grid-cols-2 gap-4">
      <div v-for="article in data" class="flex gap-4">
        <div v-if="article.image" class="rounded-lg overflow-hidden group w-1/3 shrink-0">
          <img
            :src="article.image"
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
            <NuxtLink class="border px-2 py-0.5 rounded-md border-gray-400" :to="`/categories/${article.category}`">
              {{ article.category }}
            </NuxtLink>
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
