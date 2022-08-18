/* src/pages/index.tsx */
import type { NextPage } from 'next'
import NextLink from "next/link";
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { client } from 'libs/client';
import { Post } from 'types/news'
import { WhatsNews } from 'components/WhatsNews'
import CarouselCard from 'components/CarouselCard'
import ReturnTopButton from 'components/ReturnTopButton';
import React from "react";
import { IoIosBusiness } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import {
  Container,
  Heading,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "news", queries: { offset: 0, limit: 5 } });

  return {
    props: {
      news: data.contents,
    },
  };
};

type Props = {
  news: Post[];
};

const Home: NextPage<Props> = ({ news }) => {
  const outerBoxStyles = {
    p: 'full',
    background:
      'url(images/toppage.webp) center/cover no-repeat',
  }

  const innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: 'full',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '22px',
  }
  return (
    <>
    <Header />
    <Box maxW="full" h="100vh" sx={outerBoxStyles}>
      <Box sx={innerBoxStyles} backdropFilter='auto' backdropContrast='40%' px={{ base: 5, sm: 5, md: 0, lg: 0 }}>皆様のオフィス、IT環境をより安全に、そして快適に</Box>
    </Box>
    <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
      <CarouselCard />
      <Heading as="h2" size='lg' pt={10} mt={12} textAlign="start">株式会社ビー・エス・サイトーとは</Heading>
      <Text pt={10}>
        昭和46年に秋田駅前で「ビジネスショップサイトー」として創業以来、文具事務機器販売からIT関連サービスのご提供まで、一貫して皆様のオフィスの”頼れるパートナー”として活動して参りました。<br />
        これからも、地域の皆様の情報化や活性化に寄与すると共に、仕事を通して社員の成長と豊かな生活を実現し、さらには秋田の優秀な若者たちの活躍の場を創出出来る企業を目指します。
      </Text>
      <Heading as="h2" size='lg' mt={20} textAlign="center">新着情報</Heading>
      <WhatsNews news={news} />
      <Box pt={5} textAlign="center">
        <NextLink href="/news" passHref><Button p={5} bgColor="#333" color="#fff" _hover={{ bgColor: '#555' }} _active={{ bgColor: '#555' }}>記事一覧</Button></NextLink>
      </Box>

      <Box pt={20} display="flex"justifyContent="space-around" alignItems="center" flexDirection={{ base: 'column', sm: 'row', md: 'row', lg: 'row' }} m="0 auto" w="80%" textAlign="center">

        <Box p={5}>
          <NextLink href="/about" passHref>
            <Button w="100px" h="100px" borderRadius="50%" bgColor="#0075c2" _hover={{ bgColor: '#4E93C2' }}><IoIosBusiness size={'100px'} color={'#fff'} /></Button>
          </NextLink>
          <Heading as="h4" size="md" pt={5}>会社案内</Heading>
        </Box>
        
        <Box p={5} mt={{ base: '5rem', sm: '0', md: '0', lg: '0' }}>
          <NextLink href="/services" passHref>
            <Button w="100px" h="100px" borderRadius="50%" bgColor="#0075c2" _hover={{ bgColor: '#4E93C2' }}><RiComputerLine size={'100px'} color={'#fff'} /></Button>
          </NextLink>
          <Heading as="h4" size="md" pt={5}>事業内容</Heading>
        </Box>
        
      </Box>

      <Box pt={20} display="flex" justifyContent="space-around" alignItems="center" flexDirection={{ base: 'column', sm: 'row', md: 'row', lg: 'row' }} m="0 auto" w="80%" textAlign="center">

        <Box p={5}>
          <NextLink href="/recruit" passHref>
            <Button w="100px" h="100px" borderRadius="50%" bgColor="#0075c2" _hover={{ bgColor: '#4E93C2' }}><BsFillPersonFill size={'100px'} color={'#fff'} /></Button>
          </NextLink>
          <Heading as="h4" size="md" pt={5}>採用情報</Heading>
        </Box>

        <Box p={5} mt={{ base: '5rem', sm: '0', md: '0', lg: '0' }}>
        <NextLink href="/contacts" passHref>
          <Button w="100px" h="100px" borderRadius="50%" bgColor="#0075c2" _hover={{ bgColor: '#4E93C2' }}><AiFillMail size={'100px'} color={'#fff'} /></Button>
        </NextLink>
          <Heading as="h4" size="md" pt={5}> お問い合わせ</Heading>
        </Box>

      </Box>
    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default Home