import React from 'react';
import { parseDate } from '../utilities/date-parser';
import { useNavigate } from 'react-router-dom';
import '../styles/NoteItem.css';

export default function NoteItem({ note }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`edit/${note.id}`);
  }

  function handleDelete() {
    navigate(`delete/${note.id}`);
  }

  return (
    <div className='note-item'>
      <h2 className='note-item__title'>{note.title}</h2>
      <p className='note_item__content'>{note.content}</p>
      <div className='note-item__dates'>
        <span>Created: {parseDate(note.created_at)}</span>
        <span>Updated: {parseDate(note.updated_at)}</span>
      </div>
      <div className='note-item__actions'>
        <button onClick={handleEdit} className='note-item__action'>
          Edit
        </button>
        <button onClick={handleDelete} className='note-item__action delete'>
          Delete
        </button>
      </div>
    </div>
  );
}
