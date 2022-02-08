import { FC } from 'react';
import { Nav } from './Nav';

export const Template: FC = ({ children }) => {
  return (
    <main className="flex">
      <Nav />
      <div className="w-full my-20 mx-40">{children}</div>
    </main>
  );
};
