import React from 'react';
import styled from 'styled-components';
import { ChatMessageData } from '../types/types';
import { convertDate } from '../utils/utils';
import { Container } from './Container';
import { UserAvatar } from './UserAvatar';

type ContactItemProps = {
  img: string;
  name: string;
  id: number;
  isReadLastMessage?: boolean;
  lastMessage?: ChatMessageData;
};

const UserNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

const ContactItemWrapper = styled(Container)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #ececec;
  position: relative;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 16px;
`;

const MessageText = styled.p`
  margin: 0;
  color: #a0a0a0;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
  white-space: nowrap;
`;

const MessageDate = styled.p`
  color: #6b6b6b;
  margin: 0;
  font-size: 14px;
  flex-shrink: 0;
`;

const UnreadMessageCircle = styled.span`
  position: absolute;
  bottom: 16px;
  right: 16px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: #2b3ee9;
`;

export const ContactItem = ({
  img,
  name,
  id,
  isReadLastMessage,
  lastMessage,
}: ContactItemProps) => {
  let date: string | undefined;
  let message = 'Say "Hi" to your contact';
  if (lastMessage) {
    const dateObject = convertDate(lastMessage.date);
    date = `${dateObject.month} ${dateObject.day}, ${dateObject.year}`;
    message = lastMessage.text;
  }

  return (
    <ContactItemWrapper data-userid={id} className="contact-item">
      <UserInfo>
        <UserAvatar imgPath={img} contactName={name} />
        <UserNameWrapper>
          <UserName>{name}</UserName>
          <MessageText>{message}</MessageText>
        </UserNameWrapper>
      </UserInfo>
      {date && <MessageDate>{date}</MessageDate>}
      {isReadLastMessage === false && <UnreadMessageCircle />}
    </ContactItemWrapper>
  );
};
