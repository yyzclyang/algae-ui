import React from 'react';
import { Pagination } from 'algae-ui';

export default () => {
  return (
    <div className="pagination-list">
      <Pagination
        pageSize={10}
        total={50}
        onChange={(page) => {
          console.log(page);
        }}
      />
    </div>
  );
};
