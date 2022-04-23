import React from 'react';
import styled from 'styled-components';
import { ChatField } from './ChatField';
import { ChatMessagesList } from './ChatMessagesList';
import { ChatUserInfo } from './ChatUserInfo';

const ChatContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
`;

export const ChatBlock = () => {
  return (
    <ChatContainer>
      <ChatUserInfo />
      {/* <ChatMessagesList /> */}
      <ChatField />
    </ChatContainer>
  );
};
