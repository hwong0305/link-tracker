import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import config from '../config/config';
import { AuthContext } from '../context/authContext';
import { PostForm, PostInput, PostButton } from '../util/postForm';

const { API_URL } = config;

const PostDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Post = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [data, setData] = useState([]);
  const [err, setErr] = useState('');
  const { user, token } = useContext(AuthContext);
  const formRef = useRef(null);
  const headers = ['Title', 'Link'];
  useEffect(() => {
    fetch(`${API_URL}/users/posts`, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) {
          alert('error');
        } else {
          return res.json();
        }
      })
      .then(pData => {
        setData(
          pData.map(post => {
            return { Title: post.title, Link: post.link };
          })
        );
      });
  }, []);

  const addPost = e => {
    e.preventDefault();
    fetch(`${API_URL}/posts`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, link }),
    })
      .then(res => {
        return res.json();
      })
      .then(postData => {
        setData([...data, { Title: postData.title, Link: postData.link }]);
        setTitle('');
        setLink('');
        formRef.current.reset();
      })
      .catch(err => {
        console.log(err);
        setErr('The Title and Post fields are required');
      });
  };
  return (
    <PostDiv>
      <h1 style={{ fontSize: '2rem' }}>Hello {user}!</h1>
      <PostForm method="POST" ref={formRef} onSubmit={addPost}>
        <p style={{ color: 'red', fontSize: '1rem', lineHeight: '1rem' }}>
          {err}
        </p>
        <PostInput
          type="text"
          name="title"
          placeholder="Title"
          required
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        ></PostInput>
        <PostInput
          type="text"
          name="link"
          placeholder="Link"
          required
          value={link}
          onChange={e => {
            setLink(e.target.value);
          }}
        ></PostInput>
        <PostButton type="submit">Create</PostButton>
      </PostForm>
      <table>
        <thead>
          <tr>
            {headers.map((h, i) => {
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
                          </a>
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
