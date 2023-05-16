import AddNoteButton from '../components/AddNoteButton';
import NotesWrapper from '../components/NotesWrapper';
import Header from '../components/Header';
import Note from '../components/Note';
import { useSelector } from 'react-redux';

function Home() {
  const notes = useSelector((state) => state.note);

  return (
    <>
      <Header />
      <NotesWrapper>
        {notes.map((note, index) => (
          <Note key={index} title={note.title} content={note.content} id={note.id} />
        ))}
      </NotesWrapper>
      <AddNoteButton />
    </>
  );
}

export default Home;
