import React from 'react';
import { parseDate } from '../utilities/date-parser';
import '../styles/NoteItem.css';

export default function NoteItem({ note }) {
  return (
    <div className='note-item'>
      <h2 className='note-item__title'>{note.title}</h2>
      <p className='note_item__content'>{note.content}</p>
      <div className='note-item__dates'>
        <span>Created: {parseDate(note.created_at)}</span>
        <span>Updated: {parseDate(note.updated_at)}</span>
      </div>
      <div className='note-item__actions'>
        <button className='note-item__action'>Edit</button>
        <button className='note-item__action delete'>Delete</button>
      </div>
    </div>
  );
}
