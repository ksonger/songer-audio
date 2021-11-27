import { useMemo } from "react";

export const ELLIPSIS_CHAR = "…";

function range(start, end) {
  const length = end - start + 1;
  /*
   * Create an array of a certain length and set the elements within it
   * from start value to end value.
   */
  return Array.from({ length }, (_, index) => index + start);
}

// Adapted from https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
export default function usePagination({
  totalCount,
  perPage,
  siblingCount = 1,
  currentPage,
}) {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / perPage);
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // Defined as siblingCount + firstPage + lastPage + currentPage
    const visiblePageNumbers = siblingCount + 3;

    /*
     * If the number of pages is less than the visible page numbers we want to show,
     * we return the range [1..totalPageCount]
     */
    if (visiblePageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );
    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPageCount - 2;

    if (!showLeftDots && showRightDots) {
      const leftRange = range(1, visiblePageNumbers);

      return [...leftRange, ELLIPSIS_CHAR, totalPageCount];
    }

    if (showLeftDots && !showRightDots) {
      const rightRange = range(
        totalPageCount - visiblePageNumbers + 1,
        totalPageCount
      );
      return [firstPageIndex, ELLIPSIS_CHAR, ...rightRange];
    }

    if (showLeftDots && showRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [
        firstPageIndex,
        ELLIPSIS_CHAR,
        ...middleRange,
        ELLIPSIS_CHAR,
        lastPageIndex,
      ];
    }
  }, [totalCount, perPage, siblingCount, currentPage]);

  return paginationRange;
}
