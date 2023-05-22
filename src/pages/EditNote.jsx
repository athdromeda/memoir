/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Trash } from 'react-feather';
import { ChevronLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EditNoteButton from '../components/EditNoteButton';
import TextField from '../components/TextField';
import { addNote, deleteNote } from '../noteSlice';
import generateNoteId from '../utils/generateNoteId';

const Header = ({ navigateTo, handleDelete }) => {
  return (
    <div className="flex justify-between px-4 py-4">
      <div className="flex gap-2">
        <button>
          <ChevronLeft className="text-blue-500" onClick={navigateTo} />
        </button>
        <h1 className="font-light select-none dark:text-blue-100">Edit Note</h1>
      </div>
      <button onClick={handleDelete}>
        <Trash className="text-pink-500 mr-2" />
      </button>
    </div>
  );
};

const EditNote = () => {
  const navigate = useNavigate();
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
  
  const handleDelete = () => {
    dispatch(deleteNote(id));
    navigate('/');
  };

  return (
    <div className="flex flex-col w-full h-full dark:bg-slate-800">
      <Header
        id={id}
        navigateTo={() => navigate('/')}
        handleDelete={handleDelete}
      />
      <div className="flex flex-col m-6 mt-0 h-full">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={(e) => e.target.select()}
          wrap="soft"
          spellCheck={false}
          maxLength={32}
          className="text-blue-500 text-2xl mb-3 py-2 focus:px-3 font-bold focus:outline-none focus:border-b-blue-400 dark:bg-slate-800 dark:text-blue-400 resize-none overflow-hidden"
        />
        <TextField activeContent={content} setContent={setContent} />
        <EditNoteButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default EditNote;
