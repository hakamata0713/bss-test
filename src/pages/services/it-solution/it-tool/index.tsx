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
        <Heading as="h2" size='lg' pt={5} textAlign="center">業務改善ツール</Heading>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">業務改善ツールとは</Heading>
        <Text pt={5}>
            業務改善ツールは、自社の業務改善を行う為のサポートツールを指します。<br/>
            IT技術の進化により業務改善をスムーズに進めるには、ITツールの活用が必要とされています。<br/>
            業務改善ツールを活用することで、業務の可視化や自動化、業務時間の削減、人事や労働時間の管理、経営計画達成など、様々な課題解決に役立ちます。
        </Text>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">業務改善ツールの導入が必要な理由</Heading>

        <Heading size='sm' pt={10}>労働力の減少に伴い、生産性を向上させる必要が生じた</Heading>
        <Text pt={5}>
            日本の場合、業務の課題が明確化されていないために、改善すべき点が把握できず、業務上でムダや非効率的なことが生じているケースがあります。<br/>
            ムダを排除して生産性を高めるには、業務を可視化することが重要です。<br/>
            業務を可視化することで、業務改善につながるとして、業務を可視化できるツールにスポットが当たっています。
        </Text>

        <Heading size='sm' pt={10}>働き方改革などに伴う環境整備の課題に対応するため</Heading>
        <Text pt={5}>
            政府による働き方改革の推進などに伴い、短時間労働化への対策は急務になっています。<br/>
            また、テレワークなど多様な働き方や就業形態に対応する必要もあります。<br/>
            これらへの対応として、業務改善ツールは期待されています。
        </Text>

        <Heading size='sm' pt={10}>DX（デジタルトランスフォーメーション）の重要性が高まっているため</Heading>
        <Text pt={5}>
            2018年9月・経済産業省発表の「DXレポート」によると、DX推進がされない場合、2025年以降年間で最大12兆円の経済損失が生じる可能性があるとされています。(2025年の崖)<br/>
            これを受け、2020年12月の経済産業省ではDXの加速に向けた中間報告書を発表しています。<br/>
            それによると、DX化が進む企業と進んでいない企業が二極化しつつあるとされています。<br/>
            世界的なコロナ禍で企業環境は不安定になっており、環境変化への対応は必須です。<br/>
            迅速な対応をするために、業務改善ツールが役立つでしょう。
        </Text>

        <Heading size='sm' pt={10}>ツールによる業務改善が主流になっている</Heading>
        <Text pt={5}>
            上記で解説した流れを受けて、現在ではツール導入で業務改善を図るという流れが進んでいます。<br/>
            導入される業務改善ツールは、主にITツールであることも特徴です。
        </Text>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">取り扱いツール一覧</Heading>
            <UnorderedList spacing={3} pt={5} pl={5}>
                <ListItem>
                    <Link 
                        href="https://www.cstnet.co.jp/civil/products/atlusrealevo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color='#3182CE'
                    >
                        土木積算システム(ATLUS REAL Evo スタンドアロン版)
                    </Link>
                </ListItem>
                <ListItem>
                    <Link 
                        href="https://www.tis.amano.co.jp/product/timepro-nx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color='#3182CE'
                    >
                        就業管理システム TimePro-NX(就業基本)
                    </Link>
                </ListItem>
                <ListItem>
                    <Link 
                        href="https://www.ijs-kyoto.co.jp/works/01_uriage/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color='#3182CE'
                    >
                        売上原価Pro MUG版(スタンドアロン版)
                    </Link>
                </ListItem>
                <ListItem><Link href="./it-tool/kaigo" color='#3182CE'>介護業 業務改善パッケージ(クラウド)</Link></ListItem>
                <ListItem>
                    <Link 
                        href="https://kintone.cybozu.co.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color='#3182CE'
                    >
                        Kintone(スタンダードコース)
                    </Link>
                </ListItem>
            </UnorderedList>
    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default IndexPage