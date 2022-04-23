import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { State } from '../types/types';
import { ContactItem } from './ContactItem';
import { Container } from './Container';

const ListTitle = styled(Container)`
  color: #4ea5cf;
  font-size: 24px;
  font-weight: 600;
  padding-top: 32px;
  padding-bottom: 48px;
`;

const Wrapper = styled.div`
  overflow: auto;
`;

export const ContactsList = () => {
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
            name={contact.name}
            img={contact.imgPath}
            key={contact.id}
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
