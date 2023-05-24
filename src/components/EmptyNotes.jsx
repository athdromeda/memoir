import { useSelector } from 'react-redux';

function EmptyNotes() {
  const searchQuery = useSelector((state) => state.searchQuery);
  return (
    <div className="text-center dark:bg-slate-800 p-6 pt-32 h-full flex justify-center align-center gap-4 dark:text-white text-blue-500">
      {searchQuery === '' ? (
        <div>Unleash your <b>creativity</b> and start <em>jotting down</em> your ideas!</div>
      ) : (
        `Sorry, no note with '${searchQuery}' found`
      )}
    </div>
  );
}

export default EmptyNotes;
