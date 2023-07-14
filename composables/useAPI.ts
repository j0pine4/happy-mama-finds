import { RuntimeConfig } from "nuxt/schema";
import { BlogListPaginated, BlogPost, BlogThumbnail } from "~/models/blog/blog";

export class API {

    config: RuntimeConfig;
    blog: Blog;

    constructor(){
        this.config = useRuntimeConfig()
        this.blog = new Blog(this.config)
    }
}

class Blog {
    config: RuntimeConfig;

    constructor(config: RuntimeConfig){
        this.config = config;
    }

    async get(slug: string | string[]) {
        const { data, error } = await useFetch<BlogPost>(`${this.config.public.BASE_URL}/api/blog/${slug}/`)
        return { data, error }
    }

    async getList(page: number){
        const { data, error } = await useFetch<BlogListPaginated>(`${this.config.public.BASE_URL}/api/blog/`, {
            params: {
                page: page
            }
        })
        return { data, error }
    }

    async getFeaturedList(){
        const { data, error } = await useFetch<BlogThumbnail[]>(`${this.config.public.BASE_URL}/api/blog/featured`)
        return { data, error }
    }


}