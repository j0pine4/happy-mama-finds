<template>
    <!-- Card Blog -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-12 relative" id="events">

  <!-- Title -->
  <div class="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
    <h2 class="block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-primary">Upcoming Events</h2>
    <p class="mt-1 text-dark">Forge lifelong friendships and beautiful memories through our engaging community events and activities.</p>
  </div>
  <!-- End Title -->

  <!-- Grid -->
  <div class="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">

    <!-- Card -->
    <NuxtLink v-if="!error" v-for="event in eventList?.events" :to="event.url" class="group flex flex-col bg-white border rounded-xl hover:shadow-md transition cursor-pointer" >
      <div class="aspect-w-16 aspect-h-9">
        <nuxt-img class="w-full h-[200px] object-cover rounded-t-xl" :src="event.logo.url" alt="Image Description"></nuxt-img>
      </div>
      <div class="p-4 md:p-5">
        <p class="mt-2 font-bold text-primary">
          {{ convertDateTime(event.start.utc) }}
        </p>
        <h3 class="mt-4 text-lg font-bold text-dark">
          {{ event.name.text }}
        </h3>
        <p class="mt-2 leading-7 text-gray-600">
          {{ event.description.text }}
        </p>

        <button class="bg-primary text-white w-full p-3 rounded mt-4 hover:bg-primary/70">
          Get Tickets
        </button>
      </div>
    </NuxtLink>
    <!-- End Card -->

  </div>
  <!-- End Grid -->

  <!-- Mobile Carousel -->
  <div class="md:hidden">
    <swiper
      v-if="!error"
      :slides-per-view="1.5"
      :space-between="25"
    >
      <swiper-slide v-for="event in eventList?.events">
        <NuxtLink :to="event.url" class="group flex flex-col bg-white border rounded-xl hover:shadow-md transition cursor-pointer w-full" >
          <div class="aspect-w-16 aspect-h-9">
            <nuxt-img class="w-full h-[200px] object-cover rounded-t-xl" :src="event.logo.url" alt="Image Description"></nuxt-img>
          </div>
          <div class="p-4 md:p-5">
            <p class="mt-2 font-bold text-primary">
              {{ convertDateTime(event.start.utc) }}
            </p>
            <h3 class="mt-4 text-lg font-bold text-dark">
              {{ event.name.text }}
            </h3>
            <p class="mt-2 leading-7 text-gray-600">
              {{ event.description.text }}
            </p>

            <button class="bg-primary text-white w-full p-3 rounded mt-4 hover:bg-primary/70">
              Get Tickets
            </button>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>

</div>
<!-- End Mobile Carousel -->

<h1 v-if="error"> {{ error }} </h1>

</div>
<!-- End Card Blog -->
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import { useEvents } from '~/composables/useEvents';
  import { useUtils } from '~/composables/useUtils';
  const { fetchEvents } = useEvents()
  const {data:eventList, error } = fetchEvents()
  const { convertDateTime } = useUtils()

</script>

<style>
  .swiper{
    width: 100%;
  }
</style>