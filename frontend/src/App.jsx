import './styles/App.css';
import { config } from './config';
import { useEffect, useState } from 'react';
import Menu from './components/Menu';
import NoteItem from './components/NoteItem';
import NotesGroup from './components/NotesGroup';

function App() {
  const [note, setNotes] = useState(false);

  useEffect(() => {
    fetch(config.apiUrl)
      .then(res => res.json())
      .then(response => setNotes(response.data));
  }, []);

  if (note.length === 0) {
    return (
      <div className='app'>
        <Menu />
        <p className='app-subtitle'>No notes found.</p>
        <p className='app-subtitle'>Create your first note!</p>
      </div>
    );
  }

  if (!note) {
    return (
      <div className='app'>
        <Menu />
        <p className='app-subtitle'>Loading...</p>
        <p className='app-subtitle'>Getting notes!</p>
      </div>
    );
  }

  return (
    <div className='app'>
      <Menu />
      <NotesGroup>
        {note.map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
      </NotesGroup>
    </div>
  );
}

export default App;
