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
  Center
} from "@chakra-ui/react";
import { GiOfficeChair } from 'react-icons/gi'
import { FaLaptopCode } from 'react-icons/fa'
import { MdPersonSearch } from 'react-icons/md'

const IndexPage: React.FC = () => {
  return (
    <>
    <Header />
    <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
        <Heading as="h2" size='lg' pt={5} textAlign="center">事業内容</Heading>

        <HStack justifyContent="space-around" pt={10} flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
            <Box p={5}>
                <Center>
                    <NextLink href="/services/office" passHref>
                        <Button w="100px" h="100px" borderRadius="50%" bgColor="#0075c2" _hover={{ bgColor: '#4E93C2' }}><GiOfficeChair size={'100px'} color={'#fff'} /></Button>
                    </NextLink>
                </Center>
                <Heading as="h4" size="md" pt={5}>オフィス事業</Heading>
            </Box>

            <Box p={5} pt={{base: 10, sm: 10, md: 5, lg: 5}}>
                <Center>
                    <NextLink href="/services/it-solution" passHref>
                        <Button w="100px" h="100px" borderRadius="50%" bgColor="#0075c2" _hover={{ bgColor: '#4E93C2' }}><FaLaptopCode size={'100px'} color={'#fff'} /></Button>
                    </NextLink>
                </Center>
                <Heading as="h4" size="md" pt={5}>ITソリューション事業</Heading>
            </Box>

            <Box p={5} pt={{base: 10, sm: 10, md: 5, lg: 5}}>
                <Center>
                    <NextLink href="/services/outsourcing" passHref>
                        <Button w="100px" h="100px" borderRadius="50%" bgColor="#0075c2" _hover={{ bgColor: '#4E93C2' }}><MdPersonSearch size={'100px'} color={'#fff'} /></Button>
                    </NextLink>
                </Center>
                <Heading as="h4" size="md" pt={5}>技術者派遣事業</Heading>
            </Box>
        </HStack>
    </Container>
    <Footer />
    <ReturnTopButton />
    </>
  )
}

export default IndexPage