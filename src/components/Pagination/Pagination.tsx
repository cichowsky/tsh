import React from 'react';
import { SPagination, SButton, SPages, SBreak } from './Pagination.styles';

type PaginationProps = {
  activePage: number;
  count: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ activePage = 1, count = 0, onPageChange }: PaginationProps) => {
  let pages: number[] = [];

  if (count <= 6) pages = Array.from({ length: count }, (_, i) => i + 1);
  else {
    if ([1, 2].includes(activePage)) {
      pages = [1, 2, 3, 0, count - 2, count - 1, count];
    }

    if (activePage >= 3 && activePage < count - 4) {
      pages = [activePage - 1, activePage, activePage + 1, 0, count - 2, count - 1, count];
    }

    if (activePage >= count - 4) {
      pages = [0, count - 5, count - 4, count - 3, count - 2, count - 1, count];
    }
  }

  const hadlePageClick = (page: number) => {
    if (typeof onPageChange !== 'undefined') onPageChange(page);
  };

  if (pages.length <= 1 || count === 0 || activePage > count) return null;

  return (
    <SPagination role="navigation" aria-label="pagination">
      <SButton
        disabled={activePage === 1}
        aria-label="go to first page"
        onClick={() => hadlePageClick(1)}
      >
        First
      </SButton>

      <SPages>
        {pages?.map((page) => {
          if (page === 0) return <SBreak key={page}>...</SBreak>;

          return (
            <SButton
              key={page}
              isActive={activePage === page}
              aria-label={`go to page ${page}`}
              onClick={() => hadlePageClick(page)}
            >
              {page}
            </SButton>
          );
        })}
      </SPages>
      <SButton
        disabled={activePage === count}
        aria-label="go to last page"
        onClick={() => hadlePageClick(count)}
      >
        Last
      </SButton>
    </SPagination>
  );
};

export default React.memo(Pagination);
