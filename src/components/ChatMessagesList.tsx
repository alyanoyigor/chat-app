import React from 'react';
import { ContactData } from '../types/types';
import { ChatMessage } from './ChatMessage';

type ChatMessagesListProps = {
  contactData: ContactData;
};

export const ChatMessagesList = ({ contactData }: ChatMessagesListProps) => {
  return (
    <div>
      {contactData.messages.map((message) => (
        <ChatMessage
          key={contactData.id}
          contactName={contactData.name}
          contactImg={contactData.imgPath}
          message={message}
        />
      ))}
    </div>
  );
};
