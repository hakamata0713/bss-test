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
        <Heading as="h2" size='lg' pt={5} textAlign="center">個人情報保護方針</Heading>
        <Text pt={10}>
            当社は、システムのご提供とともに、お客様の情報セキュリティの確保に努めております。<br/>
            コンピュータシステム開発においては情報セキュリティを重視し、お客様に安心してご利用いただけるシステムを提供していきたいと考えております。<br/>
            そのために当社としましては、個人情報保護の観点より次のことに取り組みます。<br/>
        </Text>

        <Heading size='md' pt={10}>1.『個人情報の収集・利用・提供』</Heading>
        <Text pt={5}>当社は、大切なお客様の情報及び当社社員の個人情報等に対して、その収集・利用・提供の目的を明確にし、それらを取り扱う協力会社の管理も含め当社の責任で適切に管理します。</Text>

        <Heading size='md' pt={10}>2.『情報セキュリティの実施』</Heading>
        <Text pt={5}>当社は、個人情報への不正アクセス・紛失・破壊・改竄・及び漏洩などのリスクを回避する為、適切な経営資源を投入し合理的なセキュリティ体制を構築し、リスクの未然・再発防止および是正に努めます。</Text>

        <Heading size='md' pt={10}>3.『法令・規範の遵守』</Heading>
        <Text pt={5}>当社は、当該個人情報の保護に適応される法令及びその他法令・規格・インターネットビジネスに係る諸法令・その他規範を遵守します。</Text>

        <Heading size='md' pt={10}>4.『情報主体の権利尊重』</Heading>
        <Text pt={5}>当社は、個人情報を取り扱う管理責任者を設置し、社員に対する教育啓発活動を実施し情報の適切な管理に努めます。</Text>

        <Text pt={20} textAlign="end">
            平成18年9月1日<br/>
            株式会社ビー・エス・サイトー<br/>
            代表取締役社長　柏谷 勝美<br/>
        </Text>

    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default IndexPage