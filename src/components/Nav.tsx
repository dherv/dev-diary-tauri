import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, ViewGridAddIcon } from '@heroicons/react/outline';

export const Nav: FC = () => {
  return (
    <aside className="fixed bg-gray-200 p-2 h-screen">
      <Link to="/">
        <MenuIcon className="h-6 w-6 text-teal-600 mb-4 cursor-pointer" />
      </Link>

      <Link to="/add">
        <ViewGridAddIcon className="h-6 w-6 text-teal-600 cursor-pointer" />
      </Link>
    </aside>
  );
};
