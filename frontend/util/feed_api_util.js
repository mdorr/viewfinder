export const fetchFeed = (userId, startTime, amount) => {
  return $.ajax({
    method: 'GET',
    url: 'api/feed',
    data: {
      feed: {
        user_id: userId,
        start_time: startTime,
        amount: amount
      }
    }
  });
};
