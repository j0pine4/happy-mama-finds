<template>
    <!-- Hero -->
<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Grid -->
  <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 class="block text-3xl font-bold text-dark sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Connecting Moms. <span class="text-primary cursive">Enriching Lives.</span></h1>
      <p class="mt-3 text-lg text-dark dark:text-gray-400">Join us in creating positive change and fostering connections within your local community.</p>

    <!-- Subscribe -->
    <div class="max-w-6xl py-10 lg:py-16">
      <email-subscribe :newsletterHeader="true"></email-subscribe>
    </div>

    
    <!-- End Subscribe -->

    </div>
    <!-- End Col -->

    <div class="relative ml-4">
      <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=800&q=80" alt="Image Description">
      <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-white via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Hero -->
</template>