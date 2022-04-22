import React from 'react';
import styled from 'styled-components';
import { UserAvatar } from './UserAvatar';
import { SearchContacts } from './SearchContacts';
import DefaultUserImg from '../assets/defaultUserImg.png';
import { Container } from './Container';

const MenuWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ececec;
`;

export const MenuHeader = () => {
  return (
    <MenuWrapper>
      <UserAvatar imgPath={DefaultUserImg} contactName="" />
      <SearchContacts />
    </MenuWrapper>
  );
};
