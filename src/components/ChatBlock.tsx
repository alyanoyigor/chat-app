import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ContactData, State } from '../types/types';
import { ChatField } from './ChatField';
import { ChatMessagesList } from './ChatMessagesList';
import { ChatUserInfo } from './ChatUserInfo';

const ChatContainer = styled.div`
  display: ${(props: { isChatHidden: boolean }) => (props.isChatHidden ? 'none' : 'grid')};
  grid-area: 'chat';
  height: 100vh;
  grid-template-rows: 1fr 5fr 1fr;
  @media only screen and (min-width: 768px) {
    display: grid;
  }
`;

type ChatBlockProps = {
  isChatHidden: boolean;
  setIsMenuHidden: (value: boolean) => void;
  setIsChatHidden: (value: boolean) => void;
};

export const ChatBlock = ({ isChatHidden, setIsMenuHidden, setIsChatHidden }: ChatBlockProps) => {
  const { selectedUserId, contactsData } = useSelector((state: State) => state);
  const selectedContactData: ContactData | undefined = contactsData.find(
    (contact) => contact.id === Number(selectedUserId)
  );

  return (
    <ChatContainer isChatHidden={isChatHidden}>
      {selectedContactData && (
        <>
          <ChatUserInfo
            contactName={selectedContactData.name}
            contactImg={selectedContactData.imgPath}
            setIsMenuHidden={setIsMenuHidden}
            setIsChatHidden={setIsChatHidden}
          />
          <ChatMessagesList contactData={selectedContactData} />
          <ChatField />
        </>
      )}
    </ChatContainer>
  );
};
