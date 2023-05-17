/* eslint-disable react/prop-types */
import { Children } from 'react';

const NotesWrapper = ({ children }) => {
  const oddCards = Children.toArray(children).filter(
    (_, index) => index % 2 === 0
  );
  const evenCards = Children.toArray(children).filter(
    (_, index) => index % 2 !== 0
  );

  return (
    <div className="m-6 mt-16 grid grid-cols-2 gap-4">
      <div>{oddCards}</div>
      <div>{evenCards}</div>
    </div>
  );
};

export default NotesWrapper;
