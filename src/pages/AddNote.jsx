import { useState } from 'react';
import { useRef } from 'react';
import { ChevronLeft } from 'react-feather';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditNoteButton from '../components/EditNoteButton';
import TextField from '../components/TextField';
import { addNote } from '../noteSlice';
import generateNoteId from '../utils/generateNoteId';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 px-4 py-4">
      <button>
        <ChevronLeft className="text-blue-500" onClick={() => navigate('/')} />
      </button>
      <h1 className="font-light select-none dark:text-blue-100">Add Note</h1>
    </div>
  );
};

const AddNote = () => {
  const [content, setContent] = useState();

  const title = useRef('');

  const dispatch = useDispatch();
  const handleClick = () => {
    if (title.current.value && content) {
      dispatch(
        addNote({
          id: generateNoteId(),
          title: title.current.value,
          content: content,
        })
      );
    }
  };

  return (
    <div className="flex flex-col w-full h-full dark:bg-slate-800">
      <Header />
      <div className="flex flex-col m-6 mt-0 h-full">
        <textarea
          type="text"
          placeholder="Title"
          ref={title}
          onFocus={(e) => e.target.select()}
          wrap="soft"
          spellCheck={false}
          maxLength={32}
          className="text-blue-500 text-2xl mb-3 py-2 focus:px-3 font-bold focus:outline-none focus:border-b-blue-400 dark:bg-slate-800 dark:text-blue-400 resize-none overflow-hidden"
        />
        <TextField setContent={setContent} />
        <EditNoteButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default AddNote;
