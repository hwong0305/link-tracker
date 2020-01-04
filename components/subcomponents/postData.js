import { useState } from 'react';
import { Delete } from 'styled-icons/material/Delete';
import { ShareForward } from 'styled-icons/remix-fill/ShareForward';
import config from '../../config/config';
import fetchAdapter from '../../helpers/fetchAdapter';
import { Checkbox, Switch } from '../../util/postForm';

const { CLIENT_URL } = config;

const PostData = props => {
  const { id, title, link, token, data, setData, index, shared } = props;
  const [toggle, setToggle] = useState(shared);
  const [running, setRunning] = useState(false);

  const removePost = async (postId, postIndex) => {
    try {
      await fetchAdapter(`/posts/${postId}`, 'DELETE', token);
      const newData = [...data];
      newData.splice(postIndex, 1);
      setData(newData);
    } catch (err) {
      console.log(err);
      alert('Error deleting post');
    }
  };

  const triggerToggle = e => {
    setRunning(true);
    setToggle(e.target.checked);

    fetchAdapter(`/posts/${id}`, 'PUT', token, {
      shared: e.target.checked, // This is safer
    }).then(() => {
      setRunning(false);
    });
  };

  return (
    <tr>
      <td>
        <span>Title</span>
        {title}
      </td>
      <td>
        <span>Link</span>
        <a href={link}>{link}</a>
      </td>
      <td className="actions">
        <span>Delete / Deploy</span>
        <button
          type="button"
          className="deleteButton"
          aria-label="Delete Post"
          onClick={() => {
            if (confirm('Are you sure you want to delete?')) {
              removePost(id, index);
            }
          }}
        >
          <Delete size={20}></Delete>
        </button>
        <Checkbox
          type="checkbox"
          id={id}
          className="checkbox"
          checked={toggle}
          disabled={running}
          onChange={triggerToggle}
        ></Checkbox>
        <Switch htmlFor={id} className="switch"></Switch>
        <a
          href={`${CLIENT_URL}/post/${id}`}
          className="share"
          style={{ marginLeft: '0.3em' }}
        >
          <ShareForward size={20}></ShareForward>
        </a>
      </td>
    </tr>
  );
};

export default PostData;
