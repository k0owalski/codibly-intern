import { useMemo } from 'react';

const DOTS = '...';

interface PaginationProps {
  page: number;
  totalPages: number;
  siblingCount: number;
}

const range = (start: number, end: number): string[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => (idx + start).toString());
};

const usePagination = ({ page, totalPages, siblingCount }: PaginationProps) => {
  const paginationRange: string[] = useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(page - siblingCount, 1);
    const rightSiblingIndex = Math.min(page + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPages.toString()];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex.toString(), DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [
        firstPageIndex.toString(),
        DOTS,
        ...middleRange,
        DOTS,
        lastPageIndex.toString(),
      ];
    }

    return [];
  }, [totalPages, siblingCount, page]);

  return paginationRange;
};

export default usePagination;
