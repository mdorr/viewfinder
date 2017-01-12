export const searchPhotos = (term) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos/search',
    term: term
  });
};

export const searchUsers = (term) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users/search',
    term: term
  });
};
