import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditNoteButton from '../components/EditNoteButton';
import { addNote, deleteNote } from '../noteSlice';
import generateNoteId from '../utils/generateNoteId';

const EditNote = () => {
  const id = parseInt(useParams().id);
  const notes = useSelector((state) => state.note);
  const note = notes.filter((note) => note.id === id)[0];

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteNote(id));
    dispatch(
      addNote({
        id: generateNoteId(),
        title: title,
        content: content,
      })
    );
  };

  return (
    <div className="flex flex-col m-6">
      <h1>Edit Note {id}</h1>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      ></textarea>
      <EditNoteButton onClick={handleClick} />
    </div>
  );
};

export default EditNote;
