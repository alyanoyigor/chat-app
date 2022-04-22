import React from 'react';
import styled from 'styled-components';
import { contactsData } from '../data/contactsData';
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

export const ChatUserInfo = () => {
  const data = contactsData[0];
  return (
    <ChatUserInfoWrapper>
      <UserAvatar imgPath={data.imgPath} contactName={data.name} />
      <UserName>{data.name}</UserName>
    </ChatUserInfoWrapper>
  );
};
