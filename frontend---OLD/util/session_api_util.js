export const signup = (newUser) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user: { username: newUser.username, password: newUser.password }}
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { session: { username: user.username, password: user.password }}
  })
);

export const logout = () => {
  debugger
  return (
    $.ajax({
      method: 'DELETE',
      url: 'api/session'
    })
  );
};
