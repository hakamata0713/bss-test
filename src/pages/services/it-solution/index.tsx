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
  Link,
  Hide,
  Box,
  Image,
  Text,
  Button,
  HStack,
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const IndexPage: React.FC = () => {
  return (
    <>
    <Header />
    <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
        <Heading as="h2" size='lg' pt={5} textAlign="center">ITソリューション事業</Heading>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">取扱製品・サービス</Heading>
        <TableContainer
            pt={5}
            sx={{
              '&::-webkit-scrollbar': {
                width: '16px',
                borderRadius: '16px',
                backgroundColor: `rgba(0, 0, 0, 0.25)`,
              },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: '16px',
                backgroundColor: `rgba(0, 0, 0, 0.25)`,
              },
            }}
        >
            <Table variant='simple' colorScheme='telegram' size="lg">
                <Tbody>
                    <Tr>
                      <Td>サーバー</Td>
                      <Td>パソコン及び周辺機器</Td>
                    </Tr>
                    <Tr>
                      <Td>パッケージソフト</Td>
                      <Td>ソフトウェア開発</Td>
                    </Tr>
                    <Tr>
                      <Td>ハード及びソフトウェアメンテナンス</Td>
                      <Td>ネットワーク設計、施工</Td>
                    </Tr>
                    <Tr>
                      <Td>ITコンサルティング全般</Td>
                      <Td>データエントリー</Td>
                    </Tr>
                    <Tr>
                      <Td><Link href="./it-solution/security" color='#3182CE'>インターネットセキュリティ</Link></Td>
                      <Td>マイナンバー対策</Td>
                    </Tr>
                    <Tr>
                      <Td><Link href="./it-solution/it-tool" color='#3182CE'>業務改善ツール</Link></Td>
                      <Td><Link href="/news/bt1w0iembro4" color='#3182CE'>IT補助金</Link></Td>
                    </Tr>
                    <Tr>
                      <Td><Link href="./it-solution/telework" color='#3182CE'>テレワーク構築支援</Link></Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>

    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default IndexPage

