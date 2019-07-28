import React from 'react';
import Input from './input';
import Button from '../button';

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void;
  searchButton?: string | boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Search: React.FunctionComponent<SearchProps> = (props: SearchProps) => {
  const { onSearch, searchButton, ...rest } = props;
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
          onSearch && onSearch();
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
          onSearch && onSearch();
        }}
      />
    ) : null;

  const inputStyle = !!searchNode
    ? { borderBottomRightRadius: 0, borderTopRightRadius: 0 }
    : {};

  return (
    <Input {...rest} inputAfterNode={searchNode} style={{ ...inputStyle }} />
  );
};

export default Search;
