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
                        <Td>インターネットセキュリティ</Td>
                        <Td>マイナンバー対策</Td>
                    </Tr>
                    <Tr>
                        <Td>業務改善ツール</Td>
                        <Td>IT補助金</Td>
                    </Tr>
                    <Tr>
                        <Td>テレワーク構築支援</Td>
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