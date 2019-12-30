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
  const [user, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const { changeLoggedIn, setUser, setToken } = useContext(AuthContext);
  const registerUser = async () => {
    const userRes = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ username: user, password: pass }),
    });

    if (!userRes.ok) {
      alert('Registration information incorrect');
    } else {
      const { username, token } = await userRes.json();
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
        <Form>
          <FormInput
            type="text"
            name="username"
            placeholder="Username"
            value={user}
            onChange={e => {
              setUserName(e.target.value);
            }}
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={pass}
            onChange={e => {
              setPass(e.target.value);
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
