/* src/pages/index.tsx */
import type { NextPage } from 'next'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { client } from 'libs/client';
import { Post } from 'types/news'
import { PostList } from 'components/PostList';
import { Breadcrumbs } from 'components/Breadcrumbs';
import ReturnTopButton from 'components/ReturnTopButton';
import {
  Container,
  Heading,
  Hide,
} from "@chakra-ui/react";
import { BLOG_PER_PAGE } from 'settings/siteSettings';
import { Pagination } from '@material-ui/lab';
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
  const data = await client.getList({ endpoint: "news", queries: { limit: BLOG_PER_PAGE } });
  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount
    },
  };
};

type Props = {
  news: Post[];
  totalCount: number
  currentPage?: number;
};


const Home: NextPage<Props> = ({ news, totalCount, currentPage }) => {
  const router = useRouter();
  
  // currentPageがundefinedの場合は1ページ目として扱う
  const pageNumber = currentPage || 1;
  
  const handleChangePage = (p: number) => {
    void router.push(`/page/${p}`); 
  }
  const pageCount = Math.ceil(totalCount / BLOG_PER_PAGE)
  return (
    <>
    <Header />
    <Container as="main" maxW="container.lg" marginTop="4" marginBottom="16">
      <Breadcrumbs  currentPage={currentPage} />
      <PostList news={news} />
      <Hide breakpoint='(max-width: 30em)'>
      <Pagination
          count={pageCount}
          page={pageNumber}
          onChange={(p, number) => handleChangePage(number)}
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
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default Home