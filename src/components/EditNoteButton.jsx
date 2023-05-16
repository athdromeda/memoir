import { useNavigate } from 'react-router-dom';

const EditNoteButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="p-4 bg-blue-500 text-white rounded-full fixed bottom-4 right-4"
    >
      v
    </button>
  );
};

export default EditNoteButton;
