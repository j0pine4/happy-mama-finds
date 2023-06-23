<template>
    <nav-bar></nav-bar>

    <div class="max-w-[85rem] mx-auto mb-12">

        <blog-primary-blog></blog-primary-blog>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <blog-card 
                v-if="!featuredBlogErrors" 
                v-for="blog in featuredBlogs"
                :id="blog.id"
                :author="blog.author"
                :title="blog.title"
                :title_slug="blog.title_slug"
                :subtitle="blog.subtitle"
                :header-image_url="blog.headerImage_url"
                :createdOn="blog.created_on"
            ></blog-card>
            <div v-if="featuredBlogErrors">
                <h1> {{ featuredBlogErrors }} </h1>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <blog-list-card
            v-if="!blogListError" 
                v-for="blog in blogList?.results"
                :id="blog.id"
                :author="blog.author"
                :categories="blog.categories"
                :title="blog.title"
                :title_slug="blog.title_slug"
                :subtitle="blog.subtitle"
                :header-image_url="blog.headerImage_url"
            ></blog-list-card>
            <div v-if="blogListError">
                <h1> {{ blogListError }} </h1>
            </div>
        </div>
        <pagination-component
            :currentPage="pageNumber"
            :count="blogList?.count"
            :numberPerPage="4"
            :previous="blogList?.previous"
            :next="blogList?.next"
        ></pagination-component>
    </div>
    
    <landing-page-footer-section></landing-page-footer-section>

</template>

<script setup lang="ts">

    const pageNumber = ref<number>(1)

    const { FetchBlogList, FetchFeaturedBlogList } = useBlog()
    const {data:blogList, error:blogListError} = await FetchBlogList(pageNumber.value)
    const {data:featuredBlogs, error:featuredBlogErrors} = await FetchFeaturedBlogList()

</script>