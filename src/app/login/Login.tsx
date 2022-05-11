import React from 'react';
import { LoginForm } from 'components';
import { AuthTemplate } from 'components/templates';
import { usePageTitle } from 'hooks/usePageTitle';

export const Login = () => {
  usePageTitle('Join TSH - Login');
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};
