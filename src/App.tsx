import { Route, Routes } from 'react-router-dom';
import { NoteAddPage } from './components/NoteAddPage';
import { NotesPage } from './components/NotesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="/add" element={<NoteAddPage />} />
    </Routes>
  );
}

export default App;
