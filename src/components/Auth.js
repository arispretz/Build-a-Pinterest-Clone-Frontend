import React from 'react';

const Auth = ({ user }) => {
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}</p>
          <a href="/auth/logout">Logout</a>
        </div>
      ) : (
        <a href="/auth/github">Login with GitHub</a>
      )}
    </div>
  );
};

export default Auth;
