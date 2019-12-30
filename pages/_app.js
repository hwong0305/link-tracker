import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import { AuthContext } from '../context/authContext';
import { GlobalStyle } from '../util/style';

function App(props) {
  const { Component, pageProps } = props;
  const [user, setUser] = useState('');
  const [loggedIn, changeLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('userstate');
    if (data) {
      const { user: tokenUser, token: tokenToken } = JSON.parse(data);
      setUser(tokenUser);
      setToken(tokenToken);
      changeLoggedIn(!!tokenUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userstate', JSON.stringify({ user, token }));
  });

  return (
    <Fragment>
      <Head>
        <title>Link Tracker</title>
      </Head>
      <GlobalStyle />
      <AuthContext.Provider
        value={{ user, loggedIn, setUser, changeLoggedIn, token, setToken }}
      >
        <Component {...pageProps} />
      </AuthContext.Provider>
    </Fragment>
  );
}

export default App;
