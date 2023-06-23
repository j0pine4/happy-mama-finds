import Author from "./author"
import { Category } from "./category"


export interface BlogThumbnail {
    id: number,
    author: Author,
    headerImage_url: string,
    categories: Category[],
    title: string,
    title_slug: string,
    subtitle: string,
    created_on: string,
}

export interface BlogPost {
    id: number,
    author: Author,
    headerImage_url: string,
    content: any,
    categories: Category[],
    title: string,
    title_slug: string,
    subtitle: string,
    tags: string,
    created_on: string,
}

export interface BlogListPaginated{
    count: number,
    next: string | undefined,
    previous: string | undefined,
    results: BlogThumbnail[]
}
