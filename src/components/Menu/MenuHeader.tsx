import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserAvatar } from '../UI/UserAvatar';
import { SearchContacts } from './SearchContacts';
import DefaultUserImg from '../../assets/defaultUserImg.png';
import { Container } from '../UI/Container';
import { Login } from '../Auth/Login';
import { Logout } from '../Auth/Logout';

const MenuWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ececec;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MenuHeader = () => {
  const [userInfo, setUserInfo] = useState<{ img: string; name: string }>();
  useEffect(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
    }
  }, []);
  return (
    <MenuWrapper>
      <AvatarContainer>
        <UserAvatar
          imgPath={userInfo?.img || DefaultUserImg}
          contactName={userInfo?.name || 'Anonym'}
        />
        {!userInfo ? <Login setUserInfo={setUserInfo} /> : <Logout setUserInfo={setUserInfo} />}
      </AvatarContainer>
      <SearchContacts />
    </MenuWrapper>
  );
};
