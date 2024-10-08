const getUserInfo = async ({ queryKey }) => {
  const userHandle = queryKey[1];
  const response = await fetch(
    `https://alfa-leetcode-api.onrender.com/${userHandle}/`
  );

  return response.json();
};

export default getUserInfo;
