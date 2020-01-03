import { Fragment, useEffect, useState } from 'react';
import { ShareForward } from 'styled-icons/remix-fill/ShareForward';
import { Delete } from 'styled-icons/material/Delete';
import config from '../../config/config';
import fetchAdapter from '../../helpers/fetchAdapter';
import { Checkbox, Switch } from '../../util/postForm';

const { CLIENT_URL } = config;

const Table = ({ headers, token }) => {
  const [data, setData] = useState([]);
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

  return (
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
  );
};

export default Table;
