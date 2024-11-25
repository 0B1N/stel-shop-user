import React from "react";

import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "utils/styles/global";
import Modal from "components/Modal";
import Header from "components/header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>스텔라이브 굿즈샵</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />

      <Header />

      <Component {...pageProps} />
    </>
  );
}
