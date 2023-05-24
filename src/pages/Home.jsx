import AddNoteButton from '../components/AddNoteButton';
import NotesWrapper from '../components/NotesWrapper';
import Header from '../components/Header';
import Note from '../components/Note';
import { useSelector } from 'react-redux';
import isIncludeQuery from '../utils/isIncludesQuery';

function Home() {
  const notes = useSelector((state) => state.note);
  const searchQuery = useSelector((state) => state.searchQuery);

  return (
    <div className={'w-full h-full flex flex-col'}>
      <Header />
      <NotesWrapper>
        {notes
          .filter((note) => isIncludeQuery(note.content, searchQuery))
          .map((note, index) => (
            <Note
              key={index}
              title={note.title}
              content={note.content}
              id={note.id}
            />
          ))}
      </NotesWrapper>
      <AddNoteButton />
    </div>
  );
}

export default Home;
