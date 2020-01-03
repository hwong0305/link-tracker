import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Delete } from 'styled-icons/material/Delete';
import { ShareForward } from 'styled-icons/remix-fill/ShareForward';
import config from '../config/config';
import { AuthContext } from '../context/authContext';
import {
  Checkbox,
  PostForm,
  PostInput,
  PostButton,
  Switch,
} from '../util/postForm';
import fetchAdapter from '../helpers/fetchAdapter';

const { CLIENT_URL } = config;

const PostDiv = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3em;
  margin-bottom: 3em;
`;
const Post = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [data, setData] = useState([]);
  const [err, setErr] = useState('');
  const { user, token } = useContext(AuthContext);
  const formRef = useRef(null);
  const headers = ['Title', 'Link', 'Delete/Deploy'];

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
        Id: post.id,
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
      setData([
        ...data,
        { Title: postData.title, Link: postData.link, Id: postData.id },
      ]);
      resetForm();
    } catch (err) {
      console.log(err);
      setErr('The Title and Post fields are required');
    }
  };

  const removePost = async (id, index) => {
    try {
      await fetchAdapter(`/posts/${id}`, 'DELETE', token);
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    } catch (err) {
      console.log(err);
      alert('Error deleting post');
    }
  };

  return (
    <PostDiv>
      <h1 style={{ fontSize: '3.6rem' }}>Hello {user}!</h1>
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
        <select>
          <option value="1">1 Day</option>
          <option value="7">1 Week</option>
          <option value="14">2 Weeks</option>
          <option value="30">1 Month</option>
        </select>
        <PostButton aria-label="Create Post" type="submit">
          Create
        </PostButton>
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
                <td key={k} className={k === 'Id' ? 'del' : ''}>
                  {k === 'Title' && (
                    <Fragment>
                      <span>{k}</span>
                      {v}
                    </Fragment>
                  )}
                  {k === 'Link' && (
                    <Fragment>
                      <span>{k}</span>
                      <a href={v} className="desktop">
                        {v}
                      </a>
                      <a href={v} className="mobile">
                        Link
                      </a>
                    </Fragment>
                  )}
                  {k === 'Id' && (
                    <Fragment>
                      <span>Delete / Deploy</span>
                      <button
                        type="button"
                        className="deleteButton"
                        aria-label="Delete Post"
                        onClick={() => {
                          if (confirm('Are you sure you want to delete?')) {
                            removePost(v, i);
                          }
                        }}
                      >
                        <Delete size={20} />
                      </button>
                      <Checkbox
                        type="checkbox"
                        id={v}
                        className="checkbox"
                      ></Checkbox>
                      <Switch htmlFor={v} className="switch"></Switch>
                      <a
                        href={`${CLIENT_URL}/posts/${v}`}
                        className="share"
                        style={{ marginLeft: '0.3em' }}
                      >
                        <ShareForward size={20}></ShareForward>
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
