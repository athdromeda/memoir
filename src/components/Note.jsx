/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const Tags = ({ content }) => {
  function collectTags(str) {
    const regex = /#(\w+)/g;
    const tags = [...new Set(str.match(regex))];
    return tags || [];
  }

  return (
    <div className="flex flex-wrap gap-2 mt-3 mb-1">
      {collectTags(content).map((tag, i) => (
        <div
          className="flex bg-blue-500 text-white w-fit py-1 px-3 text-xs rounded-full"
          key={i}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

const Note = ({ id, title, content }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/edit/' + id)}
      className="bg-blue-50 dark:bg-slate-700 w-full px-4 py-4 mb-4 rounded-md cursor-pointer"
    >
      <h3 className="text-lg text-blue-600 dark:text-blue-400 font-medium leading-tight mb-3">
        {title}
      </h3>
      <div
        className="text-slate-500 dark:text-slate-400"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <Tags content={content} />
    </div>
  );
};

export default Note;
