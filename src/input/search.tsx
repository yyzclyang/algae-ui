import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import Button from '../button';

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (arg: string) => void;
  searchButton?: string | boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Search: React.FunctionComponent<SearchProps> = (props: SearchProps) => {
  const { onSearch, searchButton, value, onChange, ...rest } = props;
  const [inputValue, setInputValue] = useState<string>('');
  const searchNode =
    typeof searchButton === 'string' ? (
      <Button
        buttonType="primary"
        style={{
          margin: 0,
          marginLeft: '-1px',
          height: '100%',
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0
        }}
        onClick={() => {
          onSearch && onSearch(inputValue);
        }}
      >
        {searchButton}
      </Button>
    ) : searchButton ? (
      <Button
        buttonType="primary"
        icon="search"
        style={{
          margin: 0,
          marginLeft: '-1px',
          height: '100%',
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0
        }}
        onClick={() => {
          onSearch && onSearch(inputValue);
        }}
      />
    ) : null;

  const inputStyle = !!searchNode
    ? { borderBottomRightRadius: 0, borderTopRightRadius: 0 }
    : {};

  const inputOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.currentTarget.value);
    onChange && onChange(e);
  };

  return (
    <Input
      value={inputValue}
      onChange={inputOnChange}
      inputAfterNode={searchNode}
      style={{ ...inputStyle }}
      {...rest}
    />
  );
};

Search.displayName = 'Search';

Search.prototype = {
  onSearch: PropTypes.func,
  searchButton: PropTypes.oneOf([PropTypes.bool, PropTypes.string]),
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Search;
