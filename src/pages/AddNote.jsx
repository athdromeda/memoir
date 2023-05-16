import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import EditNoteButton from '../components/EditNoteButton';
import { addNote } from '../noteSlice';

function generateNoteId() {
  return new Date().getTime();
}

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
    <div className="flex flex-col m-6">
      <h1>Add Note</h1>
      <input type="text" placeholder="Title" ref={title} />
      <textarea
        cols="30"
        rows="10"
        placeholder="Lorem ipsum"
        ref={content}
      ></textarea>
      <EditNoteButton onClick={handleClick} />
    </div>
  );
};

export default AddNote;
