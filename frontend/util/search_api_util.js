export const searchPhotos = (term) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos/search',
    data: {
      search: {
        term: term
      }
    }
  });
};

export const searchUsers = (term) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users/search',
    data: {
      search: {
        term: term
      }
    }
  });
};
