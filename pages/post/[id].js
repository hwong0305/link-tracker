import YouTube from 'react-youtube';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import config from '../../config/config';

const { API_URL } = config;

const PostContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const StyledYt = styled(YouTube)`
  width: 640px;
  height: 390px;

  @media (max-width: 700px) {
    width: 320px;
    height: 180px;
  }
`;

const Post = props => {
  const { error, vid } = props;
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <PostContainer>
      {!error && <StyledYt opts={opts} videoId={vid}></StyledYt>}
      {error && <p>This item is not public</p>}
    </PostContainer>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${API_URL}/public/post/${id}`);
  if (res.status !== 200) {
    return {
      error: true,
    };
  }
  const data = await res.json();

  console.log(`Link Data: ${data.link}`);
  return {
    vid: data.link.split('?v=')[1],
  };
};

export default Post;
