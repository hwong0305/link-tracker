import { Fragment } from 'react';
import Head from 'next/head';

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <Fragment>
      <Head>
        <title>Link Tracker</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
