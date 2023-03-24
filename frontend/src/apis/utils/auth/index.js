import { authInstance, defaultInstance } from 'apis/utils/index';

export const login = async (provider, code) => {
  try {
    const res = await defaultInstance.get(`user/login/${provider}?code=${code}`);
    const accessToken = res.data.tokenDto.accessToken;
    const refreshToken = res.data.tokenDto.refreshToken;
    const userInfo = res.data.userDto;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('isLogin', true);
    localStorage.setItem(
      'user',
      JSON.stringify({
        userId: userInfo.userId,
        userName: userInfo.username,
        userEmail: userInfo.email,
        profileImageUrl: userInfo.profileImageUrl,
        shelterId: userInfo.shelterId,
      })
    );
  } catch (e) {}
};

export const logout = async () => {
  const refresh = localStorage.getItem('refreshToken');
  const access = localStorage.getItem('accessToken');
  const res = await authInstance.get(`user/logout`, {
    headers: {
      RefreshToken: `Bearer ${refresh}`,
      AccessToken: `Bearer ${access}`,
    },
  });

  if (res.data.message === 'SUCCESS') {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('user');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
  }
};
