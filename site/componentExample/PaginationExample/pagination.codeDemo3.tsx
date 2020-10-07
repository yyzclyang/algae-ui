import React, { useState } from 'react';
import { Pagination } from 'algae-ui';

export default () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="pagination-list">
      <Pagination
        pageSize={10}
        total={50}
        current={currentPage}
        onChange={(page) => {
          setCurrentPage(page);
          console.log(page);
        }}
      />
    </div>
  );
};
