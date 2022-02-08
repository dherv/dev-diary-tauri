import { FC } from 'react';
import { Months } from '../types/types';
import { NoteAddForm } from './NoteAddForm';
import { Template } from './Template';

export const NoteAddPage: FC = () => {
  return (
    <Template>
      <div className="font-medium ">{`${
        Months[new Date().getMonth()]
      } ${new Date().getDay()}`}</div>
      <h1 className="text-3xl font-semibold ">What did you learn today ?</h1>
      <NoteAddForm />
    </Template>
  );
};
