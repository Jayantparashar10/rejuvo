import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Rejuvo
        </Link>
        <div className="space-x-4">
          <Link to="/goals" className="hover:text-blue-200">
            Goals
          </Link>
          <Link to="/habits" className="hover:text-blue-200">
            Habits
          </Link>
          <Link to="/journal" className="hover:text-blue-200">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;