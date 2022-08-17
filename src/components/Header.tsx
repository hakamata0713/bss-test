/* src/components/Header.tsx */
import {
    Box,
    Flex,
    Container,
    Button,
    Stack,
    HStack,
    Hide,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon,HamburgerIcon } from '@chakra-ui/icons'
import NextLink from "next/link";
import React, { FC } from 'react';

export const Header: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Container px={0} zIndex={"sticky"} position="sticky" top="0"  maxW="full">
            <Box px={4} bgColor="#fff" boxShadow='lg'w="100%">

                <Flex 
                as="header" 
                py="4" h={{ base: '80px', sm: 'auto' }} 
                justifyContent="space-between" 
                alignItems={{ bace: 'start', md: 'center' }} 
                gap="2" 
                flexDirection={{ base: 'row', sm: 'row', md: 'column', lg: 'row' }} 
                >

                    <NextLink href="/" passHref>
                        <Image src="../images/brand.webp" alt="会社ロゴ" w="220px" h="55px" cursor="pointer"/>
                    </NextLink>

                    <Hide breakpoint='(max-width: 767px)'>
                        <HStack as="nav" gap="2" >
                            <NextLink href="/" passHref><Button bgColor="#fff">ホーム</Button></NextLink>
                            <NextLink href="/news" passHref><Button bgColor="#fff">ニュース</Button></NextLink>
                            <NextLink href="/about" passHref><Button bgColor="#fff">会社案内</Button></NextLink>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bgColor="#fff">事業内容</MenuButton>
                                <MenuList>
                                    <MenuItem><NextLink href="/services/office" passHref>オフィス事業</NextLink></MenuItem>
                                    <MenuItem><NextLink href="/services/it-solution" passHref>ITソリューション事業</NextLink></MenuItem>
                                    <MenuItem><NextLink href="/services/outsourcing" passHref>技術者派遣事業</NextLink></MenuItem>
                                </MenuList>
                            </Menu>
                            <NextLink href="/recruit" passHref><Button bgColor="#fff">採用情報</Button></NextLink>
                            <NextLink href="/contacts" passHref><Button bgColor="#fff">お問い合わせ</Button></NextLink>
                        </HStack>
                    </Hide>
                    
                    <Hide breakpoint='(min-width: 768px)'>
                        <Box>
                            <Button
                                colorScheme='blue' 
                                onClick={onOpen}
                                justifyContent="center"
                                alignItems="center"
                                w="55px"
                                h="55px"
                            >
                                <HamburgerIcon w={7} h={7}/>
                            </Button>
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                            >
                                <DrawerOverlay />
                                <DrawerContent pt="71px">
                                    <DrawerCloseButton top="16px" right="16px" w="55px" h="55px"/>

                                    <DrawerBody>
                                        <Stack as="nav">
                                            <NextLink href="/" passHref>
                                                <Button 
                                                    bgColor="#fff" 
                                                    justifyContent="start"
                                                    _hover={{ backgroundColor: '#fff' }}
                                                    _active={{ backgroundColor: '#fff' }}
                                                >
                                                    ホーム
                                                </Button>
                                            </NextLink>
                                            <NextLink href="/news" passHref>
                                                <Button 
                                                    bgColor="#fff" 
                                                    justifyContent="start"
                                                    _hover={{ backgroundColor: '#fff' }}
                                                    _active={{ backgroundColor: '#fff' }}
                                                >
                                                    ニュース
                                                </Button>
                                            </NextLink>
                                            <NextLink href="/about" passHref>
                                                <Button 
                                                    bgColor="#fff" 
                                                    justifyContent="start"
                                                    _hover={{ backgroundColor: '#fff' }}
                                                    _active={{ backgroundColor: '#fff' }}
                                                >
                                                    会社案内
                                                </Button>
                                            </NextLink>
                                            <Menu>
                                                <MenuButton 
                                                    as={Button} 
                                                    rightIcon={<ChevronDownIcon />}
                                                    display="inline-block"
                                                    bgColor="#fff"
                                                    textAlign="start"
                                                    _hover={{ backgroundColor: '#fff' }}
                                                    _active={{ backgroundColor: '#fff' }}
                                                >
                                                    事業内容
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>オフィス事業</MenuItem>
                                                    <MenuItem>ITソリューション事業</MenuItem>
                                                    <MenuItem>技術者派遣事業</MenuItem>
                                                </MenuList>
                                            </Menu>
                                            <NextLink href="/recruit" passHref>
                                                <Button 
                                                    bgColor="#fff" 
                                                    justifyContent="start"
                                                    _hover={{ backgroundColor: '#fff' }}
                                                    _active={{ backgroundColor: '#fff' }}
                                                >
                                                    採用情報
                                                </Button>
                                            </NextLink>
                                            <NextLink href="/contacts" passHref>
                                                <Button 
                                                    bgColor="#fff" 
                                                    justifyContent="start"
                                                    _hover={{ backgroundColor: '#fff' }}
                                                    _active={{ backgroundColor: '#fff' }}
                                                >
                                                    お問い合わせ
                                                </Button>
                                            </NextLink>
                                        </Stack>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </Box>
                    </Hide>
                </Flex>
            </Box>
        </Container>
    );
}