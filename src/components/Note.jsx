/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const Note = ({ title, content }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/edit')}
      className="bg-blue-100 w-full px-4 py-3 mb-4 rounded-md cursor-pointer"
    >
      <h3 className="text-lg text-blue-600">{title}</h3>
      <p className="text-slate-500">{content}</p>
    </div>
  );
};

export default Note;
