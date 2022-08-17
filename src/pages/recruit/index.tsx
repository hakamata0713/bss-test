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
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const IndexPage: React.FC = () => {
  return (
    <>
    <Header />
    <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
        <Heading as="h2" size='lg' pt={5} textAlign="center">採用情報</Heading>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">採用担当者からのメッセージ</Heading>
        <Text pt={5}>
          弊社は創業50周年の長い歴史がありながら、最新のIT技術を持った企業です。<br/>
          この信頼と先端技術を糧に、お客様とともに歩んで参りました。<br/>
          今後も更に成長していくために、明るく元気で意欲的なスタッフを募集しています!<br/>
          私たちと一緒に、秋田の企業のIT環境を ”より快適に、より安全に”サポートしてみませんか?
        </Text>

        <Heading size='md' mt={10} pl={2.5} borderLeft="solid 5px #0075c2">募集要項</Heading>
        <Accordion defaultIndex={[0]} allowMultiple pt={5}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' p={2}>
                  ITアドバイザー
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={5}>
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
                <Table variant='simple' colorScheme='blue' size="lg">
                  <Tbody>
                    <Tr>
                      <Th>雇用形態</Th>
                      <Td>正社員</Td>
                    </Tr>
                    <Tr>
                      <Th>業務内容</Th>
                      <Td>
                        IT関連商品やITサービスの情報提供、及び提案活動<br/>
                        <br/>
                        ★お客様の業務効率化や省力化へのご支援を担当します。<br/>
                        公共団体や民間企業などの既存のお客様へ、<br/>
                        各種の事務機器やソフトウェアやサービスなどの情報提供や提案活動。<br/>
                        <br/>
                        ■その他<br/>
                        宿泊を伴う出張あり<br/>
                        Aターン(U・I・Jターン)希望者歓迎<br/>
                        最短3日以内にオンライン面接も可能です<br/>  
                      </Td>
                    </Tr>
                    <Tr>
                      <Th>応募資格</Th>
                      <Td>ITスキルがあれば営業経験がなくても応募可能です。</Td>
                    </Tr>
                    <Tr>
                      <Th>勤務地</Th>
                      <Td>秋田市川尻新川町9-35</Td>
                    </Tr>
                    <Tr>
                      <Th>賃金</Th>
                      <Td>当社規定による</Td>
                    </Tr>
                    <Tr>
                      <Th>就業時間</Th>
                      <Td>08:30 ~ 17:30</Td>
                    </Tr>
                    <Tr>
                      <Th>休日</Th>
                      <Td>土日祝、その他、年末年始(4日)、お盆(4日)、週休二日制、年間休日数122日</Td>
                    </Tr>
                    <Tr>
                      <Th>その他</Th>
                      <Td>通勤手当 マイカー通勤可(駐車場有) 雇用保険、労災保険、健康保険、厚生年金保険 完備</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' p={2}>
                  パソコン営業
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={5}>
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
                <Table variant='simple' colorScheme='blue' size="lg">
                  <Tbody>
                    <Tr>
                      <Th>雇用形態</Th>
                      <Td>正社員</Td>
                    </Tr>
                    <Tr>
                      <Th>業務内容</Th>
                      <Td>
                        パソコン、複合機、事務機器全般の営業<br/>
                        <br/>
                        ★お客様の業務効率化や省力化へのご支援を担当します。<br/>
                        公共団体や民間企業などの既存のお客様へ、<br/>
                        各種の事務機器やソフトウェアやサービスなどの情報提供や提案活動。<br/>
                        <br/>
                        ■その他<br/>
                        宿泊を伴う出張あり<br/>
                        Aターン(U・I・Jターン)希望者歓迎<br/>
                        最短3日以内にオンライン面接も可能です<br/>  
                      </Td>
                    </Tr>
                    <Tr>
                      <Th>応募資格</Th>
                      <Td>実務経験2年以上の方優遇、未経験者でも応談。</Td>
                    </Tr>
                    <Tr>
                      <Th>勤務地</Th>
                      <Td>秋田市川尻新川町9-35</Td>
                    </Tr>
                    <Tr>
                      <Th>賃金</Th>
                      <Td>当社規定による</Td>
                    </Tr>
                    <Tr>
                      <Th>就業時間</Th>
                      <Td>08:30 ~ 17:30</Td>
                    </Tr>
                    <Tr>
                      <Th>休日</Th>
                      <Td>土日祝、その他、年末年始(4日)、お盆(4日)、週休二日制、年間休日数122日</Td>
                    </Tr>
                    <Tr>
                      <Th>その他</Th>
                      <Td>通勤手当 マイカー通勤可(駐車場有) 雇用保険、労災保険、健康保険、厚生年金保険 完備</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' p={2}>
                  システムエンジニア・プログラマー
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={5}>
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
                <Table variant='simple' colorScheme='blue' size="lg">
                  <Tbody>
                    <Tr>
                      <Th>雇用形態</Th>
                      <Td>正社員</Td>
                    </Tr>
                    <Tr>
                      <Th>業務内容</Th>
                      <Td>
                        システムの設計・開発・サポート、及びITサポート全般<br/>
                        <br/>
                        ■使用する言語、ツール<br/>
                        Java/VC/Android/ios及び、kintone/RPA/CMS等のITツール<br/>
                        ■業種・業務<br/>
                        官公庁、自治体等の業務システム<br/>
                        製造メーカーの制御系システム<br/>
                        スマートフォンやタブレットのモバイルシステム<br/>
                        <br/>
                        ■その他<br/>
                        宿泊を伴う出張あり<br/>
                        Aターン(U・I・Jターン)希望者歓迎<br/>
                        最短3日以内にオンライン面接も可能です<br/>  
                      </Td>
                    </Tr>
                    <Tr>
                      <Th>応募資格</Th>
                      <Td>	実務経験2年以上の方優遇</Td>
                    </Tr>
                    <Tr>
                      <Th>勤務地</Th>
                      <Td>秋田市川尻新川町9-35</Td>
                    </Tr>
                    <Tr>
                      <Th>賃金</Th>
                      <Td>当社規定による</Td>
                    </Tr>
                    <Tr>
                      <Th>就業時間</Th>
                      <Td>08:30 ~ 17:30</Td>
                    </Tr>
                    <Tr>
                      <Th>休日</Th>
                      <Td>土日祝、その他、年末年始(4日)、お盆(4日)、週休二日制、年間休日数122日</Td>
                    </Tr>
                    <Tr>
                      <Th>その他</Th>
                      <Td>通勤手当 マイカー通勤可(駐車場有) 雇用保険、労災保険、健康保険、厚生年金保険 完備</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' p={2}>
                  配達・営業
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={5}>
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
                <Table variant='simple' colorScheme='blue' size="lg">
                  <Tbody>
                    <Tr>
                      <Th>雇用形態</Th>
                      <Td>正社員</Td>
                    </Tr>
                    <Tr>
                      <Th>業務内容</Th>
                      <Td>
                        事務用品、事務機器全般の配達・営業<br/>
                        県内のJAや公共団体・民間企業へ、<br/>
                        各種商品の配達(納品)及び営業(ルート)を行っていただきます。<br/>
                        <br/>
                        ■その他<br/>
                        宿泊を伴う出張あり<br/>
                        Aターン(U・I・Jターン)希望者歓迎<br/>
                        最短3日以内にオンライン面接も可能です<br/>  
                      </Td>
                    </Tr>
                    <Tr>
                      <Th>応募資格</Th>
                      <Td>	実務経験2年以上の方優遇</Td>
                    </Tr>
                    <Tr>
                      <Th>勤務地</Th>
                      <Td>秋田市川尻新川町9-35</Td>
                    </Tr>
                    <Tr>
                      <Th>賃金</Th>
                      <Td>当社規定による</Td>
                    </Tr>
                    <Tr>
                      <Th>就業時間</Th>
                      <Td>08:30 ~ 17:30</Td>
                    </Tr>
                    <Tr>
                      <Th>休日</Th>
                      <Td>土日祝、その他、年末年始(4日)、お盆(4日)、週休二日制、年間休日数122日</Td>
                    </Tr>
                    <Tr>
                      <Th>その他</Th>
                      <Td>通勤手当 マイカー通勤可(駐車場有) 雇用保険、労災保険、健康保険、厚生年金保険 完備</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default IndexPage