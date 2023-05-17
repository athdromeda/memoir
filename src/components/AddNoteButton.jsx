import { Plus } from 'react-feather';
import { useNavigate } from 'react-router-dom';
const AddNoteButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/add');
  };

  return (
    <button
      onClick={handleClick}
      className="p-4 bg-blue-500 text-white rounded-full fixed bottom-6 right-6 w-14 h-14"
    >
      <Plus/>
    </button>
  );
};

export default AddNoteButton;
