import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

export const convertDate = (
  date: string,
  monthOptions: Intl.DateTimeFormatOptions = { month: 'short' },
  yearOptions: Intl.DateTimeFormatOptions = { year: 'numeric' }
) => {
  const month = new Date(date).toLocaleString('en-US', monthOptions);
  const day = new Date(date).toLocaleString('en-US', { day: '2-digit' });
  const year = new Date(date).toLocaleString('en-US', yearOptions);
  const time = new Date(date).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return { month, day, year, time };
};

export const refreshTokenSetup = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  const response = res as GoogleLoginResponse;
  let refreshTiming = (response.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await response.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    localStorage.setItem('authToken', newAuthRes.id_token);
    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};
