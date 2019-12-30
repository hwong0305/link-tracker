import { Fragment, useState } from 'react';
import Head from 'next/head';
import { AuthContext } from '../context/authContest';

export default function App(props) {
  const { Component, pageProps } = props;
  const [user, setUser] = useState('');
  const [loggedIn, changeLoggedIn] = useState(false);
  return (
    <Fragment>
      <Head>
        <title>Link Tracker</title>
        <style jsx global>
          {`
            html,
            body {
              margin: 0;
              padding: 0;
              overflow: hidden;
            }
            * {
              box-sizing: border-box;
            }
          `}
        </style>
      </Head>
      <AuthContext.Provider value={{ user, loggedIn, setUser, changeLoggedIn }}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </Fragment>
  );
}
