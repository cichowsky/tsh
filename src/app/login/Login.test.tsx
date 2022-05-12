import React from 'react';

import { render } from 'tests';

import { Login } from './Login';

describe('Login', () => {
  test('Displays all information', async () => {
    const { getByText, getByLabelText } = render(<Login />);

    expect(getByText(/login/i)).toBeInTheDocument();
    expect(getByLabelText(/username/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
  });
});
