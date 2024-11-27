import React from "react";

import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "utils/styles/global";
import Header from "components/header";
import MenuModal from "components/MenuModal";
import Modal from "components/Modal";
import { Provider } from "react-redux";
import { store } from "store";
import ProductBuyModal from "components/ProductBuyModal";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>스텔라이브 굿즈샵</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />

      <Provider store={store}>
        <Header />

        <Component {...pageProps} />

        <MenuModal />
        <Modal />
        <ProductBuyModal />
      </Provider>
    </>
  );
}
