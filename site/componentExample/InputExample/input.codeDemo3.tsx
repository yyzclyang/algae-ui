import React from 'react';
import { Search } from 'algae-ui';

export default () => {
  return (
    <div className="input-example-list">
      <Search
        placeholder="search input"
        searchButton="Search"
        onSearch={(value) => {
          console.log(value);
        }}
      />
      <br />
      <br />
      <Search
        placeholder="search input"
        searchButton
        onSearch={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
};
