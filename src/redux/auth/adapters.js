export const dataToUserInfoAdapter = (responseData) => {
  const userInfo = {
    email: responseData[`email`],
    avatar: responseData[`avatar_url`],
  };
  return userInfo;
};
