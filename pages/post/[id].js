import YouTube from 'react-youtube';
import fetch from 'isomorphic-unfetch';
import config from '../../config/config';

const { API_URL } = config;

const Post = props => {
  const { vid } = props;
  return (
    <div>
      <YouTube videoId={vid}></YouTube>
    </div>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${API_URL}/public/post/${id}`);
  const data = await res.json();

  console.log(`Link Data: ${data.link}`);
  return {
    vid: data.link.split('?v=')[1],
  };
};

export default Post;
