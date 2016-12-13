export const fetchFeed = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/feed',
    data: {
      feed: {
        user_id: userId
      }
    }
  });
};
