export const userDetails = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`,
    data: userDetails
  });
};
