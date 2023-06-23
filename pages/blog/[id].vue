<template>
<!-- Blog Article -->
<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto bg-white">
  <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
    <!-- Content -->
    <div class="lg:col-span-2">
      <div class="py-8 lg:pr-4 lg:pr-8">
        <div class="space-y-5 lg:space-y-8">
          <NuxtLink to="/blog" class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline">
            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            Back to Blog
          </NuxtLink>

          <h2 class="text-3xl font-bold lg:text-5xl text-primary"> {{ blogPost?.title }} </h2>
          <h4 class="text-3xl font-bold lg:text-2xl"> {{ blogPost?.subtitle }} </h4>

          <div class="flex items-center gap-x-5">
            <p v-for="category in blogPost?.categories" class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800">
              {{ category.name }}
            </p>
            <p class="text-xs sm:text-sm text-gray-800 dark:text-gray-200">{{ convertDate(blogPost?.created_on) }}</p>
          </div>

          <!-- Content -->
            <img :src="blogPost?.headerImage_url" alt="">
            <div v-html="blogPost?.content" v-if="!error"></div>
            <p v-else> {{ error }} </p>
          <!-- Content End -->

          <div class="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
            <!-- Badges/Tags -->
            <div>
              <p 
              v-for="tag in convertTags(blogPost?.tags)"
              class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200" >
                {{ tag }}
              </p>
            </div>
            <!-- End Badges/Tags -->

            <div class="flex justify-end items-center gap-x-1.5">

              <!-- Button -->
              <div class="hs-dropdown relative inline-flex">
                <button type="button" id="blog-article-share-dropdown" class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:focus:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-slate-900 dark:focus:ring-offset-blue-500">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                    <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                  </svg>
                  Share
                </button>
                <div class="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-white shadow-2xl rounded-xl p-2 dark:bg-gray-800" aria-labelledby="blog-article-share-dropdown">
                  <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                    </svg>
                    Copy link
                  </a>
                  <div class="border-t border-gray-200 my-2 dark:border-gray-700"></div>
                  <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    Share on Twitter
                  </a>
                  <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                    Share on Facebook
                  </a>
                  <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    Share on LinkedIn
                  </a>
                </div>
              </div>
              <!-- Button -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Content -->

    <!-- Sidebar -->
    <div class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
      <div class="sticky top-0 left-0 py-8 lg:pl-8">
        <!-- Avatar Media -->
        <div class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
          <a class="block flex-shrink-0" href="#">
            <img class="h-10 w-10 rounded-full" :src="blogPost?.author.avatar_url" alt="Image Description">
          </a>

          <div class="group grow block">
            <h5 class="group-hover:text-gray-600 text-sm font-semibold text-dark">{{ blogPost?.author.firstName }} {{ blogPost?.author.lastName }}</h5>
            <p class="text-sm text-gray-500">{{ blogPost?.author.bio }}</p>
          </div>

        </div>
        <!-- End Avatar Media -->

        <div class="space-y-6 mb-12">

          <!-- Media -->
          <NuxtLink :to="`/blog/${blog.title_slug}`"  v-for="blog in featuredBlogs" class="group flex items-center gap-x-6 cursor-pointer">
            <div class="grow">
              <p class="font-bold text-gray-800 group-hover:text-primary">
                {{ blog.title }}
              </p>
              <p class="text-sm  text-gray-400 group-hover:text-primary">
                {{ blog.subtitle }}
              </p>
            </div>

            <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" :src="blog.headerImage_url" alt="Image Description">
            </div>
          </NuxtLink>

          <!-- End Media -->
        </div>

        <email-subscribe :newsletter-header="true"></email-subscribe>

      </div>
    </div>
    <!-- End Sidebar -->
  </div>
</div>
<!-- End Blog Article -->
</template>

<script setup lang="ts">
    const route = useRoute()
    const { FetchBlog, FetchFeaturedBlogList, convertTags, convertDate } = useBlog()
    const {data:featuredBlogs, error:featuredBlogErrors} = await FetchFeaturedBlogList()
    const { data:blogPost, error } = await FetchBlog(route.params.id)
</script>

<style>

    h1 {
        margin-top: 25px;
        margin-bottom: 15px;
    }

    h1 span{
        font-weight: bold;
        font-size: 32px;
        font-family: 'Raleway', sans-serif;
        color: #e2aea0 !important;
    }

    span{
        line-height: 2rem;
        font-family: 'Raleway', sans-serif;
        color: #6f6355;
    }

    img{
        width: 100% !important;
        margin-bottom: 15px;
        object-fit: cover;
        border-radius: 25px;
    }
</style>