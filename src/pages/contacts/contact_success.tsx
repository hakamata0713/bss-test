/* src/pages/index.tsx */
import type { NextPage } from 'next'
import NextLink from "next/link";
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import ReturnTopButton from 'components/ReturnTopButton';
import React from "react";
import {
  Container,
  Heading,
  Hide,
  Box,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";

const IndexPage: React.FC = () => {
  return (
    <>
    <Header />
    <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
        <Heading as="h2" size='lg' pt={5} textAlign="center">送信完了しました</Heading>
        
        <Text pt={10} textAlign="center">
          お問い合わせありがとうございます。<br/>
          ご入力いただいた内容について確認の上、ご連絡致します。<br/>
          ご連絡まで今しばらくお待ち下さい。<br/>
        </Text>

        <Box pt={10} textAlign="center">
          <NextLink href="/" passHref><Button p={5} bgColor="#333" color="#fff" _hover={{ bgColor: '#555' }} _active={{ bgColor: '#555' }}>トップへ戻る</Button></NextLink>
        </Box>
    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default IndexPage