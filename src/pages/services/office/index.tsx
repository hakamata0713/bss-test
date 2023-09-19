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
        <Heading as="h2" size='lg' pt={5} textAlign="center">オフィス事業</Heading>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">オフィス家具の良し悪しが業務効率を左右</Heading>

        <Heading size='sm' pt={10}>都心部の企業がオフィス家具に力を入れる理由</Heading>
        <Text pt={5}>
            コピー機、机、椅子、パソコン、電話機など、皆様の会社にはさまざまなオフィス家具が設置されていると思いますが、
            東京都心部の企業のようなお洒落でスタイリッシュなオフィス家具を揃えている企業は県内ではまだ少ないというのが実情ではないでしょうか。<br/>
            実は、オフィス家具が社員の業務効率に大きな影響を与えているのはご存知でしょうか。<br/>
        </Text>
        <Heading size='sm' pt={10}>オフィス家具を新しくして業績向上!?</Heading>
        <Text pt={5}>
            オフィス関連大手のコクヨファニチャーが行った調査(オフィスのモチベーションアップに関するアンケート 第2回目「オフィス環境」について)によると、
            実に90%以上が「オフィス家具や備品は、仕事に対するモチベーションを上げるのに重要」と回答しています。<br/>
            また、「オフィス家具が変わると仕事に対するモチベーションが上がる」と答えた割合も69%を記録しており、
            オフィス家具が業務効率に与える影響は決して少なくないと実感できます。<br/>
            古くなったオフィス家具を新しくして、業績向上にチャレンジするのはいかがでしょうか。
        </Text>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">高まる快適なオフィスへのニーズ</Heading>

        <Heading size='sm' pt={10}>退職理由の1つは「会社のオフィス家具への不満」</Heading>
        <Text pt={5}>
            県内企業に限らず、多くの中小企業にとって1人1人の社員が担っている役割がとても大きく企業経営にも大きな影響を与えるため、会社を離れていく社員の割合はなるべく減らしたいものです。<br/>
            退職理由は「キャリアアップ」「経営者または上司との意見相違」など実にさまざまですが、その中には「会社のオフィス家具に不満がある」という理由があることをご存知でしょうか。<br/>
        </Text>
        <Heading size='sm' pt={10}>20%の人が「オフィス家具きっかけで転職」を決意</Heading>
        <Text pt={5}>
            オフィス関連大手のコクヨファニチャーが行った調査(「オフィスのモチベーションアップに関するアンケート」 第2回目「オフィス環境」について)によると、
            18.6%の人が「会社のオフィス家具や備品に対する不満から、転職を考えたことがある」と答えています。<br/>
            オフィス家具への不満がそのまま退職理由につながることもありますので、社員に「この会社でよかった」と感じてもらえるようなオフィス家具を充実していきましょう。<br/>
        </Text>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">期待するオフィス環境改善策、第1位は意外にも!?</Heading>
        <Box pt={5}>
            <Image
            src='/images/office_01.webp'
            border="2px solid #666"
            alt="オフィス環境満足度調査"
            />
            <Text pt={5}>
                大手人材サービス会社が2016年に20～59歳の正社員の男女400名を対象に行った「オフィス環境満足度調査」では、
                「職場の仕事道具や備品について不満に感じているものは何ですか?」という質問に対して、最も多かったのが「休憩用の備品」で39.3%、次に「自分専用の電子機器」が35.3%、
                「自分専用の備品」が21.8%と、「休憩用の備品」についての不満が業務時の環境の不満を上回る結果となりました。<br/>
                仕事中のストレスを解消してやる気をアップするオフィス環境改善策を実施することで、より社員が働きやすいオフィス環境を実現していきましょう。<br/>
            </Text>
        </Box>

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
                        <Td>オフィスファニチャー</Td>
                        <Td>OAサプライ</Td>
                    </Tr>
                    <Tr>
                        <Td>文具、消耗品</Td>
                        <Td>カラーデジタルコピー</Td>
                    </Tr>
                    <Tr>
                        <Td>印刷機</Td>
                        <Td>事務機器全般</Td>
                    </Tr>
                    <Tr>
                        <Td>パーティション工事</Td>
                        <Td>オールインワンミーティングボード</Td>
                    </Tr>
                    <Tr>
                        <Td>SAIBI ワークステーションシステム</Td>
                        <Td>ガラスパーティション Ga アキュラート</Td>
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