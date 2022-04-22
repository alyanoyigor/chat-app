import React from 'react';
import styled from 'styled-components';
import FailIcon from '../assets/svg/fail.svg';
import SuccessIcon from '../assets/svg/success.svg';

type UserAvatarProps = {
  imgPath: string;
  contactName: string;
  isFamiliar?: boolean;
};

const Icon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
`;

const UserImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
`;

export const UserAvatar = ({ imgPath, contactName, isFamiliar }: UserAvatarProps) => {
  return (
    <AvatarWrapper>
      <UserImg src={imgPath} alt={contactName} />
      {isFamiliar ? <Icon src={SuccessIcon} alt="" /> : <Icon src={FailIcon} alt="" />}
    </AvatarWrapper>
  );
};

UserAvatar.defaultProps = {
  isFamiliar: true,
};
