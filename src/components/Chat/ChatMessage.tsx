import React from 'react';
import styled from 'styled-components';
import { ChatMessageData } from '../../types/types';
import { convertDate } from '../../utils/utils';
import { Container } from '../UI/Container';
import { UserAvatar } from '../UI/UserAvatar';

const MessageContainer = styled(Container)`
  display: flex;
  justify-content: ${(props: { isFromMe: boolean }) =>
    props.isFromMe ? 'flex-end' : 'flex-start'};
  gap: 8px;
`;

const MessageText = styled.p`
  padding: 12px;
  margin: 0;
  height: 100%;
  border-radius: 24px;
  background-color: ${(props: { isFromMe: boolean }) => (props.isFromMe ? '#E0E0E0' : '#3C4250')};
  color: ${(props: { isFromMe: boolean }) => (props.isFromMe ? '#555555' : '#fafafa')};
`;

const MessageDate = styled.span`
  font-size: 12px;
  color: #919191;
  padding: 12px;
`;

const MessageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type ChatMessageProps = {
  contactName: string;
  contactImg: string;
  message: ChatMessageData;
};

export const ChatMessage = ({ contactName, contactImg, message }: ChatMessageProps) => {
  const date = convertDate(message.date, { month: '2-digit' }, { year: '2-digit' });
  return (
    <MessageContainer isFromMe={message.isFromMe}>
      {!message.isFromMe && (
        <UserAvatar imgPath={contactImg} contactName={contactName} isRead={false} imgSize="48" />
      )}
      <MessageInfoWrapper>
        <MessageText isFromMe={message.isFromMe}>{message.text}</MessageText>
        <MessageDate>
          {date.month}/{date.day}/{date.year}, {date.time}
        </MessageDate>
      </MessageInfoWrapper>
    </MessageContainer>
  );
};
