import config from '../config/config';

const { API_URL } = config;

const fetchAdapter = async (path, method, token, body) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(`${API_URL}${path}`, options);
  const data = await res.json();
  return data;
};

export default fetchAdapter;
