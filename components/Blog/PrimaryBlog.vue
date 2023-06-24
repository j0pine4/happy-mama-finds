<template>
    <!-- Card Blog -->
<div class="max-w-[85rem] max-h-[600px] mb-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white rounded-xl">
  <!-- Grid -->
  <div class="grid sm:grid-cols-2 sm:items-center gap-8">
    <div class="sm:order-2 max-h-[300px]">
      <div class="relative pt-[50%]  sm:pt-[100%] rounded-lg">
        <img class="w-full max-h-[300px] absolute top-0 left-0 object-cover rounded-lg" :src="headerImage_url" alt="Image Description">
      </div>
    </div>
    <!-- End Col -->

    <div class="sm:order-1">
      <p v-for="category in props.categories" class="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
        {{ category?.name }}
      </p>

      <h2 class="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
        <NuxtLink :to="`blog/${props.title_slug}`" class="hover:text-primary dark:text-gray-300 dark:hover:text-white">
          {{ props.title }}
        </NuxtLink>
      </h2>

      <!-- Avatar -->
      <div class="mt-6 sm:mt-10 flex items-center">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 sm:h-14 sm:w-14 rounded-full" :src="author?.avatar_url" alt="Image Description" loading="lazy">
        </div>

        <div class="ml-3 sm:ml-4">
          <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
            {{ author?.firstName }} {{ author?.lastName }}
          </p>
          <p class="text-xs text-gray-500">
            {{ author?.bio }}
          </p>
        </div>
      </div>
      <!-- End Avatar -->

      <div class="mt-5">
        <NuxtLink :to="`blog/${props.title_slug}`" class="inline-flex items-center gap-x-1.5 text-dark decoration-2 hover:underline font-medium">
          Read more
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Card Blog -->
</template>

<script setup lang="ts">

  import Author from '~/models/blog/author';
  import { Category } from '~/models/blog/category';

  const props = defineProps({
        id: Number,
        author: Object as PropType<Author>,
        categories: Object as PropType<Category[]>,
        title: String,
        title_slug: String,
        subtitle: String,
        headerImage_url: String,
        createdOn: String,
    })

</script>