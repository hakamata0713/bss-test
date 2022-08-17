/* src/pages/_app.tsx */
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Head from "next/head";
import 'styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>株式会社ビー・エス・サイトー</title>
        <meta name="description" content="秋田市でオフィス関連事業や情報セキュリティ対策、システム開発を手掛ける会社です。ウィルス対策、UTM導入等是非弊社にご相談ください。" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1, maximum-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp