/* eslint-disable import/no-extraneous-dependencies */
// see https://testing-library.com/docs/react-testing-library/setup#custom-render
import React, { ReactNode } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'providers/ThemeProvider';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Queries } from '@testing-library/dom';

const queryClient = new QueryClient();

const Wrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider>{children}</ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
};

function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options: RenderOptions<Q>
): RenderResult<Q>;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options?: RenderOptions<Q> | Omit<RenderOptions, 'queries'>
): RenderResult<Q> | RenderResult {
  return render<Q>(ui, { wrapper: options?.wrapper ?? Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
