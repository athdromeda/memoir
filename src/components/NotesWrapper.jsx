/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Children } from 'react';

const NotesWrapper = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const column = getColumnsCount(windowWidth);
  const cardsColumn = generateBlankArrays(column);

  for (let i = 0; i < column; i++) {
    cardsColumn[i].push(
      Children.toArray(children).filter((_, index) => index % column === i)
    );
  }

  return (
    <div className={'dark:bg-slate-800 p-6 pt-16 h-full grid gap-4 grid-cols-' + column}>
      {cardsColumn.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
};

function generateBlankArrays(count) {
  return Array.from({ length: count }, () => []);
}

function getColumnsCount(width) {
  if (width < 550) {
    return 2;
  }
  if (width < 800) {
    return 3;
  }
  return 4;
}

export default NotesWrapper;
