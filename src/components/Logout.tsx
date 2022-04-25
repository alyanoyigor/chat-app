import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { CLIENT_ID } from '../config';
import { LogButton } from './LogButton';
import LogoutIcon from '../assets/svg/logout.svg';

type LogoutProps = {
  setUserInfo: (value?: { img: string; name: string }) => void;
};

export const Logout = ({ setUserInfo }: LogoutProps) => {
  const onLogoutSuccess = () => {
    localStorage.removeItem('userInfo');
    setUserInfo();
  };

  const { signOut } = useGoogleLogout({
    clientId: CLIENT_ID,
    onLogoutSuccess,
  });

  return <LogButton handleClick={signOut} imgPath={LogoutIcon} imgAlt="google logout" />;
};
