import { client } from "libs/client";
import type { Post } from "types/news";
import type { GetStaticPaths, GetStaticProps, } from "next";
import {
    Box,
    Container,
    Divider,
    Heading,
    Stack,
} from "@chakra-ui/react";
import React from "react";
import { Header } from "components/Header";
import { Footer } from 'components/Footer'
import { DateTime } from "components/DateTime";
import { MarkdownTemplate } from 'components/MarkdownTemplate'
import { Breadcrumbs } from 'components/Breadcrumbs';
import ReturnTopButton from 'components/ReturnTopButton';

type Props = {
    news: Post
}

export default function Article({ news }: Props) {
    return (
        <Box>
            <Header />
            <Container as="main" maxW="container.md" marginTop="4" marginBottom="16">
            <Breadcrumbs />
                <Stack spacing="8">
                    <Heading as="h1" fontSize="4xl" lineHeight={1.6}>
                        {news.title}
                    </Heading>
                    <DateTime datetime={news.publishedAt as string} />
                </Stack>
                <Divider marginY="8" />
                {/* 記事本文 */}
                <MarkdownTemplate source={news.content} />
            </Container >
            <Footer />
            <ReturnTopButton />
        </Box >
    )
}

/* 記事詳細の静的ファイルの作成 */
export const getStaticPaths: GetStaticPaths = async () => {
    // limitがデフォルトで10なので、記事数が10以上になると古い記事が生成されない
    // そのため、一旦totalCountを取得して、limitに指定してリクエストを投げる。
    const data = await client.getList<Post>({ endpoint: "news", queries: { fields: 'id' } });
    const totalCount = data.totalCount
    const allData = await client.getList<Post>({ endpoint: "news", queries: { limit: totalCount } });
    const paths = allData.contents.map((content) => `/news/${content.id}`);
    return { paths, fallback: false };
};

// パラメーターから記事詳細データを取得
export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
    if (!params) throw new Error("Error Slug Not Found");
    const slug = params.slug;
    const data = await client.getListDetail<Post>({ endpoint: "news", contentId: slug });
    return {
        props: {
            news: data,
        },
    };
};