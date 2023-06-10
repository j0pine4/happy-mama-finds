<template>
    <!-- Card Blog -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-12 relative" id="events">
  <div class="text-white group bg-transparent hover:bg-white/75 hover:backdrop-blur transition-all duration-200 absolute top-0 left-0 w-full h-full rounded-xl flex justify-center items-center" >
    <div class="translate-y-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-200 max-w-2xl text-center mx-auto mb-10 lg:mb-14">
      <h2 class="block text-3xl font-bold text-primary sm:text-4xl lg:text-6xl lg:leading-tight">Events Coming Soon</h2>
      <p class="mt-1 text-dark">Please subscribe to our newsletter to be notified of upcoming events!</p>
      <email-subscribe :newsletterHeader="false"></email-subscribe>
    </div>
  </div>
  <!-- Title -->
  <div class="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
    <h2 class="block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-primary">Upcoming Events</h2>
    <p class="mt-1 text-dark">Forge lifelong friendships and beautiful memories through our engaging community events and activities.</p>
  </div>
  <!-- End Title -->

  <!-- Grid -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">

    <!-- Card -->
    <a v-for="event in fakeEventData" class="group flex flex-col bg-white border rounded-xl hover:shadow-md transition" href="#">
      <div class="aspect-w-16 aspect-h-9">
        <img class="w-full h-[200px] object-cover rounded-t-xl" :src="event.image" alt="Image Description">
      </div>
      <div class="p-4 md:p-5">
        <p class="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
          {{ event.category }}
        </p>
        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-primary dark:text-gray-300 dark:group-hover:text-white">
          {{ event.title }}
        </h3>
      </div>
    </a>
    <!-- End Card -->

  </div>
  <!-- End Grid -->

  <!-- Card -->
  <!-- <div class="text-center">
    <div class="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
      <div class="py-3 px-4 flex items-center gap-x-2">
        <p class="text-gray-600 dark:text-gray-400">
          Want to see more?
        </p>
        <a class="inline-flex items-center gap-x-1.5 text-primary decoration-2 hover:underline font-medium" href="../docs/index.html">
          Go here
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div> -->
  <!-- End Card -->
</div>
<!-- End Card Blog -->
</template>

<script setup lang="ts">
  const fakeEventData = [
    {
      category: 'Event',
      title: 'Bay City Mall Walking',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      category: 'Event',
      title: 'State Park Cleanup and Meetup',
      image: 'https://images.unsplash.com/photo-1530982534634-7f61b1f68825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80'
    },
    {
      category: 'Event',
      title: 'Craft Workshop',
      image: 'https://images.unsplash.com/photo-1488806374796-a4071c52353b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      category: 'Event',
      title: 'Mommy and Me Book Club',
      image: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
  ]
</script>