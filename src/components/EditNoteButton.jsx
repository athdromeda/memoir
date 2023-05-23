/* eslint-disable react/prop-types */
import CheckLineIcon from 'remixicon-react/CheckLineIcon';
import { useNavigate } from 'react-router-dom';

const EditNoteButton = ({ onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="p-4 bg-blue-500 text-white rounded-full fixed bottom-6 right-6 w-14 h-14"
    >
      <CheckLineIcon/>
    </button>
  );
};

export default EditNoteButton;
