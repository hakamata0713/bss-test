import { client } from 'libs/client';
import { GetStaticPaths, GetStaticProps, } from "next";
import type { Post } from "types/news";
import { Header } from 'components/Header'
import { PostList } from 'components/PostList';
import { Breadcrumbs } from 'components/Breadcrumbs';
import {
    Box,
    Container,
    Heading,
    Hide
} from "@chakra-ui/react";
import { BLOG_PER_PAGE } from 'settings/siteSettings';
import { Pagination } from '@material-ui/lab';
import { useRouter } from 'next/router';

type Props = {
    news: Post[]
    totalCount: number
    currentPage: number
};

export default function BlogPageId({ news, totalCount, currentPage }: Props) {
    const router = useRouter();
    const handleChangePage = (p: number) => {
      void router.push(`/page/${p}`); 
    }
    const pageCount = Math.ceil(totalCount / BLOG_PER_PAGE)
    return (
        <Box>
            <Header />
            <Container as="main" maxW="container.lg" marginTop="4" marginBottom="16">
                <Breadcrumbs />
                <PostList news={news} />
                <Hide breakpoint='(max-width: 30em)'>
                <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={(p, number) =>handleChangePage(number)}
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
                        onChange={(p, number) =>handleChangePage(number)}
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

// 静的ファイルの生成
export const getStaticPaths: GetStaticPaths = async () => {
    const repos = await client.get({ endpoint: "news" });
    const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, Math.ceil(repos.totalCount / BLOG_PER_PAGE)).map((repo) => `/page/${repo}`);
    return { paths, fallback: false };
};

// アクセスされたpageナンバーに応じたデータの取得
export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
    if (!params) throw new Error("Error Page Number Not Found");
    const pageId = Number(params.id);
    const data = await client.getList({
        endpoint: "news",
        queries: {
            offset: (Number(pageId) - 1) * BLOG_PER_PAGE,
            limit: BLOG_PER_PAGE
        }
    });
    return {
        props: {
            news: data.contents,
            totalCount: data.totalCount,
            currentPage: pageId
        },
    };
};