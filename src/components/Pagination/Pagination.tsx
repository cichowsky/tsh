import React, { useState, useEffect } from 'react';
import { StyledPagination, StyledButton, StyledPages, StyledBreak } from './Pagination.styles';

type PaginationProps = {
  activePage?: number;
  count: number;
  onPageChange?: (page: number) => void;
};

const Pagination = ({ activePage = 1, count, onPageChange }: PaginationProps) => {
  const [active, setActive] = useState(activePage);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    if (count <= 6) setPages(Array.from({ length: count }, (_, i) => i + 1));

    if (count > 6) {
      if ([1, 2].includes(active)) {
        setPages([1, 2, 3, 0, count - 2, count - 1, count]);
      }

      if (active >= 3 && active < count - 4) {
        setPages([active - 1, active, active + 1, 0, count - 2, count - 1, count]);
      }

      if (active >= count - 4) {
        setPages([0, count - 5, count - 4, count - 3, count - 2, count - 1, count]);
      }
    }
  }, [active, count]);

  const hadlePageClick = (page: number) => {
    if (typeof onPageChange !== 'undefined') onPageChange(page);
    setActive(page); // wait with change to load new data?
  };

  if (pages.length <= 1 || count === 0) return null;

  if (active > count) {
    throw new Error(`Active page number ${active} is greater than page count ${count}!`);
  }

  return (
    <StyledPagination role="navigation" aria-label="pagination">
      <StyledButton
        disabled={active === 1}
        aria-label="go to first page"
        onClick={() => hadlePageClick(1)}
      >
        First
      </StyledButton>

      <StyledPages>
        {pages?.map((page) => {
          if (page === 0) return <StyledBreak key={page}>...</StyledBreak>;

          return (
            <StyledButton
              key={page}
              isActive={active === page}
              aria-label={`go to page ${page}`}
              onClick={() => hadlePageClick(page)}
            >
              {page}
            </StyledButton>
          );
        })}
      </StyledPages>
      <StyledButton
        disabled={active === count}
        aria-label="go to last page"
        onClick={() => hadlePageClick(count)}
      >
        Last
      </StyledButton>
    </StyledPagination>
  );
};

export default Pagination;
