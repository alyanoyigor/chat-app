import React from 'react';
import styled from 'styled-components';
import { ContactsList } from './ContactsList';
import { MenuHeader } from './MenuHeader';

const MenuContactsWrapper = styled.div`
  border: 1px solid #ececec;
`;

export const MenuContacts = () => {
  return (
    <MenuContactsWrapper>
      <MenuHeader />
      <ContactsList />
    </MenuContactsWrapper>
  );
};
