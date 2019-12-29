import {
  MainContainer,
  Card,
  Form,
  FormTitle,
  FormButton,
  FormInput,
} from '../util/form';

const Register = () => {
  return (
    <MainContainer>
      <Card>
        <FormTitle>Register</FormTitle>
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
          <FormButton type="button" style={{ marginBottom: '2.5rem' }}>
            Register
          </FormButton>
        </Form>
      </Card>
    </MainContainer>
  );
};

export default Register;
