export const followUser = (follow) => {
  return $.ajax({
    method: 'POST',
    url: `/api/follows`,
    data: follow
  });
};

export const unfollowUser = (unfollow) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/follows`,
    data: unfollow
  });
};
