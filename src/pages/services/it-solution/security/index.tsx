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
  UnorderedList,
  Image,
  HStack,
  Box
} from "@chakra-ui/react";

const IndexPage: React.FC = () => {
  return (
    <>
    <Header />
    <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
      <Heading as="h2" size='lg' pt={5} textAlign="center">インターネットセキュリティ</Heading>

      <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">4社に1社が侵入される!? 標的型サイバー攻撃の脅威</Heading>
      <Heading size='sm' pt={10}>複雑化するサイバー攻撃</Heading>
      <Text pt={5}>
        コンピュータおよびインターネット用のセキュリティ関連製品の開発・販売を行っているトレンドマイクロ株式会社が2015年に行った調査によると、
        同社がサポートを提供している会社の約23%、およそ4社に1社のシステムが標的型サイバー攻撃を受けていることが明らかになりました。<br/>
        理由としては、サイバー攻撃の手口が年々複雑化していることが挙げられます。
      </Text>

      <Heading size='sm' pt={10}>標的型攻撃について</Heading>
      <Text pt={5}>
        かつてはいかにも怪しいウェブサイトからダウンロードしたファイルやソフトを実行した際に攻撃を受けることが多かったのですが、
        最近は一般のウェブサイトがいつのまにか改ざんされて、そのサイトに訪れただけでコンピューターウィルスやスパイウェアに感染する仕掛けをしているケースも多くなってきています。<br/>
        このように明確な意思と目的をもった攻撃者が特定の組織の情報を狙って仕掛けるサイバー攻撃を「標的型攻撃」と言い、対策の必要性が増してきています。
      </Text>

      <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">従業員10名規模の地方中小企業が狙われている!?</Heading>
      <Heading size='sm' pt={10}>狙われる中小企業</Heading>
      <Text pt={5}>
        かつて、サイバー攻撃の標的と言えば機密情報や大量の個人情報を扱う大手企業や地方公共団体が主なターゲットとされてきましたが、標的型攻撃では従業員数十名規模の地方中小企業もそのターゲットになっています。<br/>
        中小企業はインターネットセキュリティ対策に割く十分な予算や専任担当者がいない場合がほとんどで、情報セキュリティの観点でも、大手企業や地方公共団体と比べてももろくて弱いケースが目立ちます。<br/>
        攻撃者からすると、比較的容易に個人情報や機密情報を盗み取ることができる地方中小企業は格好の標的になっているのです。
      </Text>

      <Heading size='sm' pt={10}>実際に起きた事件</Heading>
      <Text pt={5}>
        2015年11月に、従業員わずか10名の健康食品販売会社社がサイバー攻撃の標的にされ、サイトで商品を購入した顧客の氏名やクレジットカードの情報などが流出した事件も起きています。<br/>
        これからは従業員数十名程度の会社であってもしっかりとサイバー攻撃への対策を行っていく必要があると言えます。
      </Text>

      <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">強盗型から忍者型へ!?巧妙化する攻撃パターン</Heading>
      <Heading size='sm' pt={10}>変わるサイバー攻撃</Heading>
      <Text pt={5}>
        現代のサイバー攻撃は昔のサイバー攻撃からその目的も変化してきました。<br/>
        昔のサイバー攻撃はどちらかというと攻撃者が自分の技術力をアピールし攻撃対象の社会的信用を失墜させることが主な目的でしたが、
        現在主流の「標的型攻撃」の場合は、個人情報や口座情報などの機密情報を盗みとったり、大規模なサイバー攻撃を行うための拠点「踏み台」としての利用が主な目的となっています。
      </Text>
      
      <Heading size='sm' pt={10}>強盗型から忍者型へ</Heading>
      <Text pt={5}>
        正面玄関に備え付けられている防犯装置を破壊していた昔のサイバー攻撃を「強盗型」と言うなら、
        現在のサイバー攻撃は、正面玄関ではなくセキュリティが甘いところを見つけ出して忍び込む「忍者型」と言ってもいいほどその攻撃パターンは変化を遂げています。<br/>
        「忍者」の活動に合わせてしっかりとしたセキュリティ環境を整えることが肝心です。
      </Text>

      <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">情報流出よりも怖い、不正送金被害</Heading>
      <Heading size='sm' pt={10}>増加する不正送金被害</Heading>
      <Text pt={5}>
        サイバー攻撃を受けた被害として、すぐに思い浮かぶのは「個人情報の流出」ですが、銀行口座から不正に現金を送金し現金が引き出される「不正送金」の被害の怖さも忘れてはいけません。<br/>
        実際に日本の中小企業が狙われた不正送金被害は増加傾向にあり、2016年上半期におけるオンラインバンキングの不正送金は857件発生し、被害額は8億9800万円にのぼっています。
      </Text>
      
      <Heading size='sm' pt={10}>経営に直結するサイバー攻撃対策</Heading>
      <Text pt={5}>
        さらに、法人の被害額は1億2900万円を記録しており、中小企業の経営を左右するレベルで被害が出ています。<br/>
        法人は「預金保護法」の適用対象外であるため、被害を受けてもその金額が戻ってこない可能性も十分あります。<br/>
        中小企業の経営を守るためにもサイバー攻撃への備えをしっかりと行っていきましょう。
      </Text>

      <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">取扱製品</Heading>
      <Heading size='sm' pt={10}>統合脅威管理(UTM)</Heading>
      <HStack pt={5} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }} spacing={{ base: "0", sm: "0", md: "3", lg: "3" }}>
        <Box width={{ base: "100%", sm: "100%", md: "20%", lg: "20%" }}>
          <Box width={{ base: "250px", sm: "250px", md: "100%", lg: "100%" }}>
            <Image
              objectFit='cover'
              src="/images/utm.webp" 
            />
            <Text fontSize='xs' textAlign="center">
              © WatchGuard<br/>
              © チェックポイント
            </Text>
          </Box>
        </Box>
        <Text pt={{ base: "1.25rem", sm: "1.25rem", md: "0", lg: "0" }} width={{ base: "100%", sm: "100%", md: "80%", lg: "80%" }}>
          統合脅威管理とは、外部からのウイルス感染、スパムメール、不正アクセス、悪質サイトへのアクセス等を防ぐセキュリティのパッケージ製品です。<br/>
          あらゆる攻撃から自社を守るのに適しており、中小企業必須のセキュリティ対策としてオススメしています。<br/>
          PC1台1台に対してはウイルスソフトを導入し、外部ネットワークとの接続箇所にはUTMを活用しましょう。
        </Text>
      </HStack>
      
      <Heading size='sm' pt={10}>ウイルス対策ソフト</Heading>
      <HStack pt={5} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }} spacing={{ base: "0", sm: "0", md: "3", lg: "3" }}>
        <Box width={{ base: "100%", sm: "100%", md: "20%", lg: "20%" }}>
          <Box width={{ base: "250px", sm: "250px", md: "100%", lg: "100%" }}>
            <Image
              objectFit='cover'
              src="/images/withsecure.webp" 
            />
            <Text fontSize='xs' textAlign="center">
              © WithSecure
            </Text>
          </Box>
        </Box>
        <Text pt={{ base: "1.25rem", sm: "1.25rem", md: "0", lg: "0" }} width={{ base: "100%", sm: "100%", md: "80%", lg: "80%" }}>
          ウイルス対策ソフトは、みなさんご存じのとおり、各パソコンにインストールしてウイルスからパソコンを守るソフトです。<br/>
          従来のウイルス対策ソフトでは、ウイルスを検査するパターンファイルが新種ウイルス発生のスピードに間に合わず防御しきれない現状があります。<br/>
          未知のウイルスをパターンファイル以外の技術でブロックする「サンドボックス」機能が高いウイルス検知率を誇っておりマイナンバー対策としても推奨される機能でもあります。
        </Text>
      </HStack>
      
      <Heading size='sm' pt={10}>その他</Heading>
      <Text pt={5}>バックアップシステム等</Text>
    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default IndexPage