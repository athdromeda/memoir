import EditNoteButton from '../components/EditNoteButton';

const EditNote = () => {
  return (
    <div className="flex flex-col m-6">
      <h1>Edit Note</h1>
      <input type="text" />
      <textarea cols="30" rows="10"></textarea>
      <EditNoteButton />
    </div>
  );
};

export default EditNote;
