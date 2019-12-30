import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const MainPage = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 70px;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const NoSSRLanding = dynamic(
  () => {
    return import('../components/landing');
  },
  {
    ssr: false,
  }
);

const NoSSRNav = dynamic(
  () => {
    return import('../components/nav');
  },
  {
    ssr: false,
  }
);

const NoSSRPost = dynamic(
  () => {
    return import('../components/post');
  },
  { ssr: false }
);

const App = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      <NoSSRNav />
      <MainPage>
        {!loggedIn && <NoSSRLanding></NoSSRLanding>}
        {loggedIn && <NoSSRPost></NoSSRPost>}
      </MainPage>
    </div>
  );
};

export default App;
