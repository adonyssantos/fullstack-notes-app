import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Notes from './routes/Notes';
import CreateNote from './routes/CreateNote';
import ViewNote from './routes/ViewNote';
import EditNote from './routes/EditNote';
import DeleteNote from './routes/DeleteNote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/notes' element={<Notes />} />
        <Route path='/notes/create' element={<CreateNote />} />
        <Route path='/notes/view/:noteId' element={<ViewNote />} />
        <Route path='/notes/edit/:noteId' element={<EditNote />} />
        <Route path='/notes/delete/:noteId' element={<DeleteNote />} />

        <Route path='*' element={<Navigate to='/notes' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
