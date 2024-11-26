import React, { useState } from "react";

import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "utils/styles/global";
import Header from "components/header";
import MenuModal from "components/MenuModal";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [visibleMenuModal, setVisibleMenuModal] = useState(false);

  return (
    <>
      <Head>
        <title>스텔라이브 굿즈샵</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />

      <Header onMenuClick={() => setVisibleMenuModal(!visibleMenuModal)} />

      <Component {...pageProps} />

      {visibleMenuModal && (
        <MenuModal onClose={() => setVisibleMenuModal(!visibleMenuModal)} />
      )}
    </>
  );
}
