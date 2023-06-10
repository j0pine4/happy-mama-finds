<template>
    <!-- Features -->
<div class="max-w-[85rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id="about">
  <div class="relative p-6 md:p-16">
    <!-- Grid -->
    <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 class="block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-primary">About Us</h2>
        <p class="mt-4 hidden md:block text-dark">Learn about our beliefs and goals!</p>

        <!-- Tab Navs -->
        <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
          <button type="button" class="hs-tab-active:bg-white hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
            <span class="flex">
              <HomeIcon class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-primary stroke-primary"></HomeIcon>
              <span class="grow ml-6">
                <span class="block text-lg font-semibold hs-tab-active:text-primary text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Building Connections, Cultivating Support</span>
                <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">We foster a sense of belonging and create a supportive community where mothers can connect, share, and uplift each other.</span>
              </span>
            </span>
          </button>

          <button type="button" class="hs-tab-active:bg-white hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
            <span class="flex">
              <GlobeAmericasIcon class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-primary stroke-primary"></GlobeAmericasIcon>
              <span class="grow ml-6">
                <span class="block text-lg font-semibold hs-tab-active:text-primary text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Embracing Diversity, Celebrating All Mothers</span>
                <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">We embrace diversity, inclusivity, and the unique experiences of all mothers, creating a safe and welcoming space for everyone.</span>
              </span>
            </span>
          </button>

          <button type="button" class="hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
            <span class="flex">
              <GiftIcon class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-primary stroke-primary"></GiftIcon>
              <span class="grow ml-6">
                <span class="block text-lg font-semibold hs-tab-active:text-primary text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Making a Positive Impact, Changing Lives</span>
                <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Creating opportunities for mothers to give back to their communities and make a lasting difference in the lives of others.</span>
              </span>
            </span>
          </button>
        </nav>
        <!-- End Tab Navs -->
      </div>
      <!-- End Col -->

      <div class="lg:col-span-6">
        <div class="relative">
          <!-- Tab Content -->
          <div>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
              <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description">
            </div>

            <div id="tabs-with-card-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
              <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1607748838605-ebcbe8f15772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description">
            </div>

            <div id="tabs-with-card-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
              <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1593113616828-6f22bca04804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description">
            </div>
          </div>
          <!-- End Tab Content -->

          <!-- SVG Element -->
          <div class="absolute bottom-0 left-0 -z-[1] translate-y-24 -translate-x-24">
            <img class="w-48 h-auto text-slate-400 dark:text-slate-700" src="https://static.vecteezy.com/system/resources/previews/010/109/977/original/brown-watercolor-background-free-png.png" alt="">
          </div>
          <!-- End SVG Element -->

        </div>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->

    <!-- Background Color -->
    <div class="absolute inset-0 grid grid-cols-12 w-full h-full">
      <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-white w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
    </div>
    <!-- End Background Color -->
  </div>
</div>
<!-- End Features -->
</template>

<script setup lang="ts">
import { HomeIcon, GlobeAmericasIcon, GiftIcon} from '@heroicons/vue/24/outline'
</script>