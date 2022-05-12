import React from 'react';

import { render } from 'tests';

import { Products } from './Products';

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByRole } = render(<Products />);

    expect(getByRole('banner')).toBeInTheDocument();
  });
});
