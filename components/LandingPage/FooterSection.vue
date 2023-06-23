<template>
    <footer class="bg-dark">
  <div class="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
    <!-- Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div class="col-span-full lg:col-span-1">
        <a class="flex-none text-2xl font-semibold text-white" href="#" aria-label="Brand">Happy Mama Finds</a>
        <p class="text-white">contact@happymamafinds.com</p>
      </div>
      <!-- End Col -->

      <div class="col-span-1">
        <!-- <h4 class="font-semibold text-gray-100">Product</h4>

        <div class="mt-3 grid space-y-3">
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Pricing</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Changelog</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Docs</a></p>
        </div> -->
      </div>
      <!-- End Col -->

      <div class="col-span-1">
        <!-- <h4 class="font-semibold text-gray-100">Company</h4> -->

        <!-- <div class="mt-3 grid space-y-3">
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">About us</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Blog</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Careers</a> <span class="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md">We're hiring</span></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Customers</a></p>
        </div> -->
      </div>
      <!-- End Col -->

      <div class="col-span-2">
        <h4 class="font-semibold text-2xl text-gray-100">Stay up to date</h4>
        <email-subscribe></email-subscribe>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->

    <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center">
        <p class="text-sm text-white">© 2022 Happy Mama Finds. All rights reserved.</p>
      </div>
      <!-- End Col -->

      <!-- Social Brands -->
      <div>
        <a class=" p-4 inline-flex justify-center items-center gap-x-3.5 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition" target="_blank" href="https://www.facebook.com/profile.php?id=100087238977967">
          Follow our page on Facebook
        </a>
        <NuxtLink to="/auth/login" class="p-4 inline-flex justify-center items-center gap-x-3.5 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition">Volunteer Login</NuxtLink>
      </div>
      <!-- End Social Brands -->
    </div>
  </div>
</footer>
</template>