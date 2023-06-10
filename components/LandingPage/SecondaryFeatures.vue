<template>
    <!-- Features -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="aspect-w-16 aspect-h-7">
    <img class="w-full object-cover rounded-xl max-h-[300px]" src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image Description">
  </div>

  <!-- Grid -->
  <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div class="lg:col-span-1">
      <h1 class="block text-xl font-bold text-dark sm:text-2xl lg:text-3xl lg:leading-tight dark:text-white">Celebrating Motherhood,  <span class="text-primary cursive">Spreading Happiness.</span></h1>
      <p class="mt-2 md:mt-4 text-gray-500">
        Find support, inspiration, and a sense of belonging as you navigate the joys of motherhood.
      </p>
    </div>
    <!-- End Col -->

    <div class="lg:col-span-2">
      <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
        <!-- Icon Block -->
        <div class="flex gap-x-5">
          <HomeIcon class="flex-shrink-0 mt-1 w-6 h-6 text-primary stroke-primary"></HomeIcon>
          <div class="grow">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              Community Connections
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              Connect with like-minded individuals, fostering meaningful friendships and a sense of belonging.
            </p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-5">
          <HeartIcon class="flex-shrink-0 mt-1 w-6 h-6 text-primary stroke-primary"></HeartIcon>
          <div class="grow">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              Nurturing Relationships
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              Fun and engaging activities that promote bonding between mothers and their children, fostering cherished memories.
            </p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-5">
          <MegaphoneIcon class="flex-shrink-0 mt-1 w-6 h-6 text-primary stroke-primary"></MegaphoneIcon>
          <div class="grow">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              Your Voice Matters
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              Contribute Your Ideas for Inexpensive Family Events that Promote Positive Change in Our Community.
            </p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-5">
          <BuildingStorefrontIcon class="flex-shrink-0 mt-1 w-6 h-6 text-primary stroke-primary"></BuildingStorefrontIcon>
          <div class="grow">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              Support Local Causes
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              Engage in charitable initiatives or volunteer opportunities that benefit the community and address the needs of mothers and families.
            </p>
          </div>
        </div>
        <!-- End Icon Block -->
      </div>
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Features -->
</template>

<script setup lang="ts">
import { HomeIcon, HeartIcon, MegaphoneIcon, BuildingStorefrontIcon} from '@heroicons/vue/24/outline'
</script>