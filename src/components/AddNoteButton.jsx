import { useNavigate } from 'react-router-dom';
const AddNoteButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/add')}
      className="p-4 bg-blue-500 text-white rounded-full fixed bottom-4 right-4"
    >
      +
    </button>
  );
};

export default AddNoteButton;
