import { useState, useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import config from '../config/config';
import { AuthContext } from '../context/authContext';
import {
  MainContainer,
  Card,
  FormTitle,
  Form,
  FormInput,
  FormButton,
} from '../util/form';

const { API_URL } = config;

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const { changeLoggedIn, setUser, setToken } = useContext(AuthContext);
  const loginUser = async () => {
    const userRes = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ username, password }),
    });
    if (!userRes.ok) {
      setErr('Incorrect username or password');
    } else {
      const { token } = await userRes.json();
      changeLoggedIn(true);
      setUser(username);
      setToken(token);
      Router.push('/');
    }
  };
  return (
    <MainContainer>
      <Card>
        <FormTitle>Login</FormTitle>
        <p style={{ color: 'red', marginLeft: '1rem', marginRight: '0.5rem' }}>
          {err}
        </p>
        <Form>
          <FormInput
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => {
              setUserName(e.target.value);
            }}
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          ></FormInput>
          <FormButton
            type="button"
            style={{ marginBottom: '1rem' }}
            onClick={loginUser}
          >
            Login
          </FormButton>
          <Link href="/register">
            <a
              style={{
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                textDecoration: 'none',
                textAlign: 'center',
                color: '#999',
              }}
            >
              Don't have an account?
            </a>
          </Link>
        </Form>
      </Card>
    </MainContainer>
  );
};

export default Login;
