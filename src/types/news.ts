/* src/types/blog.ts */
import type { MicroCMSListContent } from "microcms-js-sdk";

export type PostTag = {
    name: string
} & MicroCMSListContent

export type Post = {
    title: string;
    description: string,
    categories: PostTag[];
    content: string,
} & MicroCMSListContent