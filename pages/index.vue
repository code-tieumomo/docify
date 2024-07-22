<script setup lang="ts">
import dayjs from "dayjs";

const { data } = await useAsyncData("articles", () => queryContent().find());
</script>

<template>
  <section>
    <h1 class="text-4xl font-bold">Docify</h1>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <div class="mt-8 flex flex-col gap-8">
      <div v-for="article in data" class="grid grid-cols-3 gap-8">
        <div class="col-span-1 rounded-lg overflow-hidden group">
          <img :src="article.image" :alt="article.title"
               class="transition-all duration-500 group-hover:scale-110 group-hover:rotate-2">
        </div>
        <div class="col-span-2 flex flex-col justify-center">
          <div v-if="article.author" class="flex items-center gap-2">
            <img :src="article.author_avatar" :alt="article.author" class="w-10 h-10 rounded-full object-cover border">
            <div>
              <h3 class="font-bold text-sm">{{ article.author }}</h3>
              <p class="text-xs">Maintainer</p>
            </div>
          </div>
          <NuxtLink class="mt-8" :to="article._path">
            <h2 class="text-3xl font-bold">{{ article.title }}</h2>
          </NuxtLink>
          <div class="text-gray-600 mt-2 flex items-center gap-1">
            <div class="border px-2 py-0.5 text-sm rounded-md border-gray-400">
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
