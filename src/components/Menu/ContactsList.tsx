import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { State } from '../../types/types';
import { ContactItem } from './ContactItem';
import { Container } from '../UI/Container';

const ListTitle = styled(Container)`
  color: #4ea5cf;
  font-size: 24px;
  font-weight: 600;
  padding-top: 32px;
  padding-bottom: 48px;
`;

const Wrapper = styled.div`
  overflow: auto;

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
  }
`;

type ContactsListProps = {
  handleHideMenu: () => void;
};

export const ContactsList = ({ handleHideMenu }: ContactsListProps) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: State) => state.searchContactValue);
  let contactsData = useSelector((state: State) => state.contactsData);
  if (searchValue) {
    contactsData = contactsData.filter((contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const handleSelectContactChat = (event: React.MouseEvent<HTMLElement>) => {
    const { target } = event;
    if (target instanceof HTMLElement) {
      const contactItem: HTMLElement | null = target.closest('.contact-item');
      if (contactItem && contactItem.dataset.userid) {
        dispatch({ type: 'SET_USER_ID', payload: contactItem.dataset.userid });
        const contact = contactsData.find(
          (contactData) => contactData.id === Number(contactItem.dataset.userid)
        );
        if (contact && contact.messages[contact.messages.length - 1]?.isRead === false) {
          dispatch({ type: 'SET_READ_MESSAGES', payload: contactItem.dataset.userid });
        }
        if (window.innerWidth < 768) {
          handleHideMenu();
        }
      }
    }
  };

  return (
    <Wrapper onClick={handleSelectContactChat}>
      <ListTitle>Chats</ListTitle>
      {contactsData.length ? (
        contactsData.map((contact) => (
          <ContactItem
            lastMessage={contact.messages[contact.messages.length - 1]}
            key={contact.id}
            name={contact.name}
            img={contact.imgPath}
            id={contact.id}
          />
        ))
      ) : (
        <Container>
          <h2>No contacts found</h2>
        </Container>
      )}
    </Wrapper>
  );
};
