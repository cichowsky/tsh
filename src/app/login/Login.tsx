import React from 'react';
import { LoginForm } from 'components';
import { AuthTemplate } from 'components/templates';

export const Login = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};
