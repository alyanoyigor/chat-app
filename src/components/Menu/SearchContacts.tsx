import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import SearchIcon from '../../assets/svg/search.svg';

const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  border-radius: 24px;
  border: 1px solid #ececec;
  width: 100%;
  outline: none;
  background-color: #fafafa;
  background-image: url(${SearchIcon});
  background-position: 12px;
  background-repeat: no-repeat;
  background-size: 16px;
  padding: 12px 12px 12px 40px;
`;

export const SearchContacts = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    dispatch({ type: 'SET_SEARCH_CONTACT_VALUE', payload: e.target.value });
  };

  return (
    <SearchInput
      type="text"
      placeholder="Search or start new chat"
      value={searchValue}
      onChange={handleChangeSearchValue}
    />
  );
};
