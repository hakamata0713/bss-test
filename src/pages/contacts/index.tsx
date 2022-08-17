import { useFormState } from "state/contact/useFormState";
import { useSendContactForm } from "state/contact/useSendContactForm";
import { ContactParams } from "interfaces/ContactParams";
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import ReturnTopButton from 'components/ReturnTopButton';
import React from "react";
import NextLink from "next/link";
import {
  Container,
  Heading,
  Hide,
  Box,
  Stack,
  Image,
  Text,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Checkbox,
  HStack,
  CheckboxGroup,
  Link,
} from "@chakra-ui/react";

const IndexPage: React.FC = () => {
    const [contact, handleChange] = useFormState<ContactParams>({
      name: '',
      companyname: '',
      email: '',
      check_diagnose: '',
      check_seminar: '',
      check_others: '',
      message: '',
    });
    const [errorMessage, sendContactForm] = useSendContactForm();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      sendContactForm(contact);
    };
  
    return (
      <>
      <Header />
      <Container as="main" maxW="container.lg" marginTop="10" marginBottom="16">
      <Box>
      <Heading as="h2" size='lg' pt={5} textAlign="start">お問い合わせ</Heading>

        {errorMessage && <Text>{errorMessage}</Text>}

        <form method='post' onSubmit={handleSubmit}>

          <FormControl isRequired>
            <FormLabel pt={5}>氏名</FormLabel>
            <Box>
              <Input type='text' placeholder='氏名' name='name' borderColor="#718096" onChange={handleChange} />
            </Box>
          </FormControl>

          <FormControl isRequired>
            <FormLabel pt={5}>会社名</FormLabel>
            <Box>
              <Input type='text' placeholder='会社名' name='$companyname' borderColor="#718096" onChange={handleChange} />
            </Box>
          </FormControl>

          <FormControl isRequired>
            <FormLabel pt={5}>メールアドレス</FormLabel>
            <Box>
              <Input 
                type='email' 
                placeholder='メールアドレス' 
                name='email'
                borderColor="#718096"
                onChange={handleChange} />
            </Box>
          </FormControl>

          <FormControl>
            <FormLabel pt={5}>お問い合わせ項目</FormLabel>
            <CheckboxGroup>
              <Stack pl={3}>
                <Checkbox borderColor="#718096" name="$check_diagnose" value="無料セキュリティ診断を受けてみたい" onChange={handleChange} >無料セキュリティ診断を受けてみたい</Checkbox>
                <Checkbox borderColor="#718096" name="$check_seminar" value="開催予定のセミナーに参加してみたい" onChange={handleChange} >開催予定のセミナーに参加してみたい</Checkbox>
                <Checkbox borderColor="#718096" name="$check_others" value="その他（相談にのってほしいなど）" onChange={handleChange} >その他（相談にのってほしいなど）</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel pt={5}>お問い合わせ内容</FormLabel>
            <Box>
              <Textarea rows={10} borderColor="#718096" placeholder='お問い合わせ内容をご記入ください。' name='message' onChange={handleChange}/>
            </Box>
          </FormControl>

          <FormControl textAlign="center" isRequired>
            <Checkbox borderColor="#718096" pt={10}><Link href="privacy" target="_blank" rel="noopener noreferrer" color="#0075c2">個人情報保護方針</Link>に同意する</Checkbox>
          </FormControl>

          <Input type="text" name="honeypot" display="none" />

          <Box p={5} textAlign="center"><Button p={5} bgColor="#333" color="#fff" _hover={{ bgColor: '#555' }} _active={{ bgColor: '#555' }} type='submit'>送信</Button></Box>

        </form>
      </Box>
      </Container>
    <Footer />
    <ReturnTopButton />
      </>
    );
  };
  
  export default IndexPage;