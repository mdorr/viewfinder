export const uploadPhoto = (photo) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: photo
  });
};

export const getPhoto = (photo_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${photo_id}`
  });
};
