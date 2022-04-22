import React from 'react';
import styled from 'styled-components';
import SuccessIcon from '../assets/svg/success.svg';

type UserAvatarProps = {
  imgPath: string;
  contactName: string;
  isRead?: boolean;
  imgSize?: string;
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
  display: inline-block;
  width: ${(props: { imgSize?: string }) => props.imgSize}px;
  height: ${(props: { imgSize?: string }) => props.imgSize}px;
  flex-shrink: 0;
`;

export const UserAvatar = ({ imgPath, contactName, isRead, imgSize }: UserAvatarProps) => {
  return (
    <AvatarWrapper imgSize={imgSize}>
      <UserImg src={imgPath} alt={contactName} />
      {isRead && <Icon src={SuccessIcon} alt="" />}
    </AvatarWrapper>
  );
};

UserAvatar.defaultProps = {
  isRead: true,
  imgSize: '64',
};
