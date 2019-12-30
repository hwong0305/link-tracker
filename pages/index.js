import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../context/authContest';
import Nav from '../components/nav';
import Landing from '../components/landing';
import Post from '../components/post';

const MainPage = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  top: 70px;
  left: 0;
  height: 100%;
  width: 100%;
`;

const App = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      <Nav />
      <MainPage>{loggedIn ? <Post></Post> : <Landing></Landing>}</MainPage>
    </div>
  );
};

export default App;
