import '../styles/Form.css';
import { config } from '../config';
import Menu from '../components/Menu';
import { useNavigate } from 'react-router-dom';

function CreateNote() {
  const navigate = useNavigate();

  function handleCreate(event) {
    const formData = new FormData(event.target);

    event.preventDefault();

    fetch(`${config.apiUrl}`, {
      method: 'POST',
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
        <h2>Create Note</h2>
        <form onSubmit={handleCreate}>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' id='title' required />
          <label htmlFor='content'>Content</label>
          <textarea name='content' id='content' required />
          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
