import { Fragment, useContext, useState } from 'react';
import styled from 'styled-components';
import config from '../config/config';
import { AuthContext } from '../context/authContext';
import { PostForm, PostInput, PostButton } from '../util/postForm';

const { API_URL } = config;

const PostDiv = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Post = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const { user, token } = useContext(AuthContext);
  const data = [
    {
      Title: 'F-650 Truck Review',
      Link: 'https://www.youtube.com/watch?v=JrHDeSMvnt4',
    },
    {
      Title: 'Dodge Ram SRT-10',
      Link: 'https://www.youtube.com/watch?v=2YKGMtv20cs',
    },
    {
      Title: 'G63 AMG 6X6 Truck',
      Link: 'https://www.youtube.com/watch?v=zrESlrGCALM',
    },
    {
      Title: 'Koenigsegg Agera RS1',
      Link: 'https://www.youtube.com/watch?v=_eXcPKdarLQ',
    },
  ];
  const addPost = () => {
    console.log(token);
    setTitle('');
    setLink('');
  };
  return (
    <PostDiv>
      <h1 style={{ fontSize: '2rem' }}>Hello {user}!</h1>
      <PostForm>
        <PostInput
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        ></PostInput>
        <PostInput
          type="text"
          name="link"
          placeholder="Link"
          value={link}
          onChange={e => {
            setLink(e.target.value);
          }}
        ></PostInput>
        <PostButton type="button" onClick={addPost}>
          Create
        </PostButton>
      </PostForm>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((h, i) => {
              return <th key={i}>{h}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((it, i) => {
            return (
              <tr key={i}>
                {Object.entries(it).map(([k, v]) => {
                  return (
                    <td key={k}>
                      <span>{k}</span>
                      {k === 'Link' ? (
                        <Fragment>
                          <a href={v} className="desktop__table__link">
                            {v}
                          </a>{' '}
                          <a className="mobile__link" href={v}>
                            Link
                          </a>
                        </Fragment>
                      ) : (
                        v
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </PostDiv>
  );
};

export default Post;
