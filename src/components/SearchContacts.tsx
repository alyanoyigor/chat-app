import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/svg/search.svg';

const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  border-radius: 24px;
  border: 1px solid #ececec;
  width: 100%;
  outline: none;
  background: url(${SearchIcon}) no-repeat scroll 12px;
  background-color: #fafafa;
  background-size: 16px;
  padding: 12px 12px 12px 40px;
`;

export const SearchContacts = () => {
  return <SearchInput type="text" placeholder="Search or start new chat" />;
};
