<template>
    <Head>
        <Title> Welcome to our blog! </Title>
        <Meta name="description" content="A list of posts for all types of mothers!" />
    </Head>
    
    <nav-bar></nav-bar>

    <div class="max-w-[85rem] mx-auto mb-12">

        <blog-primary-blog
            v-if="!latestBlogErrors && latestBlog" 
            :id="latestBlog.id"
            :author="latestBlog.author"
            :title="latestBlog.title"
            :title_slug="latestBlog.title_slug"
            :categories="latestBlog.categories"
            :subtitle="latestBlog.subtitle"
            :header-image_url="latestBlog.headerImage_url"
            :createdOn="latestBlog.created_on">
        </blog-primary-blog>

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
            v-if="!errorMsg && !isLoadingList" 
                v-for="blog in blogList?.results"
                :id="blog.id"
                :author="blog.author"
                :categories="blog.categories"
                :title="blog.title"
                :title_slug="blog.title_slug"
                :subtitle="blog.subtitle"
                :header-image_url="blog.headerImage_url"
                :created-on="blog.created_on"
                :isLoading="isLoadingList"
            ></blog-list-card>
            <blog-skeleton v-if="isLoadingList" v-for="i in 4"></blog-skeleton>
        </div>
        <pagination-component
            :currentPage="pageNumber"
            :count="blogList?.count"
            :numberPerPage="4"
            :previous="blogList?.previous"
            :next="blogList?.next"
            @previous="getPreviousPage"
            @next="getNextPage"
            @index-click="(page) => getPageIndex(page)"
        ></pagination-component>
    </div>
    
    <landing-page-footer-section></landing-page-footer-section>

</template>

<script setup lang="ts">

    import { BlogListPaginated } from '~/models/blog/blog';

    const pageNumber = ref<number>(1)
    const blogList = ref<BlogListPaginated>()
    const errorMsg = ref<Error>()
    const isLoadingList = ref<boolean>(false)

    const { FetchBlogList, FetchFeaturedBlogList, FetchLatestBlog } = useBlog()
    const {data:featuredBlogs, error:featuredBlogErrors} = await FetchFeaturedBlogList()
    const {data:latestBlog, error:latestBlogErrors} = await FetchLatestBlog()

    const getBlogList = async () => {

        isLoadingList.value = true

        const {data, error} = await FetchBlogList(pageNumber.value)

        if(data.value){
            blogList.value = data.value
        }

        if(error.value){
            errorMsg.value = error.value
        }

        isLoadingList.value = false
    }

    const getPreviousPage = async () => {
        pageNumber.value -= 1
        await getBlogList()
    }

    const getNextPage = async () => {
        pageNumber.value += 1
        await getBlogList()
    }

    const getPageIndex = async (pageIndex: number) => {
        pageNumber.value = pageIndex
        await getBlogList()
    }

    onMounted( () =>{
        getBlogList()
    })

</script>