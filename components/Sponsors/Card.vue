<template>

    <!-- Card -->
    <a :href="business_url" target="_blank" class="group flex flex-col bg-white border rounded-xl hover:shadow-md transition cursor-pointer" >
      <div class="aspect-w-16 aspect-h-9">

        <div class="w-full h-[200px] relative rounded-t-xl overflow-hidden">
          <nuxt-img class="h-full w-full p-6 object-cover object-center absolute top-0 z-10 group-hover:scale-105 transition-all duration-300" :src="logo_url" alt="Image Description"></nuxt-img>
          <nuxt-img class="object-cover object-center rounded-t-xl blur-xl" :src="logo_url" alt="Image Description"></nuxt-img>
        </div>
        
      </div>
      <div class="p-4 md:p-5 h-full flex flex-col justify-between">

        <div>
          <h3 class="mt-4 text-lg font-bold text-dark group-hover:text-primary transition-all duration-300">
            {{ title }}
          </h3>
          <p class="mt-2 leading-7 text-gray-600 place-self-end">
            {{ description }}
          </p>
        </div>

        <button class="bg-primary text-white w-full p-3 rounded mt-4 hover:bg-primary/70">
          Learn More
        </button>
      </div>
    </a>
    <!-- End Card -->

</template>

<script setup lang="ts">

    const props = defineProps({
        title: String,
        description: String,
        logo_url: String,
        business_url: String,
    })
</script>