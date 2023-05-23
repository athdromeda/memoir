import SunLineIcon from 'remixicon-react/SunLineIcon';
import MoonLineIcon from 'remixicon-react/MoonLineIcon';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../themeSlice';

const Header = () => {
  const darkTheme = useSelector((state) => state.darkTheme);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={
        'px-6 py-4 w-full fixed top-0 text-blue-500 dark:text-blue-400 font-bold flex justify-between dark:bg-slate-800 bg-white'
      }
    >
      <h1 className="text-xl select-none">Memoir</h1>
      <button className="focus:outline-none" onClick={handleToggleTheme}>
        {darkTheme ? (
          <MoonLineIcon className="text-blue-500 dark:text-amber-400" />
        ) : (
          <SunLineIcon className="text-blue-500 dark:text-teal-500" />
        )}
      </button>
    </div>
  );
};

export default Header;
