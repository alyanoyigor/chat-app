import React from 'react';
import styled from 'styled-components';
import { contactsData } from '../data/contactsData';
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
  return (
    <Wrapper>
      <ListTitle>Chats</ListTitle>
      {contactsData.map((contact) => (
        <ContactItem
          lastMessage={contact.messages[contact.messages.length - 1]}
          name={contact.name}
          img={contact.imgPath}
          key={contact.id}
        />
      ))}
    </Wrapper>
  );
};
