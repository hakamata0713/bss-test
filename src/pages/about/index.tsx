/* src/pages/index.tsx */
import Head from "next/head";
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import ReturnTopButton from 'components/ReturnTopButton';
import React from "react";
import { BsFillCircleFill } from "react-icons/bs"
import {
  Container,
  Heading,
  Hide,
  Box,
  Image,
  Text,
  Button,
  HStack,
  Stack,
  Flex,
  AspectRatio,
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
    <Head>
      <title>会社案内 | 株式会社ビー・エス・サイトー</title>
      <meta name="description" content="ビーエスサイトーについて" />
    </Head>
    <Header />
    <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
        <Heading as="h2" size='lg' pt={5} textAlign="center">会社案内</Heading>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">会社について</Heading>

        <Heading size='sm' pt={10}>①創業50年の歴史とチャレンジを恐れない文化を持った「古くて新しい」会社です</Heading>
        <Text pt={5}>
            当社は昭和46年6月1日秋田市の中通で事業を開始しました。<br/>
            その後、平成9年にはシステムサービス事業部が発足。 <br/>
            オフィス関連事業に加え、システム開発も手がける県内では希有な会社として成長を続けています。<br/>
            県内では数少ないISO27001を取得しています。<br/>
            長い歴史を持ちながらも新しい分野に挑戦することを恐れない文化をもった会社がビー・エス・サイトーです。<br/>
        </Text>
        
        <Heading size='sm' pt={10}>②顧客密着型の親身な姿勢をとても大切にしています</Heading>
        <Text pt={5}>
            従業員数が数十名規模の会社であるため、必然的に1人1人のお客様の予算事情を考慮しながら提案させていただく、小さな信用の積み重ねを心がけ顧客密着型の付き合いを第一としております。<br/>
            事務機・文具・パソコンなど各商材で担当者が異なることもなくスムーズなやり取りが可能です。<br/>
        </Text>

        <Heading size='sm' pt={10}>③ISMS 認証取得</Heading>
        <Stack pt={5}>
        <Box>
          <Image
            boxSize='150px'
            objectFit='cover'
            width='fit-content'
            src="images/iso-isms.webp" 
          />
          <Text fontSize="sm" color="gray.500">登録証番号:JQA-IM0685</Text>
        </Box>
        <Text>当社は、国際標準化機構(ISO)と国際電気標準会議(IEC)が共同で策定する情報セキュリティマネジメントシステムの認証を受けております。</Text>
        </Stack>

        <Heading size='md' mt={20} mb={5} pl={2.5} borderLeft="solid 5px #0075c2">会社情報</Heading>
        <TableContainer
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
          <Table 
            variant='simple' 
            colorScheme='telegram'
            size='lg'
          >
            <Tbody>
              <Tr>
                <Th>会社名</Th>
                <Td>株式会社ビー・エス・サイトー</Td>
              </Tr>
              <Tr>
                <Th>創業年月日</Th>
                <Td>昭和46年6月1日</Td>
              </Tr>
              <Tr>
                <Th>創立年月日</Th>
                <Td>昭和51年6月1日</Td>
              </Tr>
              <Tr>
                <Th>本社所在地</Th>
                <Td>秋田市川尻新川町9-35</Td>
              </Tr>
              <Tr>
                <Th>代表取締役</Th>
                <Td>柏谷 勝美</Td>
              </Tr>
              <Tr>
                <Th>事業内容</Th>
                <Td>
                  ソフトウェア開発、業務ツール作成、インターネットセキュリティ対策<br/>
                  ソフトウェア開発技術者の派遣<br/>
                  IT助成金の活用支援、コンサルティング<br/> 
                  パソコン、パッケージソフトの販売<br/> 
                  文具事務用品、スチール家具、コピー機の販売
                </Td>
              </Tr>
              <Tr>
                <Th>営業エリア</Th>
                <Td>秋田県、東北各県</Td>
              </Tr>
              <Tr>
                <Th>資本金</Th>
                <Td>15,000千円</Td>
              </Tr>
              <Tr>
                <Th>社員数</Th>
                <Td>24名</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Heading size='md' mt={20} pl={2.5} borderLeft="solid 5px #0075c2">沿革</Heading>
        <Box pt={10}>
          <HStack 
            flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            alignItems={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
            borderBottom={{ base: '3px #e5e5d1 solid', sm: '3px #e5e5d1 solid', md: 'none', lg: 'none' }}
          >
            <Box position={{ base: 'static', sm: 'static', md: 'relative', lg: 'relative'}}>
              <Heading as="h5" size="sm" w={{ base: 'auto', sm: 'auto', md: '110px', lg: '110px' }}>
                昭和46年6月
              </Heading>
              <Box 
                position="absolute"
                top="0"
                left="110px" 
                display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
              >
                <BsFillCircleFill color="#0075c2" size="19.19px" />
              </Box>
            </Box>
            <Box 
              pl={{ base: '0', sm: '0', md: '10', lg: '10' }} 
              py={{ base: '6', sm: '6', md: '12', lg: '12' }} 
              borderLeft={{ base: 'none', sm: 'none', md: '3px #e5e5d1 solid', lg: '3px #e5e5d1 solid' }}  
            >
              <Heading as="h5" size="sm">ビジネスショップサイトーとして創業</Heading>
            </Box>
          </HStack>

          <HStack 
            flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            alignItems={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
            pt={{ base: '6', sm: '6', md: '0', lg: '0' }} 
            borderBottom={{ base: '3px #e5e5d1 solid', sm: '3px #e5e5d1 solid', md: 'none', lg: 'none' }}
          >
          <Box position={{ base: 'static', sm: 'static', md: 'relative', lg: 'relative'}}>
            <Heading as="h5" size="sm" w={{ base: 'auto', sm: 'auto', md: '110px', lg: '110px' }}>
            昭和48年7月
            </Heading>
            <Box 
              position="absolute"
              top="0"
              left="110px" 
              display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
            >
              <BsFillCircleFill color="#0075c2" size="19.19px" />
            </Box>
          </Box>
            <Box 
              pl={{ base: '0', sm: '0', md: '10', lg: '10' }} 
              py={{ base: '6', sm: '6', md: '12', lg: '12' }} 
              borderLeft={{ base: 'none', sm: 'none', md: '3px #e5e5d1 solid', lg: '3px #e5e5d1 solid' }}
            >
              <Heading as="h5" size="sm">秋田市泉字登木に新国道支店を開設</Heading>
              <Text>社名を株式会社ビジネスショップサイト－とする</Text>
            </Box>
          </HStack>
          
          <HStack 
            flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            alignItems={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
            pt={{ base: '6', sm: '6', md: '0', lg: '0' }} 
            borderBottom={{ base: '3px #e5e5d1 solid', sm: '3px #e5e5d1 solid', md: 'none', lg: 'none' }}
          >
            <Box position={{ base: 'static', sm: 'static', md: 'relative', lg: 'relative'}}>
              <Heading as="h5" size="sm" w={{ base: 'auto', sm: 'auto', md: '110px', lg: '110px' }}>
              昭和51年6月
              </Heading>
              <Box 
                position="absolute"
                top="0"
                left="110px" 
                display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
              >
                <BsFillCircleFill color="#0075c2" size="19.19px" />
              </Box>
            </Box>
            <Box 
              pl={{ base: '0', sm: '0', md: '10', lg: '10' }} 
              py={{ base: '6', sm: '6', md: '12', lg: '12' }} 
              borderLeft={{ base: 'none', sm: 'none', md: '3px #e5e5d1 solid', lg: '3px #e5e5d1 solid' }}
            >
              <Heading as="h5" size="sm">秋田市山王新町へ移転し山王店とする</Heading>
            </Box>
          </HStack>
          
          <HStack 
            flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            alignItems={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
            pt={{ base: '6', sm: '6', md: '0', lg: '0' }} 
            borderBottom={{ base: '3px #e5e5d1 solid', sm: '3px #e5e5d1 solid', md: 'none', lg: 'none' }}
          >
            <Box position={{ base: 'static', sm: 'static', md: 'relative', lg: 'relative'}}>
              <Heading as="h5" size="sm" w={{ base: 'auto', sm: 'auto', md: '110px', lg: '110px' }}>
              平成9年9月
              </Heading>
              <Box 
                position="absolute"
                top="0"
                left="110px" 
                display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
              >
                <BsFillCircleFill color="#0075c2" size="19.19px" />
              </Box>
            </Box>
            <Box 
              pl={{ base: '0', sm: '0', md: '10', lg: '10' }} 
              py={{ base: '6', sm: '6', md: '12', lg: '12' }} 
              borderLeft={{ base: 'none', sm: 'none', md: '3px #e5e5d1 solid', lg: '3px #e5e5d1 solid' }}
            >
              <Heading as="h5" size="sm">システムサービス事業部発足</Heading>
              <Text>従来の営業部をオフィス事業部とする</Text>
            </Box>
          </HStack>
          
          <HStack 
            flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            alignItems={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
            pt={{ base: '6', sm: '6', md: '0', lg: '0' }} 
            borderBottom={{ base: '3px #e5e5d1 solid', sm: '3px #e5e5d1 solid', md: 'none', lg: 'none' }}
          >
            <Box position={{ base: 'static', sm: 'static', md: 'relative', lg: 'relative'}}>
              <Heading as="h5" size="sm" w={{ base: 'auto', sm: 'auto', md: '110px', lg: '110px' }}>
              平成10年9月
              </Heading>
              <Box 
                position="absolute"
                top="0"
                left="110px" 
                display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
              >
                <BsFillCircleFill color="#0075c2" size="19.19px" />
              </Box>
            </Box>
            <Box 
              pl={{ base: '0', sm: '0', md: '10', lg: '10' }} 
              py={{ base: '6', sm: '6', md: '12', lg: '12' }} 
              borderLeft={{ base: 'none', sm: 'none', md: '3px #e5e5d1 solid', lg: '3px #e5e5d1 solid' }}
            >
              <Heading as="h5" size="sm">秋田市寺内に両事業部を移転</Heading>
            </Box>
          </HStack>
          
          <HStack 
            flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            alignItems={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
            pt={{ base: '6', sm: '6', md: '0', lg: '0' }} 
            borderBottom={{ base: '3px #e5e5d1 solid', sm: '3px #e5e5d1 solid', md: 'none', lg: 'none' }}
          >
            <Box position={{ base: 'static', sm: 'static', md: 'relative', lg: 'relative'}}>
              <Heading as="h5" size="sm" w={{ base: 'auto', sm: 'auto', md: '110px', lg: '110px' }}>
              平成15年10月
              </Heading>
              <Box 
                position="absolute"
                top="0"
                left="110px" 
                display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
              >
                <BsFillCircleFill color="#0075c2" size="19.19px" />
              </Box>
            </Box>
            <Box 
              pl={{ base: '0', sm: '0', md: '10', lg: '10' }} 
              py={{ base: '6', sm: '6', md: '12', lg: '12' }} 
              borderLeft={{ base: 'none', sm: 'none', md: '3px #e5e5d1 solid', lg: '3px #e5e5d1 solid' }}
            >
              <Heading as="h5" size="sm">社名を株式会社ビー・エス・サイトーと変更</Heading>
            </Box>
          </HStack>
          
          <HStack 
            flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            alignItems={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
            pt={{ base: '6', sm: '6', md: '0', lg: '0' }} 
            borderBottom={{ base: '3px #e5e5d1 solid', sm: '3px #e5e5d1 solid', md: 'none', lg: 'none' }}
          >
            <Box position={{ base: 'static', sm: 'static', md: 'relative', lg: 'relative'}}>
              <Heading as="h5" size="sm" w={{ base: 'auto', sm: 'auto', md: '110px', lg: '110px' }}>
              平成20年6月
              </Heading>
              <Box 
                position="absolute"
                top="0"
                left="110px" 
                display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
              >
                <BsFillCircleFill color="#0075c2" size="19.19px" />
              </Box>
            </Box>
            <Box 
              pl={{ base: '0', sm: '0', md: '10', lg: '10' }} 
              py={{ base: '6', sm: '6', md: '12', lg: '12' }} 
              borderLeft={{ base: 'none', sm: 'none', md: '3px #e5e5d1 solid', lg: '3px #e5e5d1 solid' }}
            >
              <Heading as="h5" size="sm">秋田市川尻に両事業部を移転</Heading>
            </Box>
          </HStack>
          
          <HStack 
            flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            alignItems={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
            pt={{ base: '6', sm: '6', md: '0', lg: '0' }} 
            borderBottom={{ base: '3px #e5e5d1 solid', sm: '3px #e5e5d1 solid', md: 'none', lg: 'none' }}
          >
            <Box position={{ base: 'static', sm: 'static', md: 'relative', lg: 'relative'}}>
              <Heading as="h5" size="sm" w={{ base: 'auto', sm: 'auto', md: '110px', lg: '110px' }}>
              平成21年3月
              </Heading>
              <Box 
                position="absolute"
                top="0"
                left="110px" 
                display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
              >
                <BsFillCircleFill color="#0075c2" size="19.19px" />
              </Box>
            </Box>
            <Box 
              pl={{ base: '0', sm: '0', md: '10', lg: '10' }} 
              py={{ base: '6', sm: '6', md: '12', lg: '12' }} 
              borderLeft={{ base: 'none', sm: 'none', md: '3px #e5e5d1 solid', lg: '3px #e5e5d1 solid' }}
            >
              <Heading as="h5" size="sm">ISO/IEC27001認証取得</Heading>
            </Box>
          </HStack>
          
          <HStack 
            flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            alignItems={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
            pt={{ base: '6', sm: '6', md: '0', lg: '0' }} 
            borderBottom={{ base: '3px #e5e5d1 solid', sm: '3px #e5e5d1 solid', md: 'none', lg: 'none' }}
          >
            <Box position={{ base: 'static', sm: 'static', md: 'relative', lg: 'relative'}}>
              <Heading as="h5" size="sm" w={{ base: 'auto', sm: 'auto', md: '110px', lg: '110px' }}>
              平成22年1月
              </Heading>
              <Box 
                position="absolute"
                top="0"
                left="110px" 
                display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
              >
                <BsFillCircleFill color="#0075c2" size="19.19px" />
              </Box>
            </Box>
            <Box 
              pl={{ base: '0', sm: '0', md: '10', lg: '10' }} 
              py={{ base: '6', sm: '6', md: '12', lg: '12' }} 
              borderLeft={{ base: 'none', sm: 'none', md: '3px #e5e5d1 solid', lg: '3px #e5e5d1 solid' }}
            >
              <Heading as="h5" size="sm">ソリューション事業部発足</Heading>
              <Text>(現在に至る)</Text>
            </Box>
          </HStack>
        </Box>
        
        <Heading size='md' mt={20} mb={5} pl={2.5} borderLeft="solid 5px #0075c2">アクセスマップ</Heading>
        <AspectRatio ratio={16 / 9}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.5072314881904!2d140.09367731473768!3d39.70578210649422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8fc319589deb53%3A0x1927e889c2ce9a28!2zKOagqinjg5Pjg7zjg7vjgqjjgrnjg7vjgrXjgqTjg4jjg7w!5e0!3m2!1sja!2sjp!4v1660011418361!5m2!1sja!2sjp" loading="lazy" />
        </AspectRatio>

        <Heading size='md' mt={20} mb={5} pl={2.5} borderLeft="solid 5px #0075c2">販売パートナー</Heading>
        <TableContainer>
          <Table variant='simple'>
            <Tbody>
              <Tr>
                <Td><Image src='images/partner/amano.webp' alt="アマノ" m="0 auto" /></Td>
                <Td><Image src='images/partner/checkpoint.webp' alt="チェックポイント" m="0 auto" /></Td>
                <Td><Image src='images/partner/f_secure.webp' alt="エフセキュア" m="0 auto" /></Td>
                <Td><Image src='images/partner/irisohyama.webp' alt="アイリスオーヤマ" m="0 auto" /></Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td><Image src='images/partner/kaunet.webp' alt="カウネット" m="0 auto" /></Td>
                <Td><Image src='images/partner/kokuyo.webp' alt="コクヨ" m="0 auto" /></Td>
                <Td><Image src='images/partner/malion5.webp' alt="MaLion5" m="0 auto" /></Td>
                <Td><Image src='images/partner/nec.webp' alt="NEC" m="0 auto" /></Td>
              </Tr>
              <Tr>
                <Td><Image src='images/partner/ricoh.webp' alt="リコー" m="0 auto" /></Td>
                <Td><Image src='images/partner/skysea.webp' alt="スカイシー" m="0 auto" /></Td>
                <Td><Image src='images/partner/smartkaigo.webp' alt="スマート介護" m="0 auto" /></Td>
                <Td><Image src='images/partner/watchguard.webp' alt="ウォッチガード" m="0 auto" /></Td>
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