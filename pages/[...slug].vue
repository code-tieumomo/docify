<script setup lang="ts">
import dayjs from "dayjs";

const route = useRoute();
const path = route.path;
console.log(path);

const { data: page } = await useAsyncData("my-page", queryContent(`${ path }`).findOne);

const formatDate = (dateString: string): string => {
  return dayjs(dateString).format("DD-MM-YYYY");
};
</script>

<template>
  <section>
    <div class="border rounded-full w-fit px-4 py-1 flex items-center gap-2">
      <NuxtLink to="/" class="text-sm font-medium">Docify</NuxtLink>
      <Icon name="material-symbols-light:chevron-right-rounded"/>
      <NuxtLink to="/" class="text-sm font-medium">{{ page?.category }}</NuxtLink>
      <Icon name="material-symbols-light:chevron-right-rounded"/>
      <span class="text-sm font-medium text-gray-500">{{ page?.title }}</span>
    </div>

    <div v-if="page?.image" class="mt-8 rounded-lg overflow-hidden group shadow-xl">
      <img :src="page?.image" :alt="page?.title"
           class="w-full aspect-video object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500">
    </div>

    <div v-if="page?.author" class="flex items-center gap-2 mt-8">
      <img :src="page?.author_avatar" :alt="page?.author" class="w-10 h-10 rounded-full object-cover border">
      <div>
        <h2 class="font-semibold text-sm">{{ page?.author }}</h2>
        <p class="text-xs text-gray-500">{{ formatDate(page?.date) }}</p>
      </div>
    </div>

    <article class="mt-8">
      <ContentDoc/>
    </article>

    <template v-if="page?.category">
      <hr class="my-8">
      <div>
        Danh mục:
        <NuxtLink to="/" class="text-sm border-2 px-2 py-1 rounded-md border-gray-700 font-semibold ml-1">
          {{ page?.category }}
        </NuxtLink>
      </div>
    </template>

    <template v-if="page?.tags">
      <hr class="my-8">
      <div>
        Thẻ:
        <NuxtLink v-for="tag in page.tags" to="/"
                  class="text-sm border-2 px-2 py-1 rounded-md font-semibold ml-1 bg-white">
          # {{ tag }}
        </NuxtLink>
      </div>
    </template>
  </section>
</template>

<style scoped>

</style>
