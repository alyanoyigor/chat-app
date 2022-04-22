import React from 'react';
import styled from 'styled-components';
import { contactsData } from '../data/contactsData';
import { convertDate } from '../utils/utils';
import { Container } from './Container';
import { UserAvatar } from './UserAvatar';

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

export const ChatMessage = () => {
  const data = contactsData[0];
  const date = convertDate(data.messages[0].date, { month: '2-digit' }, { year: '2-digit' });
  return (
    <MessageContainer isFromMe={data.messages[0].isFromMe}>
      {!data.messages[0].isFromMe && (
        <UserAvatar imgPath={data.imgPath} contactName={data.name} isRead={false} imgSize="48" />
      )}
      <MessageInfoWrapper>
        <MessageText isFromMe={data.messages[0].isFromMe}>{data.messages[0].text}</MessageText>
        <MessageDate>
          {date.month}/{date.day}/{date.year}, {date.time}
        </MessageDate>
      </MessageInfoWrapper>
    </MessageContainer>
  );
};
