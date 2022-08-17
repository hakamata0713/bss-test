/* src/components/Header.tsx */
import {
    Box,
    Text,
    Flex,
    Container,
    Heading,
    Button,
    Stack,
    HStack,
    color,
    Hide,
    Show,
    Image
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from "next/link";
import React, { FC } from 'react';

export const Footer: FC = () => {
    return (
        <Container px={0} maxW="full" borderTop="1px solid #eee">
            <Box px={4} bgColor="#fff" w="100%">
                <Flex 
                as="footer" 
                py="8"
                justifyContent="space-around" 
                alignItems="center"
                flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row'}}
                >
                    <Stack gap="2" w={{ base: '100%', sm: '100%', md: '100%', lg: 'auto' }}>
                        <NextLink href="/" passHref>
                            <Image src="../images/brand.webp" alt="会社ロゴ" w="220px" h="55px" cursor="pointer"/>
                        </NextLink>
                        <Text>〒010-0948 秋田市川尻新川町9-35</Text>
                        <Text>受付時間 9:00～17:00(平日)</Text>
                        <Text>Tel.018-865-7400/Fax.018-865-7401</Text>
                    </Stack>
                    <Hide breakpoint='(max-width: 767px)'>
                        <Flex pt={10} w={{ base: '100%', sm: '100%', md: '100%', lg: 'auto' }}>
                            <Stack as="nav" gap="2" >
                                <NextLink href="/" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">ホーム</Button></NextLink>
                                <NextLink href="/news" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">ニュース</Button></NextLink>
                            </Stack>
                            <Stack as="nav" gap="2" >
                                <NextLink href="/about" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">会社案内</Button></NextLink>
                                <Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">事業内容</Button>
                            </Stack>
                            <Stack as="nav" gap="2" >
                                <NextLink href="/recruit" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">採用情報</Button></NextLink>
                                <NextLink href="/contacts" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">お問い合わせ</Button></NextLink>
                            </Stack>
                            <Stack as="nav" gap="2" >
                                <NextLink href="/security" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">情報セキュリティ基本方針</Button></NextLink>
                                <NextLink href="/privacy" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">個人情報保護方針</Button></NextLink>
                            </Stack>
                        </Flex>
                    </Hide>
                    <Hide breakpoint='(min-width: 768px)'>
                            <Stack as="nav" gap="2" pt={10} w="100%">
                                <NextLink href="/" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">ホーム</Button></NextLink>
                                <NextLink href="/news" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">ニュース</Button></NextLink>
                                <NextLink href="/about" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">会社案内</Button></NextLink>
                                <Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">事業内容</Button>
                                <NextLink href="/recruit" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">採用情報</Button></NextLink>
                                <NextLink href="/contacts" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">お問い合わせ</Button></NextLink>
                                <NextLink href="/security" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">情報セキュリティ基本方針</Button></NextLink>
                                <NextLink href="/privacy" passHref><Button bgColor="#fff" justifyContent="flex-start" fontWeight="400">個人情報保護方針</Button></NextLink>
                            </Stack>
                    </Hide>
                </Flex>
            </Box>
            <Box pt={10} pb={10} bgColor="#f4f5f6">
                <Text textAlign="center">© 2022 BS SAITO Co., Ltd.</Text>
            </Box>
        </Container>
    );
}