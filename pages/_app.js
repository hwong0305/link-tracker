import { Fragment, useState } from 'react';
import Head from 'next/head';
import { AuthContext } from '../context/authContest';
import { GlobalStyle } from '../util/style';

export default function App(props) {
  const { Component, pageProps } = props;
  const [user, setUser] = useState('');
  const [loggedIn, changeLoggedIn] = useState(false);
  return (
    <Fragment>
      <Head>
        <title>Link Tracker</title>
        <link
          href="https://fonts.googleapis.com/css?family=Coda&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <AuthContext.Provider value={{ user, loggedIn, setUser, changeLoggedIn }}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </Fragment>
  );
}
