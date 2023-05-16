import EditNoteButton from "../components/EditNoteButton";

const AddNote = () => {
  return (
    <div className="flex flex-col m-6">
      <h1>Add Note</h1>
      <input type="text" placeholder="Title" />
      <textarea cols="30" rows="10" placeholder="Lorem ipsum"></textarea>
      <EditNoteButton/>
    </div>
  );
};

export default AddNote;
