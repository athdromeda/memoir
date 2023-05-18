/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const Note = ({ id, title, content }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/edit/' + id)}
      className="bg-blue-50 dark:bg-slate-700 w-full px-4 py-4 mb-4 rounded-md cursor-pointer"
    >
      <h3 className="text-lg text-blue-600 dark:text-blue-400 font-medium leading-tight mb-3">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400">{content}</p>
    </div>
  );
};

export default Note;
