import React, { useMemo } from 'react';
import { classNames, scopedClassMaker, useControlState } from '../utils';
import './style/pagination.scss';

function pageListGenerator(
  currentPage: number,
  pageSize: number,
  total: number
): Array<number | 'prev' | 'next'> {
  const maxPage = Math.ceil(total / pageSize) || 1;
  const midPageList = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2
  ].reduce<Array<number>>((result, page) => {
    if (page < 1) {
      return [...result, currentPage + 2 + (1 - page)];
    } else if (page > maxPage) {
      return [...result, currentPage - 2 - (page - maxPage)];
    } else {
      return [...result, page];
    }
  }, []);

  return [1, ...midPageList, maxPage]
    .sort((a, b) => a - b)
    .filter(
      (page, index, pageList) =>
        page >= 1 && page <= maxPage && pageList.indexOf(page, 0) === index
    )
    .reduce<Array<number | 'prev' | 'next'>>((result, page) => {
      if (page > (result[result.length - 1] as number) + 1) {
        return [...result, page > currentPage ? 'next' : 'prev', page];
      } else {
        return [...result, page];
      }
    }, []);
}

const sc = scopedClassMaker('algae-ui-pagination');

interface PaginationProps {
  className?: string;
  current?: number;
  pageSize?: number;
  total: number;
  onChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const { className, current, pageSize = 10, total, onChange } = props;
  const [currentPage, setCurrentPage] = useControlState(1, current);
  const pageList = useMemo(() => {
    return pageListGenerator(currentPage, pageSize, total);
  }, [currentPage, pageSize, total]);

  return (
    <div className={classNames(sc('wrapper'), className)}>
      <div className={classNames(sc('page-list'))}>
        {pageList.map((page) =>
          typeof page === 'number' ? (
            <span
              key={page}
              className={classNames(
                sc('page-item'),
                currentPage === page ? 'active' : ''
              )}
              onClick={() => {
                setCurrentPage(page);
                onChange && onChange(page);
              }}
            >
              {page}
            </span>
          ) : (
            <span
              className={classNames(
                sc('page-item-ellipsis'),
                sc(`page-item-${page}`)
              )}
              key={page}
            >
              •••
            </span>
          )
        )}
      </div>
    </div>
  );
};

Pagination.displayName = 'Pagination';
Pagination.defaultProps = {};

export default Pagination;
