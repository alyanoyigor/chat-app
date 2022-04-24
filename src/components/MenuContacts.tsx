import React, { useState } from 'react';
import styled from 'styled-components';
import { ContactsList } from './ContactsList';
import { MenuHeader } from './MenuHeader';

const MenuContactsWrapper = styled.div`
  border: 1px solid #ececec;
  height: 100vh;
  display: ${(props: { isMenuHidden: boolean }) => (props.isMenuHidden ? 'none' : 'grid')};
  grid-area: 'menu';
  grid-template-rows: 1fr 5fr;
`;

type MenuContactsProps = {
  isMenuHidden: boolean;
  setIsMenuHidden: (value: boolean) => void;
  setIsChatHidden: (value: boolean) => void;
};

export const MenuContacts = ({
  isMenuHidden,
  setIsMenuHidden,
  setIsChatHidden,
}: MenuContactsProps) => {
  return (
    <MenuContactsWrapper isMenuHidden={isMenuHidden}>
      <MenuHeader />
      <ContactsList
        handleHideMenu={() => {
          setIsMenuHidden(true);
          setIsChatHidden(false);
        }}
      />
    </MenuContactsWrapper>
  );
};
