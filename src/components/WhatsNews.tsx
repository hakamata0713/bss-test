/* src/pages/index.tsx */
import { Post } from 'types/news'
import { client } from 'libs/client';
import React from "react";
import {
  Box,
  Link,
  Stack,
  Hide
} from "@chakra-ui/react";
import { DateTime } from 'components/DateTime'

type Props = {
  news: Post[];
};

export const WhatsNews = ({ news }: Props) => {
  return (
    <>
      {news.map(news => (
        <Box 
          key={news.id} 
          display="flex" 
          alignItems={{ bace: 'start', sm: 'center', md: 'center', lg: 'center'}}
          flexDirection={{ base: 'column', sm: 'row', md: 'row', lg: 'row' }}
          pt="1" pb="5" 
          borderBottom="1px" 
          borderColor="gray.300" 
          transition="all 0.3s" 
          _hover={{ bgColor: '#f5f5f5', opacity: '0.7', transition: 'all 0.3s' }}
        >
        <DateTime datetime={news.publishedAt as string} />
        <Link href={`/news/${news.id}`} fontSize="xl" lineHeight={1.6} marginTop="4" pl="1rem" flex={1} color="#0075c2" _hover={{ textDecoration: 'none' }}>
              {news.title}
        </Link>
        <Hide breakpoint='(max-width: 48em)'><Stack mt="5" mb="5" borderBottom="1px" borderColor="gray.300" /></Hide>
        </Box>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
};