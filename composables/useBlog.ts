import { BlogThumbnail, BlogPost, BlogListPaginated } from "~/models/blog/blog"

export const useBlog = () => {

    const config = useRuntimeConfig()

    const FetchBlogList = async (page: number) => {
        const { data, error } = await useFetch<BlogListPaginated>(`${config.public.BASE_URL}/api/blog/`, {
            params: {
                page: page
            }
        })
        return { data, error }
    }

    const FetchFeaturedBlogList = async () => {
        const { data, error } = await useFetch<BlogThumbnail[]>(`${config.public.BASE_URL}/api/blog/featured`)
        return { data, error }
    }

    const FetchLatestBlog = async () => {
        const { data, error } = await useFetch<BlogThumbnail>(`${config.public.BASE_URL}/api/blog/latest`)
        return { data, error }
    }

    const FetchBlog = async (slug:string | string[]) => {
        const { data, error } = await useFetch<BlogPost>(`${config.public.BASE_URL}/api/blog/${slug}/`)
        return { data, error }
    }

    const Blog = () => {

        const get = async (slug:string | string[]) => {
            const { data, error } = await useFetch<BlogPost>(`${config.public.BASE_URL}/api/blog/${slug}/`)
            return { data, error }
        }

        return get
    }

    const convertTags = (tagStr: string | undefined) => {
        if(tagStr){
            const tagList = tagStr.split(',').filter(e => e)
            return tagList
        }
    }

    return {
        FetchBlogList,
        FetchFeaturedBlogList,
        FetchLatestBlog,
        FetchBlog,
        convertTags,
        Blog
    }

}