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
  Box,
  Image,
  Text,
  Button,
  HStack,
  Center,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const IndexPage: React.FC = () => {
  return (
    <>
    <Header />
    <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
        <Heading as="h2" size='lg' pt={5} textAlign="center">人材派遣事業</Heading>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">2030年には約80万人が不足!?</Heading>

        <Heading size='sm' pt={10}>先端IT分野の発達と人材不足</Heading>
        <Text pt={5}>
            2016年6月に経済産業省が発表した資料によると、日本では年々IT人材不足が深刻化しており、2030年には最大で約80万人ものIT人材が不足すると試算されています。<br/>
            今後も「人工知能（AI）」「ビッグデータ」「IoT（モノのインターネット化）」といった先端IT分野の市場およびそれに伴った情報セキュリティ分野の市場は拡大し、
            人材獲得の面で中小企業は苦戦を強いられることが多くなることが予測されます。<br/>
        </Text>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">ベテランの安心感+豊富な開発実績が自慢です!</Heading>

        <HStack
            pt={5} 
            flexDirection={{base: 'column', sm: 'column', md: 'row', lg: 'row'}}
            alignItems={{base: 'center',sm: 'start',md: 'center',lg: 'center'}}
        >
            <Image
            boxSize="255px"
            objectFit='cover'
            src='/images/outsourcing_01.webp'
            border="2px solid #666"
            alt="エンジニア経験年数"
            />
            <Text pt={{base: 5, sm: 5, md: 0, lg: 0}}>
                ビー・エス・サイトーは、Windows、Linux、UNIX等様々なOSへの対応および開発言語で豊富な実績を持っており、それぞれのニーズに合わせた柔軟なシステム構築が可能です。<br/>
                <br/>
                また、エンジニアとしての経験年数が10年以上のベテラン技術者が多く在籍しており、優れた対応力をもっていることも当社の特徴です。<br/>
                ビーエスサイトーでは、サービスの提供を通して任せて良かったとお客様から言われるような安心感を届けて参ります。
            </Text>
        </HStack>
    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default IndexPage