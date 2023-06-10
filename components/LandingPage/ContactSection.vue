<template>
    <!-- Contact Us -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id="contact">
  <!-- <p> {{  contactData  }} </p> -->
  <div class="">
    <div class="">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        Contact us
      </h1>
      <p class="mt-1 text-gray-600 dark:text-gray-400">
        We'd love to talk about how we can help you.
      </p>
    </div>

    <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
      <!-- Card -->
      <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-primary bg-white">
        <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
          Fill in the form
        </h2>

        <form>
          <div class="grid gap-4">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="border rounded">
                <label for="hs-firstname-contacts-1" class="sr-only">First Name</label>
                <input type="text" v-model="contactData.firstname" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="First Name">
              </div>

              <div class="border rounded">
                <label for="hs-lastname-contacts-1" class="sr-only">Last Name</label>
                <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Last Name">
              </div>
            </div>
            <!-- End Grid -->

            <div class="border rounded">
              <label for="hs-email-contacts-1" class="sr-only">Email</label>
              <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Email">
            </div>

            <div class="border rounded">
              <label for="hs-phone-number-1" class="sr-only">Phone Number</label>
              <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Phone Number">
            </div>

            <div class="border rounded">
              <label for="hs-about-contacts-1" class="sr-only">Details</label>
              <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Details"></textarea>
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-4 grid">
            <button type="submit" class="inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-primary/50 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Send inquiry</button>
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-gray-500">
              We'll get back to you in as soon as possible.
            </p>
          </div>
        </form>
      </div>
      <!-- End Card -->

      <div class="divide-y divide-gray-200 dark:divide-gray-800">

        <!-- Icon Block -->
        <div class="flex gap-x-7 py-6">
          <QuestionMarkCircleIcon class="flex-shrink-0 w-6 h-6 mt-1.5 stroke-primary"></QuestionMarkCircleIcon>
          <div>
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">Questions</h3>
            <p class="mt-1 text-sm text-gray-500">Please send us any potential questions you may have</p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-7 py-6">
          <LightBulbIcon class="flex-shrink-0 w-6 h-6 mt-1.5 stroke-primary"></LightBulbIcon>
          <div>
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">New Ideas</h3>
            <p class="mt-1 text-sm text-gray-500">We'd love to hear any suggestions for new and exciting events!</p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-7 py-6 cursor-pointer">
          <ChatBubbleLeftIcon class="flex-shrink-0 w-6 h-6 mt-1.5 stroke-primary"></ChatBubbleLeftIcon>
          <a href="#faq">
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">FAQ</h3>
            <p class="mt-1 text-sm text-gray-500">Search our FAQ for answers to anything you might ask.</p>
          </a>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class=" flex gap-x-7 py-6">
          <GiftIcon class="flex-shrink-0 w-6 h-6 mt-1.5 stroke-primary"></GiftIcon>
          <div class="cursor-pointer">
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">Provide a Donation</h3>
            <p class="mt-1 text-sm text-gray-500">We partner with Stripe to accept secure donations.</p>
          </div>
        </div>
        <!-- End Icon Block -->
      </div>
    </div>
  </div>
</div>
<!-- End Contact Us -->
</template>

<script lang="ts" setup>

  import { QuestionMarkCircleIcon, LightBulbIcon, ChatBubbleLeftIcon, GiftIcon } from '@heroicons/vue/24/outline'

  const contactData = ref(
    {
      firstname: "",
      lastname: "",
      phoneNumber: "",
      details: "",
    }
  )
  const isSubmitted = ref(false)


</script>