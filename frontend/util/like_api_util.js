export const likePhoto = (likeData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: likeData
  });
};

export const unlikePhoto = (likeData) => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/likes',
    data: likeData
  });
};
