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
} from "@chakra-ui/react";

const IndexPage: React.FC = () => {
  return (
    <>
    <Header />
    <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
        <Heading as="h2" size='lg' pt={5} textAlign="center">情報セキュリティ基本方針</Heading>
        <Text pt={10}>
          当社は、システム製品や商品の販売とともに、情報資産のセキュリティの確保に努めて参ります。<br/>
          特に、コンピュータシステム開発においては情報セキュリティを重視し、お客様に安心してご利用いただけるシステムを提供していきたいと考えております。<br/>
          そのために当社としましては、個人情報保護の観点より次のことに取り組みます。<br/>
        </Text>

        <Heading size='md' pt={10}>1.情報資産保護の目的</Heading>
        <Text pt={5}>
          当社は、情報サービス及び商品販売の事業活動を行う企業として、当社が取り扱う情報資産を適切に管理・保護・維持・活用することを目的とし、
          そのために必要な情報セキュリティマネジメントシステムを確立します。<br/>
          これにより、セキュリティ水準の向上と社会的信頼性の確保に努め、ＩＴ社会の役割と責任を果たします。<br/>
          また、特定個人情報については別途定める「特定個人情報についての基本方針」と「特定個人情報等取扱規程」を遵守します。
        </Text>

        <Heading size='md' pt={10}>2.情報資産保護の対象</Heading>
        <Text pt={5}>
          当社の情報セキュリティ基本方針で対象とする情報資産とは、当社の企業活動において入手及び知り得た情報、ならびに当社が業務上保有するすべての情報とし、
          この情報資産の取り扱い及び管理に携わる役員、従業員、及び業務委託先が遵守することとします。
        </Text>

        <Heading size='md' pt={10}>3.情報セキュリティ管理体制</Heading>
        <Text pt={5}>
          当社は、情報セキュリティの管理責任者を設置し、全ての情報資産の保護に努め、情報セキュリティに関する法令その他の規範を遵守することにより、
          社会からの信頼を常に得られるよう、管理体制を構築します。
        </Text>

        <Heading size='md' pt={10}>4.情報セキュリティ教育</Heading>
        <Text pt={5}>
          情報資産を取り扱う役員、従業員、及び業務委託先に対して、情報セキュリティの必要性および具体的な遵守事項を周知徹底するとともに、
          情報セキュリティの知識と意識向上を目的として、継続的な教育活動を行います。
        </Text>
        
        <Heading size='md' pt={10}>5.法令・規範の遵守</Heading>
        <Text pt={5}>当社は、情報資産の保護に適応される情報セキュリティに関する法令、規則、契約等を遵守します。</Text>

        <Text pt={20} textAlign="end">
            2009年&nbsp;3月27日制定<br/>
            2015年10月&nbsp;1日改定<br/>
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