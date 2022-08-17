import { Pagination } from '@material-ui/lab';
import { useRouter } from 'next/router';
import { client } from 'libs/client';
import { GetStaticPaths, GetStaticProps, } from "next";
import type { Post } from "types/news";
import { Header } from 'components/Header'
import { PostList } from 'components/PostList';
import type { PostTag } from 'types/news';
import { Breadcrumbs } from 'components/Breadcrumbs';
import {
    Box,
    Container,
    Heading,
    Hide
} from "@chakra-ui/react";
import { BLOG_PER_PAGE } from 'settings/siteSettings';

type Props = {
    news: Post[]
    totalCount: number
    currentPage: number
    categories: PostTag
    categoriesId?: string;
};

export default function BlogTagId({ news, totalCount, currentPage, categories}: Props) {
    const router = useRouter();
    const getPath = (p: number) => {
        void router.push(`/categories/${categories.id}/page/${p}`);
    }
    const handleChangePage = (p: number) => {
      void router.push(`/page/${p}`); 
    }
    const pageCount = Math.ceil(totalCount / BLOG_PER_PAGE)
    return (
        <Box>
            <Header />
            <Container as="main" maxW="container.lg" marginTop="4" marginBottom="16">
                <Breadcrumbs categories={categories} />
                <PostList news={news} />
                <Hide breakpoint='(max-width: 30em)'>
                <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={(p, number) =>getPath(number)}
                    boundaryCount={1}
                    siblingCount={1}

                    color="primary"
                    size="large"
                />
                </Hide>
                <Hide breakpoint='(min-width: 30em)'>
                    <Pagination
                        count={pageCount}
                        page={currentPage}
                        onChange={(p, number) =>getPath(number)}
                        boundaryCount={1}
                        siblingCount={0}
                        color="primary"
                        size="large"
                    />
                </Hide>
            </Container>
        </Box>
    );
}

const getAllTagPagePaths = async () => {
    const resTag = await client.getList<PostTag>({
        endpoint: 'categories',
        // タグを全て取得する必要があるが、記事数に比べると限定的
        // これ以上は増えないだろう、という値をいれておく
        queries: { limit: 100 }
    })

    const paths: string[][] = await Promise.all(
        // タグごとに繰りかえして、紐づいた記事一覧のGetリクエストを行い、totalCountを取得していく
        resTag.contents.map((item: PostTag) => {
            const result = client
                .getList<Post>({
                    endpoint: 'news',
                    queries: {
                        filters: `categories[contains]${item.id}`,
                    },
                })
                // タグごとにページ１…ページ２…とパスを生成していく
                .then(({ totalCount }) => {
                    const range = (start: number, end: number) =>
                        [...Array(end - start + 1)].map((_, i) => start + i)

                    return range(1, Math.ceil(totalCount / BLOG_PER_PAGE)).map(
                        (repo) => `/categories/${item.id}/page/${repo}`
                    )
                })
            return result
        })
    )
    // タグごとに配列になっているので、最後にフラットにして返す
    return paths.flat()
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllTagPagePaths()
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, { categoriesId: string, id: string }> = async ({ params }) => {
    if (!params) throw new Error("Error Categories ID Not Found");
    const categoriesId = params.categoriesId
    const pageId = Number(params.id);
    const data = await client.getList<Post>({
        endpoint: "news",
        queries: {
            offset: (pageId - 1) * BLOG_PER_PAGE,
            limit: BLOG_PER_PAGE, filters: `categories[contains]${categoriesId}`
        }
    });
    const categories = await client.getListDetail<PostTag>({
        endpoint: 'categories', contentId: categoriesId
    })

    return {
        props: {
            news: data.contents,
            totalCount: data.totalCount,
            currentPage: pageId,
            categories: categories
        },
    };
};