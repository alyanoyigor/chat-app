import React from 'react';
import {
  useGoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { refreshTokenSetup } from '../../utils/utils';
import { CLIENT_ID } from '../../config';
import { LogButton } from '../UI/LogButton';
import GoogleIcon from '../../assets/svg/google.svg';

type LoginProps = {
  setUserInfo: (value: { img: string; name: string }) => void;
};

export const Login = ({ setUserInfo }: LoginProps) => {
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const response = res as GoogleLoginResponse;
    const userInfo = { img: response.profileObj.imageUrl, name: response.profileObj.name };
    setUserInfo(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    refreshTokenSetup(res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId: CLIENT_ID,
    isSignedIn: true,
    accessType: 'offline',
  });

  return <LogButton handleClick={signIn} imgPath={GoogleIcon} imgAlt="google login" />;
};
