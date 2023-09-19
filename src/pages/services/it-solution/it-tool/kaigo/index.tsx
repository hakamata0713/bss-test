/* src/pages/index.tsx */
import type { NextPage } from 'next'
import NextLink from "next/link";
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import ReturnTopButton from 'components/ReturnTopButton';
import React from "react";
import { ImArrowDown } from 'react-icons/im'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GiMedicalThermometer } from 'react-icons/gi'
import { MdOutlineWheelchairPickup } from 'react-icons/md'
import { BiCalendar } from 'react-icons/bi'
import { FaBox } from 'react-icons/fa'
import { ImCoinYen } from 'react-icons/im'
import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  HStack,
  Image,
  Link,
  ListItem,
  OrderedList,
  UnorderedList,
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
      <Heading as="h2" size='lg' pt={5} textAlign="center">介護業 業務改善パッケージ</Heading>

      <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">介護業 業務改善パッケージとは？</Heading>

      <Heading size='sm' pt={10}>介護業界において必要な業務の一連を管理することを可能とするクラウドシステム</Heading>
      <Box pt={5}>
        <Image
          objectFit='cover'
          width='auto'
          src="/images/kaigo/kaigo_01.webp" 
        />
      </Box>

      <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">介護業界の課題</Heading>
      <OrderedList spacing={3} pt={5} pl={5}>
          <ListItem>入居者の基本情報が紙中心で管理されている為、資料を探すのに時間がかかる。</ListItem>
          <ListItem>入居者に最適なサービス提供を行う為、日々更新されるバイタル情報を目視確認している。</ListItem>
          <ListItem>入居者が使用する日用品の在庫確認に時間がかかる。</ListItem>
          <ListItem>ご家族への報告用資料の作成を行う為に2重/3重入力を行っている。</ListItem>
          <ListItem>コロナの影響で、面会が出来ないご家族に対して満足度の高いサービス提供が難しい。</ListItem>
      </OrderedList>
      <Box pt={5} pl={5}><ImArrowDown size={'100px'} color={'#0075c2'} /></Box>
      <Heading size='sm' pt={5}>介護業務改善システムがこれらを解決します！</Heading>

      <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">介護業 業務改善パッケージ機能一覧</Heading>
      <Stack flexDirection={{ base: "row", sm: "row", md: "column", lg: "column" }} justifyContent="space-around" spacing="0">
        <HStack pt={5} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }} justifyContent="space-between" textAlign="center" spacing="0">
        <Box>
            <Box width={{ base: '130px', sm: '130px', md: '150px', lg: '150px' }}><BsFillPeopleFill size={'auto'} color={'#0075c2'} /></Box>
            <Heading size='sm' pt={3}>入居者管理</Heading>
        </Box>
        <Box>
            <Box width={{ base: '130px', sm: '130px', md: '150px', lg: '150px' }} pt={{ base: '2rem', sm: '2rem', md: '0', lg: '0' }}><GiMedicalThermometer size={'auto'} color={'#0075c2'} /></Box>
            <Heading size='sm' pt={3}>バイタル管理</Heading>
        </Box>
        <Box>
            <Box width={{ base: '130px', sm: '130px', md: '150px', lg: '150px' }} pt={{ base: '2rem', sm: '2rem', md: '0', lg: '0' }}><MdOutlineWheelchairPickup size={'auto'} color={'#0075c2'} /></Box>
            <Heading size='sm' pt={3}>入居者支援管理</Heading>
        </Box>
        </HStack>
        <HStack pt={5} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }} justifyContent="space-between" textAlign="center" spacing="0">
        <Box>
          <Box width={{ base: '130px', sm: '130px', md: '150px', lg: '150px' }} m={0}><BiCalendar size={'auto'} color={'#0075c2'}/></Box>
          <Heading size='sm' pt={3}>スケジュール管理</Heading>
        </Box>
        <Box>
          <Box width={{ base: '130px', sm: '130px', md: '150px', lg: '150px' }} pt={{ base: '2rem', sm: '2rem', md: '0', lg: '0' }}><FaBox size={'auto'} color={'#0075c2'} /></Box>
          <Heading size='sm' pt={3}>在庫管理</Heading>
        </Box>
        <Box>
          <Box width={{ base: '130px', sm: '130px', md: '150px', lg: '150px' }} pt={{ base: '2rem', sm: '2rem', md: '0', lg: '0' }}><ImCoinYen size={'auto'} color={'#0075c2'} /></Box>
          <Heading size='sm' pt={3}>請求管理</Heading>
        </Box>
        </HStack>
      </Stack>

      <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">介護業 業務改善パッケージ画面</Heading>
      <Heading size='sm' mt={10}>入居者管理</Heading>
      <Text mt={5}>
        利用者様のお名前や住所などの基本情報に加え、支援度/介護度やアセスメント情報を管理できます。<br/>
        また、日々の支援履歴、サービス実施記録、訪問看護実施記録書等の情報も一画面で確認することができます。
      </Text>
      <Box pt={5}>
        <Image
          objectFit='cover'
          width='auto'
          src="/images/kaigo/kaigo_02.webp" 
        />
        <Image
          objectFit='cover'
          pt={5}
          width='auto'
          src="/images/kaigo/kaigo_03.webp" 
        />
      </Box>

      <Heading size='sm' mt={10}>バイタル管理</Heading>
      <Text mt={5}>
        血圧/体重/血糖値/排泄…等の、バイタル情報を管理できます。<br/>
        過去のデータやアセスメント情報を参照しながらの測定も可能ですので、体調不良の早期発見が望めます。
      </Text>
      <Box pt={5}>
        <Image
          objectFit='cover'
          width='auto'
          src="/images/kaigo/kaigo_04.webp" 
        />
        <Image
          objectFit='cover'
          pt={5}
          width='auto'
          src="/images/kaigo/kaigo_05.webp" 
        />
        <Image
          objectFit='cover'
          pt={5}
          width='auto'
          src="/images/kaigo/kaigo_06.webp" 
        />
      </Box>

      <Heading size='sm' mt={10}>入居者支援管理</Heading>
      <Text mt={5}>
        利用者様の支援経過の管理ができます。<br/>
        バイタルや食事摂取量等の、定量的に測れない利用者様の心の動きを事業所内で共有できます。
      </Text>
      <Box pt={5}>
        <Image
          objectFit='cover'
          width='auto'
          src="/images/kaigo/kaigo_07.webp" 
        />
      </Box>

      <Heading size='sm' mt={10}>スケジュール管理</Heading>
      <Text mt={5}>
        利用者様の通院スケジュールや服薬記録の管理ができます。<br/>
        通院カレンダーから対象の情報を開く事で、利用者様のこれまでの服薬記録を確認できます。
      </Text>
      <Box pt={5}>
        <Image
          objectFit='cover'
          width='auto'
          src="/images/kaigo/kaigo_08.webp" 
        />
      </Box>

      <Heading size='sm' mt={10}>入庫管理</Heading>
      <Box pt={5}>
        <Image
          objectFit='cover'
          width='auto'
          src="/images/kaigo/kaigo_09.webp" 
        />
      </Box>

      <Heading size='sm' mt={10}>出庫管理</Heading>
      <Box pt={5}>
        <Image
          objectFit='cover'
          width='auto'
          src="/images/kaigo/kaigo_10.webp" 
        />
      </Box>

      <Heading size='sm' mt={10}>在庫管理</Heading>
      <Text mt={5}>
        入庫アプリ、出庫アプリに登録された情報から自動的に在庫量を算出します。
      </Text>
      <Box pt={5}>
        <Image
          objectFit='cover'
          width='auto'
          src="/images/kaigo/kaigo_11.webp" 
        />
      </Box>

      <Heading size='sm' mt={10}>請求/入金管理</Heading>
      <Text mt={5}>
        介護保険が適応されない請求書の作成が可能です。<br/>
        通院時の立替、消耗品利用、食事回数等に応じて月末のタイミングで請求データを作成できます。
      </Text>
      <Box pt={5}>
        <Image
          objectFit='cover'
          width='auto'
          src="/images/kaigo/kaigo_11.webp" 
        />
      </Box>

      <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">サービス概要</Heading>
      <Heading size='sm' mt={10}>■環境構築&ルール作りの支援</Heading>
      <HStack pt={5} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }} alignItems="flex-start" spacing={{ base: "0", sm: "0", md: "3", lg: "3"}}>
        <TableContainer>
          <Table variant='simple' bgColor="#F7F7F7">
            <Thead>
              <Tr bgColor="#0075c2">
                <Th colSpan={2} color="#fff" textAlign="center">内容</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td borderColor="#bbb" rowSpan={3}>環境構築<br/>ルールづくりの支援</Td>
                <Td borderColor="#bbb">①事前ヒアリング</Td>
              </Tr>
              <Tr>
                <Td borderColor="#bbb">②環境構築</Td>
              </Tr>
              <Tr>
                <Td borderColor="#bbb">③操作指導(2時間×2回)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <TableContainer paddingTop={{ base: "1.25rem", sm:"1.25rem", md: "0", lg: "0" }}>
          <Table variant='simple' bgColor="#F7F7F7">
            <Thead>
              <Tr bgColor="#0075c2">
                <Th colSpan={2} color="#fff" textAlign="center">価格</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td borderColor="#bbb">①無償</Td>
              </Tr>
              <Tr>
                <Td borderColor="#bbb">②200,000円(税抜)</Td>
              </Tr>
              <Tr>
                <Td borderColor="#bbb">③100,000円(税抜)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </HStack>
        
      <Heading size='sm' mt={5}>契約事項</Heading>
      <UnorderedList pl={2} mt={2} spacing={2}>
        <ListItem>環境構築ルール作りの支援はすべてリモート形式にてご対応させて頂きます。</ListItem>
        <ListItem>環境構築は費用の入金確認後作業とさせて頂きます。</ListItem>
        <ListItem>訪問によるご対応の場合、交通費、諸経費は別途、請求させていただきます。</ListItem>
        <ListItem>データ移行はマスタデータ対象となり、弊社規定のフォーマットにデータを入力いただくことで可能です。</ListItem>
      </UnorderedList>

      <Heading size='sm' mt={10}>■月額利用料金</Heading>
      <HStack pt={5} alignItems="flex-start" spacing={{ base: "0", sm: "0", md: "3", lg: "3"}}>
      <TableContainer>
          <Table variant='simple' bgColor="#F7F7F7">
            <Thead>
              <Tr bgColor="#0075c2">
                <Th colSpan={2} color="#fff" textAlign="center">内容</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td borderColor="#bbb">①月額利用料金</Td>
              </Tr>
              <Tr>
                <Td borderColor="#bbb">②月額サポート料金</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <TableContainer>
          <Table variant='simple' bgColor="#F7F7F7">
            <Thead>
              <Tr bgColor="#0075c2">
                <Th colSpan={2} color="#fff" textAlign="center">価格</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td borderColor="#bbb">①30,000円(税抜)</Td>
              </Tr>
              <Tr>
                <Td borderColor="#bbb">②130,000円(税抜)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </HStack>
        
        <Heading size='sm' mt={5}>契約事項</Heading>
        <UnorderedList pl={2} mt={2} spacing={2}>
          <ListItem>一年毎の契約となります。</ListItem>
          <ListItem>kintoneライセンス じぶんページライセンス LINEWORKSライセンス Zoomライセンスは別途費用が必要です。</ListItem>
        </UnorderedList>
    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default IndexPage