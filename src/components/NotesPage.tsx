import { FC, useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api';
import { NotesMap } from '../types/types';
import { Template } from './Template';

export const NotesPage: FC = () => {
  const [notesMap, setNotesMap] = useState<NotesMap>();

  useEffect(() => {
    invoke("get_notes")
      .then((res: unknown) => {
        setNotesMap(res as NotesMap);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Template>
      <section>
        <div className="mb-16 font-bold text-3xl">
          {new Date().getFullYear()}
        </div>
      </section>
      <section>
        {notesMap &&
          Object.entries(notesMap).map(([month, dayObject]) => (
            <div className="mb-12">
              <div className="pb-4 mb-8 font-thin text-2xl text-gray-400 border-b">
                {month}
              </div>
              <div>
                {Object.entries(dayObject).map(([day, noteTypes]) => (
                  <div>
                    <div className="font-normal mb-2 text-gray-800">
                      {month} {day}
                    </div>
                    {Object.entries(noteTypes).map(([type, notes]) => (
                      <div className="grid grid-cols-12 mb-4">
                        <div className="col-span-1 py-4 font-normal text-teal-500">
                          {type}
                        </div>
                        <ul className="col-span-11 divide-y divide-gray-200">
                          {notes.map((note) => (
                            <li
                              className=" py-4 font-light text-gray-800"
                              key={note.id}
                            >
                              {note.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </section>
    </Template>
  );
};
