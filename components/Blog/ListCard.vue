<template>
    <!-- Card -->
    <NuxtLink :to="`blog/${props.title_slug}`"  class="group sm:flex bg-white rounded-xl">
          <div class="flex-shrink-0 relative rounded-l-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
            <nuxt-img class="w-full h-full absolute top-0 left-0 object-cover" :src="headerImage_url" alt="Image Description" ></nuxt-img>
          </div>

          <div class="grow">
            <div class="p-4 flex flex-col h-full sm:p-6">
              <div class="mb-3">
                <p v-for="category in props.categories" class="mr-2 mb-2 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800"> {{ category?.name }} </p>
              </div>
              <h3 class="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-primary dark:text-gray-300 dark:group-hover:text-white">
                {{ props.title }}
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                {{ props.subtitle }}
              </p>

              <div class="mt-5 sm:mt-auto">
                <!-- Avatar -->
                <div class="flex items-center">
                  <div class="h-[2.875rem] w-[2.875rem] rounded-full">
                    <nuxt-img class="h-[2.875rem] w-[2.875rem] rounded-full" :src="author?.avatar_url" alt="Image Description" ></nuxt-img>
                  </div>
                  <div class="ml-2.5 sm:ml-4">
                    <h4 class="font-semibold text-gray-800 dark:text-gray-200">{{ author?.firstName }} {{ author?.lastName }}</h4>
                    <p class="text-xs text-gray-500"> {{ convertDate(props.createdOn) }} </p>
                  </div>
                </div>
                <!-- End Avatar -->
              </div>
            </div>
          </div>
    </NuxtLink>
      <!-- End Card -->

</template>

<script setup lang="ts">
import { useUtils } from '~/composables/useUtils';
import Author from '~/models/blog/author';
import { Category } from '~/models/blog/category';
const { convertDate } = useUtils()

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