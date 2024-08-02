<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="w-full bg-white border-b shadow px-4">
      <div
        class="max-w-5xl mx-auto flex items-center justify-between gap-4 min-h-[81px]">
        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="flex items-center gap-2">
            <Icon name="fluent-emoji:card-index-dividers" class="w-8 h-8 -mt-1"/>
            <h1 class="text-lg font-semibold">Docify</h1>
          </NuxtLink>
          <nav class="ml-4 text-sm flex items-center gap-4 font-medium">
            <NuxtLink to="/posts">Bài viết</NuxtLink>
            <NuxtLink to="/categories">Danh mục</NuxtLink>
            <NuxtLink to="/tags">Thẻ</NuxtLink>
          </nav>
        </div>

        <div class="flex items-center gap-2">
          <button class="w-9 h-9 rounded-full border flex items-center justify-center">
            <Icon name="hugeicons:github-01" size="24" class="text-gray-600"></Icon>
          </button>
          <button class="w-9 h-9 rounded-full border flex items-center justify-center">
            <Icon name="hugeicons:search-02" size="20" class="text-gray-600"></Icon>
          </button>
        </div>
      </div>
    </header>
    <main class="bg-[#f4f5f9] grow px-4">
      <div class="max-w-5xl mx-auto my-8">
        <slot/>
      </div>
    </main>
    <footer class="border-t px-4">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-3 border-b py-8">
          <div class="border-r col-span-1 pr-8">
            <h3 class="font-bold text-3xl">Docify</h3>
            <p class="text-gray-600 mt-4">
              Docify: just focus on writing, we'll take care of the rest.
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
        <div class="flex items-center justify-between text-xs">
          <div class="text-gray-600">
            © 2024 Docify. All rights reserved.
          </div>
          <div class="flex items-center gap-4 py-2">
            <NuxtLink to="/" class="text-gray-600">
              <Icon name="hugeicons:github-01" size="24"/>
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>
