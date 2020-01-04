import { useEffect, useState } from 'react';
import fetchAdapter from './fetchAdapter';

export function useData(token) {
  const [data, updateData] = useState([]);
  const [needToUpdate, setUpdate] = useState(false);

  useEffect(() => {
    fetchAdapter('/users/posts', 'GET', token).then(pData => {
      const managedPostData = pData.map(post => ({
        Title: post.title,
        Link: post.link,
        Id: post.id,
        Shared: post.shared,
      }));
      updateData(managedPostData);
    });
  }, [needToUpdate]);

  const setData = newData => {
    updateData(newData);
    setUpdate(true);
  };

  return [data, setData];
}
