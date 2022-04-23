import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ContactData, State } from '../types/types';
import { ChatField } from './ChatField';
import { ChatMessagesList } from './ChatMessagesList';
import { ChatUserInfo } from './ChatUserInfo';

const ChatContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
`;

export const ChatBlock = () => {
  const { selectedUserId, contactsData } = useSelector((state: State) => state);
  const selectedContactData: ContactData | undefined = contactsData.find(
    (contact) => contact.id === Number(selectedUserId)
  );

  return (
    <ChatContainer>
      {selectedContactData && (
        <>
          <ChatUserInfo
            contactName={selectedContactData.name}
            contactImg={selectedContactData.imgPath}
          />
          <ChatMessagesList contactData={selectedContactData} />
          <ChatField />
        </>
      )}
    </ChatContainer>
  );
};
