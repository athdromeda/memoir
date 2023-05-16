/* eslint-disable react/prop-types */

import { Children } from 'react';
import './App.css';
import AddNoteButton from './components/AddNoteButton';

const Body = ({ children }) => {
  const oddCards = Children.toArray(children).filter(
    (_, index) => index % 2 === 0
  );
  const evenCards = Children.toArray(children).filter(
    (_, index) => index % 2 !== 0
  );

  return (
    <div className="m-6 mt-24 grid grid-cols-2 gap-4">
      <div>{oddCards}</div>
      <div>{evenCards}</div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="p-6 bg-blue-100 w-full fixed">
      <h1 className="text-xl">Memoir</h1>
    </div>
  );
};

const Note = ({ title, content }) => {
  return (
    <div className="bg-blue-100 w-full px-4 py-3 mb-4 rounded-md cursor-pointer">
      <h3 className="text-lg text-blue-600">{title}</h3>
      <p className='text-slate-500'>{content}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <Body>
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
      </Body>
      <AddNoteButton />
    </>
  );
}

export default App;
