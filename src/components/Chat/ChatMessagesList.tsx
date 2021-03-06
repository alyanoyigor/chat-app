import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ContactData } from '../../types/types';
import { ChatMessage } from './ChatMessage';

type ChatMessagesListProps = {
  contactData: ContactData;
};

const MessagesList = styled.div`
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  background-color: #fafafa;
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

export const ChatMessagesList = ({ contactData }: ChatMessagesListProps) => {
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (list.current) list.current.scrollTop = list.current.scrollHeight;
  });

  return (
    <MessagesList ref={list}>
      {contactData.messages.map((message) => (
        <ChatMessage
          key={Math.random()}
          contactName={contactData.name}
          contactImg={contactData.imgPath}
          message={message}
        />
      ))}
    </MessagesList>
  );
};
