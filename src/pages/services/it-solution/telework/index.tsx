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
  Text,
  Link,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";

const IndexPage: React.FC = () => {
  return (
    <>
    <Header />
    <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
        <Heading as="h2" size='lg' pt={5} textAlign="center">テレワーク構築支援</Heading>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">テレワーク導入を検討中の中小企業様へ</Heading>
        <Text pt={5}>
            新型コロナウイルスの感染症予防対策や働き方改革の促進などでテレワークが推奨される中、テレワークに関する制度の導入は企業にとって大きなの課題となっています。<br/>
            <br/>
            しかし、テレワークと言っても、お客様の業種や働く方々のライフスタイルによって、準備する環境、ルールは多種多様です。<br/>
            ただパソコンやネット環境を準備しても、その会社の働き方に適したものになるとは限りません。<br/>
            ビー・エス・サイトーでは、貴社の業務内容、環境、課題などを丁寧にヒアリングしトータルで導入支援いたしますので、安心してお任せください。
        </Text>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">提案可能サービス</Heading>

        <Heading size='sm' pt={10}>インフラ</Heading>
        <UnorderedList spacing={3} pt={5} pl={5}>
            <ListItem>サーバー</ListItem>
            <ListItem>パソコン及び周辺機器</ListItem>
            <ListItem>資産管理ソフト</ListItem>
            <ListItem>ネットワーク構築</ListItem>
        </UnorderedList>

        <Heading size='sm' pt={10}>セキュリティ</Heading>
        <UnorderedList spacing={3} pt={5} pl={5}>
            <ListItem>総合驚異管理(UTM)</ListItem>
            <ListItem>ウイルス対策ソフト</ListItem>
            <ListItem>バックアップシステム</ListItem>
            <ListItem>セキュリティ研修</ListItem>
        </UnorderedList>

        <Heading size='sm' pt={10}>コミュニケーション</Heading>
        <UnorderedList spacing={3} pt={5} pl={5}>
            <ListItem>Web会議ツール</ListItem>
            <ListItem>グループウェアツール</ListItem>
            <ListItem>オールインワンミーティングボード</ListItem>
        </UnorderedList>
    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default IndexPage