export const fetchFeed = (userId, maxId, amount) => {
  return $.ajax({
    method: 'GET',
    url: 'api/feed',
    data: {
      feed: {
        user_id: userId,
        max_id: maxId,
        amount: amount
      }
    }
  });
};
