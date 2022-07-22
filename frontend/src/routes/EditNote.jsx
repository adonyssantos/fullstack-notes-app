import { config } from '../config';
import Menu from '../components/Menu';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function EditNote() {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  const navigate = useNavigate();
  const { noteId } = useParams();

  useEffect(() => {
    fetch(`${config.apiUrl}/${noteId}`)
      .then(response => response.json())
      .then(response => setNote(response.data));
  }, []);

  function handleEdit(event) {
    const formData = new FormData(event.target);

    event.preventDefault();

    fetch(`${config.apiUrl}/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: formData.get('title'),
        content: formData.get('content'),
      }),
    })
      .then(response => response.json())
      .then(response => navigate(`/notes/view/${response.data.id}`));
  }

  return (
    <div className='notes'>
      <Menu />
      <div className='container'>
        <h2>Edit Note</h2>
        <form onSubmit={handleEdit}>
          <label htmlFor='title'>Title</label>
          <input
            value={note.title}
            onChange={event => setNote({ ...note, title: event.target.value })}
            type='text'
            name='title'
            id='title'
            required
          />
          <label htmlFor='content'>Content</label>
          <textarea
            value={note.content}
            onChange={event => setNote({ ...note, content: event.target.value })}
            name='content'
            id='content'
            required
          />
          <button type='submit'>Edit</button>
        </form>
      </div>
    </div>
  );
}

export default EditNote;
