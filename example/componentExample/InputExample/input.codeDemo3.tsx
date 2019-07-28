import React, { useState } from 'react';
import { Search } from 'ROOT/src';

export default () => {
  const [value1, setValue1] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  return (
    <div className="input-example-list">
      <Search
        placeholder="search input"
        searchButton="Search"
        value={value1}
        onChange={(e) => {
          setValue1(e.currentTarget.value);
        }}
        onSearch={() => {
          console.log(value1);
        }}
      />
      <br />
      <br />
      <Search
        placeholder="search input"
        searchButton
        value={value2}
        onChange={(e) => {
          setValue2(e.currentTarget.value);
        }}
        onSearch={() => {
          console.log(value2);
        }}
      />
    </div>
  );
};
