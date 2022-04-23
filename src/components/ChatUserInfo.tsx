import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { UserAvatar } from './UserAvatar';

const UserName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const ChatUserInfoWrapper = styled(Container)`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ececec;
`;

type ChatUserInfoProps = {
  contactName: string;
  contactImg: string;
};

export const ChatUserInfo = ({ contactName, contactImg }: ChatUserInfoProps) => {
  return (
    <ChatUserInfoWrapper>
      <UserAvatar imgPath={contactImg} contactName={contactName} />
      <UserName>{contactName}</UserName>
    </ChatUserInfoWrapper>
  );
};
