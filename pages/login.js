import Link from 'next/link';
import {
  MainContainer,
  Card,
  FormTitle,
  Form,
  FormInput,
  FormButton,
} from '../util/form';

const Login = () => {
  return (
    <MainContainer>
      <Card>
        <FormTitle>Login</FormTitle>
        <Form>
          <FormInput
            type="text"
            name="username"
            placeholder="Username"
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
          ></FormInput>
          <FormButton type="button" style={{ marginBottom: '1rem' }}>
            Login
          </FormButton>
          <Link>
            <a
              href="/register"
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
