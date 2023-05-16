import AddNoteButton from '../components/AddNoteButton';
import NotesWrapper from '../components/NotesWrapper';
import Header from '../components/Header';
import Note from '../components/Note';

function Home() {
  return (
    <>
      <Header />
      <NotesWrapper>
        <Note
          title={'My note'}
          content={
            'Lorem ipsum dolor sit amet constectura lorem ipsum dolor sit amet'
          }
        />
        <Note title={'My note 1'} content={'Lorem ipsum dolor sit amet'} />
        <Note title={'My note 2'} content={'Lorem ipsum dolor sit amet'} />
        <Note title={'My note 3'} content={'Lorem ipsum dolor sit amet'} />
        <Note
          title={'My note4'}
          content={
            'Lorem ipsum dolor sit amet constectura lorem ipsum dolor sit amet'
          }
        />
        <Note title={'My note 5'} content={'Lorem ipsum dolor sit amet'} />
        <Note title={'My note 6'} content={'Lorem ipsum dolor sit amet'} />
        <Note title={'My note 7'} content={'Lorem ipsum dolor sit amet'} />
      </NotesWrapper>
      <AddNoteButton />
    </>
  );
}

export default Home;
