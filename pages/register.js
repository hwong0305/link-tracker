import { useContext, useState } from 'react';
import Router from 'next/router';
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
  const { changeLoggedIn, setUser, setToken } = useContext(AuthContext);
  const registerUser = async () => {
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
        'User already exists or registration information is incorrect. Please only use alphanumeric characters and password is between 6 and 24 characters'
      );
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
        <FormTitle>Register</FormTitle>
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
            style={{ marginBottom: '2.5rem' }}
            onClick={registerUser}
          >
            Register
          </FormButton>
        </Form>
      </Card>
    </MainContainer>
  );
};

export default Register;
