export const fetchUserDetails = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    dataType: 'json',
    contentType: false,
    processData: false,
    data: user
  });
};

export const fetchUserPhotos = (userId) => {
  return $.ajax({
      method: 'GET',
      url: `api/users/${userId}/photos`
  });
};
