import React from 'react';
import styled from 'styled-components';
import { ContactsList } from './ContactsList';
import { MenuHeader } from './MenuHeader';

const MenuContactsWrapper = styled.div`
  border: 1px solid #ececec;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 5fr;
`;

export const MenuContacts = () => {
  return (
    <MenuContactsWrapper>
      <MenuHeader />
      <ContactsList />
    </MenuContactsWrapper>
  );
};
