import { config } from '../config';
import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import { useParams } from 'react-router-dom';

function DeleteNote() {
  const [message, setMessage] = useState('Deleting note...');
  const { noteId } = useParams();

  useEffect(() => {
    fetch(`${config.apiUrl}/${noteId}`, {
      method: 'DELETE',
    }).then(() => setMessage(`Note with the ID: ${noteId} deleted successfully.`));
  }, []);

  return (
    <div className='notes'>
      <Menu />
      <p className='notes-subtitle'>{message}</p>
    </div>
  );
}

export default DeleteNote;
