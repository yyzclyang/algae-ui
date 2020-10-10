import React, { useCallback, useMemo } from 'react';
import { classNames, scopedClassMaker, useControlState } from '../utils';

function pageListGenerator(
  currentPage: number,
  maxPage: number
): Array<number | 'prev' | 'next'> {
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
  disable?: boolean;
  current?: number;
  pageSize?: number;
  total: number;
  onChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const { className, disable, current, pageSize = 10, total, onChange } = props;
  const maxPage = Math.ceil(total / pageSize) || 1;
  const getTruePage = useCallback(
    (page: number) => {
      return page < 1 ? 1 : page > maxPage ? maxPage : page;
    },
    [maxPage]
  );
  const [currentPage, setCurrentPage] = useControlState(
    1,
    current === undefined ? undefined : getTruePage(current)
  );
  const pageList = useMemo(() => {
    return pageListGenerator(currentPage, maxPage);
  }, [currentPage, maxPage]);

  const setPage = useCallback(
    (page: number) => {
      const truePage = getTruePage(page);
      if (truePage === currentPage || disable) {
        return;
      }
      setCurrentPage(truePage);
      onChange && onChange(truePage);
    },
    [disable, currentPage, maxPage, onChange, getTruePage]
  );

  return (
    <div className={classNames(sc('wrapper'), className)}>
      <div className={classNames(sc('page-list'))}>
        {maxPage > 1 && (
          <span
            className={classNames(
              sc('page-item'),
              sc('page-item-action'),
              sc('page-item-action-left'),
              disable || currentPage === 1
                ? sc('page-item-disable')
                : sc('page-item-able')
            )}
            onClick={() => {
              setPage(currentPage - 1);
            }}
          >
            &lt;
          </span>
        )}
        {pageList.map((page) =>
          typeof page === 'number' ? (
            <span
              key={page}
              className={classNames(
                sc('page-item'),
                sc('page-item-normal'),
                disable ? sc('page-item-disable') : sc('page-item-able'),
                sc(`page-item-${page}`),
                currentPage === page ? 'active' : ''
              )}
              onClick={() => {
                setPage(page);
              }}
            >
              {page}
            </span>
          ) : (
            <span
              className={classNames(
                sc('page-item'),
                sc('page-item-ellipsis'),
                disable ? sc('page-item-disable') : sc('page-item-able'),
                sc(`page-item-ellipsis-${page}`)
              )}
              key={page}
              onClick={() => {
                const nextPage = currentPage + 5 * (page === 'next' ? 1 : -1);
                setPage(nextPage);
              }}
            >
              •••
            </span>
          )
        )}
        {maxPage > 1 && (
          <span
            className={classNames(
              sc('page-item'),
              sc('page-item-action'),
              sc('page-item-action-right'),
              disable || currentPage === maxPage
                ? sc('page-item-disable')
                : sc('page-item-able')
            )}
            onClick={() => {
              setPage(currentPage + 1);
            }}
          >
            &gt;
          </span>
        )}
      </div>
    </div>
  );
};

Pagination.displayName = 'Pagination';
Pagination.defaultProps = {};

export default Pagination;
