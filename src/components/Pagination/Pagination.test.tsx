/* eslint-disable no-plusplus */
import React from 'react';
import { render, screen, fireEvent } from 'tests';
import Pagination from './Pagination';

const pageClick = jest.fn();

const renderPagesArray = () => {
  const pageButtons = screen.getAllByRole('button', { name: /go to page/i });
  return pageButtons.map((btn) => parseInt(btn.textContent as string, 10));
};

describe('Pagination', () => {
  test('Not renders when total pages count is equal to 0 or 1', () => {
    const { rerender } = render(<Pagination activePage={1} count={0} onPageChange={pageClick} />);
    const paginationZeroPages = screen.queryByRole('navigation', { name: /pagination/i });
    expect(paginationZeroPages).not.toBeInTheDocument();

    rerender(<Pagination activePage={1} count={1} onPageChange={pageClick} />);
    const paginationOnePage = screen.queryByRole('navigation', { name: /pagination/i });
    expect(paginationOnePage).not.toBeInTheDocument();
  });

  test('Not renders when page number is greater than total pages count', () => {
    render(<Pagination activePage={11} count={10} onPageChange={pageClick} />);
    const pagination = screen.queryByRole('navigation', { name: /pagination/i });
    expect(pagination).not.toBeInTheDocument();
  });

  test('Renders properly when page number is less than total pages count', () => {
    render(<Pagination activePage={1} count={10} onPageChange={pageClick} />);
    const pagination = screen.getByRole('navigation', { name: /pagination/i });
    expect(pagination).toBeInTheDocument();
  });

  test('First and Last page buttons are properly disabled', () => {
    const { rerender } = render(<Pagination activePage={1} count={10} onPageChange={pageClick} />);
    const firstPageButton = screen.getByRole('button', { name: /go to first page/i });
    expect(firstPageButton).toBeDisabled();

    rerender(<Pagination activePage={10} count={10} onPageChange={pageClick} />);
    const lastPageButton = screen.getByRole('button', { name: /go to last page/i });
    expect(lastPageButton).toBeDisabled();
  });

  test('Properly displays number of page buttons (total pages count <= 6)', () => {
    const { rerender } = render(<Pagination activePage={1} count={6} onPageChange={pageClick} />);

    for (let i = 2; i <= 6; i++) {
      rerender(<Pagination activePage={1} count={i} onPageChange={pageClick} />);
      expect(renderPagesArray().length).toBe(i);
    }
  });

  test('Properly displays page buttons (total pages count > 6)', () => {
    // Page 1 of 10
    const { rerender } = render(<Pagination activePage={1} count={10} onPageChange={pageClick} />);
    const pageNumbers1 = renderPagesArray();
    expect(pageNumbers1).toEqual([1, 2, 3, 8, 9, 10]);

    // Page 2 of 10
    rerender(<Pagination activePage={2} count={10} onPageChange={pageClick} />);
    const pageNumbers2 = renderPagesArray();
    expect(pageNumbers2).toEqual([1, 2, 3, 8, 9, 10]);

    // Page 3 of 10
    rerender(<Pagination activePage={3} count={10} onPageChange={pageClick} />);
    const pageNumbers3 = renderPagesArray();
    expect(pageNumbers3).toEqual([2, 3, 4, 8, 9, 10]);

    // Page 4 of 10
    rerender(<Pagination activePage={4} count={10} onPageChange={pageClick} />);
    const pageNumbers4 = renderPagesArray();
    expect(pageNumbers4).toEqual([3, 4, 5, 8, 9, 10]);

    // Page 5 of 10
    rerender(<Pagination activePage={5} count={10} onPageChange={pageClick} />);
    const pageNumbers5 = renderPagesArray();
    expect(pageNumbers5).toEqual([4, 5, 6, 8, 9, 10]);

    // Page 6 of 10
    rerender(<Pagination activePage={6} count={10} onPageChange={pageClick} />);
    const pageNumbers6 = renderPagesArray();
    expect(pageNumbers6).toEqual([5, 6, 7, 8, 9, 10]);

    // Page 7 of 10
    rerender(<Pagination activePage={7} count={10} onPageChange={pageClick} />);
    const pageNumbers7 = renderPagesArray();
    expect(pageNumbers7).toEqual([5, 6, 7, 8, 9, 10]);

    // Page 8 of 10
    rerender(<Pagination activePage={8} count={10} onPageChange={pageClick} />);
    const pageNumbers8 = renderPagesArray();
    expect(pageNumbers8).toEqual([5, 6, 7, 8, 9, 10]);

    // Page 9 of 10
    rerender(<Pagination activePage={9} count={10} onPageChange={pageClick} />);
    const pageNumbers9 = renderPagesArray();
    expect(pageNumbers9).toEqual([5, 6, 7, 8, 9, 10]);

    // Page 10 of 10
    rerender(<Pagination activePage={10} count={10} onPageChange={pageClick} />);
    const pageNumbers10 = renderPagesArray();
    expect(pageNumbers10).toEqual([5, 6, 7, 8, 9, 10]);
  });

  test('Click on button gives proper page number', () => {
    render(<Pagination activePage={2} count={10} onPageChange={pageClick} />);
    const firstPageButton = screen.getByRole('button', { name: /go to first page/i });
    const lastPageButton = screen.getByRole('button', { name: /go to last page/i });
    const pageButton2 = screen.getByRole('button', { name: /go to page 2/i });

    fireEvent.click(firstPageButton);
    expect(pageClick).toBeCalledWith(1);

    fireEvent.click(lastPageButton);
    expect(pageClick).toBeCalledWith(10);

    fireEvent.click(pageButton2);
    expect(pageClick).toBeCalledWith(2);
  });
});
