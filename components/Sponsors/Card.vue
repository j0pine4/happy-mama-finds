<template>

    <!-- Card -->
    <NuxtLink to="/" class="group flex flex-col bg-white border rounded-xl hover:shadow-md transition cursor-pointer" >
      <div class="aspect-w-16 aspect-h-9">
        <img class="w-full h-[200px] object-cover rounded-t-xl" :src="logo_url" alt="Image Description">
      </div>
      <div class="p-4 md:p-5">
        <h3 class="mt-4 text-lg font-bold text-dark">
          {{ title }}
        </h3>
        <p class="mt-2 leading-7 text-gray-600">
          {{ description }}
        </p>

        <button class="bg-primary text-white w-full p-3 rounded mt-4 hover:bg-primary/70">
          Learn More
        </button>
      </div>
    </NuxtLink>
    <!-- End Card -->

</template>

<script setup lang="ts">

    const props = defineProps({
        title: String,
        description: String,
        logo_url: String,
    })
</script>