import { useState } from 'react';
import { Zap } from 'styled-icons/boxicons-solid/Zap';
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

  const extendPost = () => {
    fetchAdapter(`/posts/extend/${id}`, 'PUT', token)
      .then(dat => {
        console.log(dat);
      })
      .catch(err => {
        alert(err.toString());
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
        <a className="desktop" href={link}>
          {link}
        </a>
        <a className="mobile" href={link}>
          Link
        </a>
      </td>
      <td className="actions">
        <span>Extend / Delete / Deploy</span>
        <button
          type="button"
          className="extendButton"
          aria-label="Update Post"
          onClick={extendPost}
        >
          <Zap size={20} />
        </button>
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
          <Delete size={20} />
        </button>
        <Checkbox
          type="checkbox"
          id={id}
          className="checkbox"
          checked={toggle}
          disabled={running}
          onChange={triggerToggle}
        />
        <Switch htmlFor={id} className="switch" />
        <a
          href={`${CLIENT_URL}/post/${id}`}
          className="share"
          style={{ marginLeft: '0.3em' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShareForward size={20} />
        </a>
      </td>
    </tr>
  );
};

export default PostData;
