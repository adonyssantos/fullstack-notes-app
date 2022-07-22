import '../styles/Notes.css';
import { config } from '../config';
import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import NoteItem from '../components/NoteItem';
import NotesGroup from '../components/NotesGroup';
import { Link } from 'react-router-dom';

function Notes() {
  const [notes, setNotes] = useState(false);

  useEffect(() => {
    fetch(config.apiUrl)
      .then(response => response.json())
      .then(response => setNotes(response.data));
  }, []);

  if (notes.length === 0) {
    return (
      <div className='notes'>
        <Menu />
        <p className='notes-subtitle top-spacer'>No notes found.</p>
        <p className='notes-subtitle'>
          <Link to='create'>Create your first note!</Link>
        </p>
      </div>
    );
  }

  if (!notes) {
    return (
      <div className='notes'>
        <Menu />
        <p className='notes-subtitle top-spacer'>Loading...</p>
        <p className='notes-subtitle'>Getting notes!</p>
      </div>
    );
  }

  return (
    <div className='notes'>
      <Menu />
      <NotesGroup>
        {notes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
      </NotesGroup>
    </div>
  );
}

export default Notes;
