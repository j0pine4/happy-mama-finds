<template>

    <NuxtLink :to="`blog/${props.title_slug}`"   class="group relative block">
        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
            <nuxt-img class="w-full h-full absolute top-0 left-0 object-cover" :src="headerImage_url" alt="Image Description" ></nuxt-img>
        </div>

        <div class="absolute top-0 inset-x-0 z-10">
            <div class="p-4 flex flex-col h-full sm:p-6">
                <!-- Avatar -->
                <div class="flex items-center">
                    <div class="h-[2.875rem] w-[2.875rem]">
                        <nuxt-img class="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full" :src="author?.avatar_url" alt="Image Description" ></nuxt-img>
                    </div>
                    <div class="ml-2.5 sm:ml-4">
                        <h4 class="font-semibold text-white"> {{ author?.firstName }} {{ author?.lastName }} </h4>
                        <p class="text-xs text-white/[.8]"> {{ convertDate(props.createdOn) }} </p>
                    </div>
                </div>
                <!-- End Avatar -->
            </div>
        </div>

        <div class="absolute bottom-0 inset-x-0 z-10">
            <div class="flex flex-col h-full p-4 sm:p-6">
                <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]"> {{ props.title }} </h3>
                <p class="mt-2 text-white/[.8]"> {{ props.subtitle }} </p>
            </div>
        </div>
    </NuxtLink>

</template>

<script setup lang="ts">

    import { useUtils } from '~/composables/useUtils';
import Author from '~/models/blog/author';
    const { convertDate } = useUtils()

    const props = defineProps({
        id: Number,
        author: Object as PropType<Author>,
        title: String,
        title_slug: String,
        subtitle: String,
        headerImage_url: String,
        createdOn: String,
    })
</script>