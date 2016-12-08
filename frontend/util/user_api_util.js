export const fetchUserDetails = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
};
