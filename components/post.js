import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/authContext';
import { PostForm, PostInput, PostButton } from '../util/postForm';
import fetchAdapter from '../helpers/fetchAdapter';

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

  const resetForm = () => {
    setTitle('');
    setLink('');
    formRef.current.reset();
  };

  useEffect(() => {
    fetchAdapter('/users/posts', 'GET', token).then(pData => {
      const managedPostData = pData.map(post => ({
        Title: post.title,
        Link: post.link,
      }));
      setData(managedPostData);
    });
  }, []);

  const addPost = async e => {
    e.preventDefault();
    try {
      const postData = await fetchAdapter('/posts', 'POST', token, {
        title,
        link,
      });
      setData([...data, { Title: postData.title, Link: postData.link }]);
      resetForm();
    } catch (err) {
      console.log(err);
      setErr('The Title and Post fields are required');
    }
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
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((it, i) => (
            <tr key={i}>
              {Object.entries(it).map(([k, v]) => (
                <td key={k}>
                  <span>{k}</span>
                  {k === 'Title' && v}
                  {k === 'Link' && (
                    <Fragment>
                      <a href={v} className="desktop">
                        {v}
                      </a>
                      <a href={v} className="mobile">
                        Link
                      </a>
                    </Fragment>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </PostDiv>
  );
};

export default Post;
