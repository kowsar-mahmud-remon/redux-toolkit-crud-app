import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className='nev-link'>Home</Link>
      <Link to='/show-books' className='nev-link'>Show Books</Link>
      <Link to='/add-book' className='nev-link'>Add Book</Link>
    </nav>
  );
};

export default Navbar;