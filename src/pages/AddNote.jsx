import { useRef } from 'react';
import { ChevronLeft } from 'react-feather';
import { useDispatch } from 'react-redux';
import EditNoteButton from '../components/EditNoteButton';
import { addNote } from '../noteSlice';
import generateNoteId from '../utils/generateNoteId';

const AddNote = () => {
  const title = useRef('');
  const content = useRef('');

  const dispatch = useDispatch();
  const handleClick = () => {
    if (title.current.value && content.current.value) {
      dispatch(
        addNote({
          id: generateNoteId(),
          title: title.current.value,
          content: content.current.value,
        })
      );
    }
  };

  return (
    <>
    <div className="flex gap-2 px-4 py-4">
      <ChevronLeft className='text-blue-500'/>
      <h1 className='font-light'>Add Note</h1>
    </div>
      <div className="flex flex-col m-6 mt-0 h-full">
        <input
          type="text"
          placeholder="Title"
          ref={title}
          onFocus={(e) => e.target.select()}
          className="text-blue-500 border-b-2 mb-3 py-2 font-bold focus:outline-none focus:border-b-blue-400"
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Lorem ipsum"
          ref={content}
          spellCheck={false}
          className="focus:outline-none focus:bg-blue-50 focus:py-2 focus:px-3 h-full"
        ></textarea>
        <EditNoteButton onClick={handleClick} />
      </div>
    </>
  );
};

export default AddNote;
