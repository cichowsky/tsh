import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Heading, FormGroup, Input, Button } from 'components/UI';
import { AppRoute } from 'routing/AppRoute.enum';
import { SLoginForm, SFields, SLink } from './LoginForm.styles';

type Inputs = {
  username: string;
  password: string;
};

const LoginForm = () => {
  // TODO: handle errors
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <SLoginForm onSubmit={handleSubmit(onSubmit)}>
      <Heading isBig>Login</Heading>
      <SFields>
        <FormGroup column>
          <label htmlFor="username">Username</label>
          <Input
            {...register('username', { required: true, minLength: 3, maxLength: 50 })}
            id="username"
            placeholder="Enter username"
          />
        </FormGroup>
        <FormGroup column>
          <label htmlFor="password">Password</label>
          <Input
            {...register('password', { required: true, minLength: 6 })}
            id="password"
            type="password"
            placeholder="Enter password"
          />
        </FormGroup>
      </SFields>
      <Button type="submit" isBig>
        Log in
      </Button>
      <SLink to={AppRoute.Login}>Forgot password?</SLink>
    </SLoginForm>
  );
};

export default LoginForm;
