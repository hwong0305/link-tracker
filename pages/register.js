import { useContext, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import config from '../config/config';
import { AuthContext } from '../context/authContext';
import {
  MainContainer,
  Card,
  Form,
  FormTitle,
  FormButton,
  FormInput,
} from '../util/form';

const { API_URL } = config;

const Register = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const { setUser, setToken } = useContext(AuthContext);
  const registerUser = async e => {
    e.preventDefault();
    if (!username.match(/[a-zA-Z0-9]{4}/)) {
      setErr(
        'Username be longer than 4 characters. No special characters can be used'
      );
      return;
    }
    if (!password.match(/^.[^\s]{6,24}/)) {
      setErr(
        'Password must be between 6 and 32 characters long with no whitespace.'
      );
      return;
    }
    const userRes = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ username, password }),
    });

    if (!userRes.ok) {
      setErr(
        'User already exists or registration information is incorrect. Password must be between 6 and 24 characters'
      );
    } else {
      const { token } = await userRes.json();
      setUser(username);
      setToken(token);
      Router.push('/');
    }
  };
  return (
    <MainContainer>
      <Card>
        <FormTitle>Register</FormTitle>
        <p
          style={{
            color: 'red',
            marginLeft: '1.5em',
            marginRight: '1em',
            fontSize: '1.6rem',
          }}
        >
          {err}
        </p>
        <Form onSubmit={registerUser}>
          <FormInput
            type="text"
            name="username"
            title="Username must be at least 4 character. Only underscore special char is allowed"
            required
            placeholder="Username"
            value={username}
            onChange={e => {
              setUserName(e.target.value);
            }}
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            required
            placeholder="Password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          ></FormInput>
          <FormButton
            type="submit"
            aria-label="Register"
            style={{ marginBottom: '1rem' }}
          >
            Register
          </FormButton>
          <Link href="/login">
            <a
              style={{
                fontSize: '1.2rem',
                marginTop: '0.8rem',
                marginBottom: '1.5rem',
                textDecoration: 'none',
                textAlign: 'center',
                color: '#999',
              }}
            >
              Already have an acoount?
            </a>
          </Link>
        </Form>
      </Card>
    </MainContainer>
  );
};

export default Register;
