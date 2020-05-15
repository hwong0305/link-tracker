import styled from 'styled-components';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Cookies from 'cookie';

const MainPage = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: calc(100% - 70px);
  width: 100%;
  overflow: auto;
`;

const NoSSRLanding = dynamic(() => import('../components/landing'), {
  ssr: true,
});

const NoSSRNav = dynamic(() => import('../components/nav'), {
  ssr: true,
});

const NoSSRPost = dynamic(() => import('../components/post'), { ssr: true });

const App = ({ status }) => {
  const [loggedIn, setLogin] = useState(status);
  return (
    <div>
      <NoSSRNav loggedIn={loggedIn} setLogin={setLogin} />
      <MainPage>
        {!loggedIn && <NoSSRLanding></NoSSRLanding>}
        {loggedIn && <NoSSRPost></NoSSRPost>}
      </MainPage>
    </div>
  );
};

App.getInitialProps = ({ req }) => {
  const cookies = Cookies.parse(
    req ? req.headers.cookie || '' : document.cookie
  );

  return {
    status: cookies.userstatus,
  };
};

export default App;
