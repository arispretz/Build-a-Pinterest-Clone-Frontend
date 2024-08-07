import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => (
  <nav>
    <Link to="/">Home</Link>
    {user ? (
      <>
        <Link to={`/user/${user._id}`}>My Wall</Link>
        <a href="/auth/logout">Logout</a>
      </>
    ) : (
      <a href="/auth/github">Login with GitHub</a>
    )}
  </nav>
);

export default Navbar;
