import { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/authContext';
import { PostForm, PostInput, PostButton } from '../util/postForm';
import fetchAdapter from '../helpers/fetchAdapter';
import Table from './subcomponents/postTable';
import { useData } from '../helpers/dataHook';

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
  const { user, token } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [err, setErr] = useState('');
  const [data, setData] = useData(token);
  const formRef = useRef(null);
  const selectRef = useRef(null);
  const headers = ['Title', 'Link', 'Delete/Deploy'];

  const resetForm = () => {
    setTitle('');
    setLink('');
    formRef.current.reset();
  };

  const addPost = async e => {
    e.preventDefault();
    try {
      const postData = await fetchAdapter('/posts', 'POST', token, {
        title,
        link,
        expiration: selectRef.current.value,
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

  return (
    <PostDiv>
      <h1 style={{ fontSize: '3.6rem' }}>Hello {user}!</h1>
      <PostForm method="POST" ref={formRef} onSubmit={addPost}>
        <p style={{ color: 'red', fontSize: '1.4rem', lineHeight: '1rem' }}>
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
        <label htmlFor="expiration" className="postFormLabel">
          Expiration
          <select id="expiration" ref={selectRef} defaultValue={30}>
            <option value={1}>1 Day</option>
            <option value={7}>1 Week</option>
            <option value={14}>2 Weeks</option>
            <option value={30}>1 Month</option>
          </select>
        </label>
        <PostButton aria-label="Create Post" type="submit">
          Create
        </PostButton>
      </PostForm>
      <Table
        headers={headers}
        formRef={formRef}
        token={token}
        data={data}
        setData={setData}
      />
    </PostDiv>
  );
};

export default Post;
