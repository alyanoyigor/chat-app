import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Container } from '../UI/Container';
import { UserAvatar } from '../UI/UserAvatar';
import ArrowIconSVG from '../../assets/svg/arrow-left.svg';

const UserName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const ChatUserInfoWrapper = styled(Container)`
  display: flex;
  align-items: stretch;
  gap: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ececec;
`;

const ArrowIcon = styled.div`
  width: 64px;
  height: 64px;
  cursor: pointer;
  background-image: url(${ArrowIconSVG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 32px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

type ChatUserInfoProps = {
  contactName: string;
  contactImg: string;
  setIsMenuHidden: (value: boolean) => void;
  setIsChatHidden: (value: boolean) => void;
};

export const ChatUserInfo = ({
  contactName,
  contactImg,
  setIsMenuHidden,
  setIsChatHidden,
}: ChatUserInfoProps) => {
  const dispatch = useDispatch();
  return (
    <ChatUserInfoWrapper>
      {window.innerWidth < 768 && (
        <ArrowIcon
          onClick={() => {
            setIsMenuHidden(false);
            setIsChatHidden(true);
            dispatch({ type: 'SET_USER_ID', payload: '' });
          }}
        />
      )}
      <UserInfo>
        <UserAvatar imgPath={contactImg} contactName={contactName} />
        <UserName>{contactName}</UserName>
      </UserInfo>
    </ChatUserInfoWrapper>
  );
};
