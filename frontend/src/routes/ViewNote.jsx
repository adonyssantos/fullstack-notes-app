import { config } from '../config';
import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import NoteItem from '../components/NoteItem';
import NotesGroup from '../components/NotesGroup';
import { useParams } from 'react-router-dom';

function ViewNote() {
  const [note, setNote] = useState(false);
  const { noteId } = useParams();

  useEffect(() => {
    fetch(`${config.apiUrl}/${noteId}`)
      .then(response => response.json())
      .then(response => setNote(response.data));
  }, []);

  if (note === null) {
    return (
      <div className='notes'>
        <Menu />
        <p className='notes-subtitle top-spacer'>This note does not exist.</p>
      </div>
    );
  }

  if (note === false) {
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
        <NoteItem key={note.id} note={note} />
      </NotesGroup>
    </div>
  );
}

export default ViewNote;
