import { useState } from 'react';
import { ChevronLeft } from 'react-feather';
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
    <>
      <div className="flex gap-2 px-4 py-4">
        <ChevronLeft className='text-blue-500'/>
        <h1 className='font-light'>Edit Note</h1>
      </div>
      <div className="flex flex-col m-6 mt-0 h-full">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={(e) => e.target.select()}
          className="border-b-2 mb-3 py-2 font-bold focus:outline-none focus:border-b-blue-400 text-blue-500"
        />
        <textarea
          cols="30"
          rows="15"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          spellCheck={false}
          className="focus:outline-none focus:bg-blue-50 focus:py-2 focus:px-3 h-full"
        ></textarea>
        <EditNoteButton onClick={handleClick} />
      </div>
    </>
  );
};

export default EditNote;
