import SunLineIcon from 'remixicon-react/SunLineIcon';
import MoonLineIcon from 'remixicon-react/MoonLineIcon';
import SearchLineIcon from 'remixicon-react/SearchLineIcon';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../themeSlice';
import { useState, useEffect, useRef } from 'react';
import { setQuery } from '../searchQuerySlice';

const SearchBar = () => {
  const inputBar = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputBar.current.focus();
  }, []);

  const handleInput = () => {
    dispatch(setQuery(inputBar.current.value));
  };

  return (
    <div className="fixed top-3 right-1/2 translate-x-1/2 w-2/3">
      <input
        ref={inputBar}
        onInput={handleInput}
        type="text"
        placeholder="Search somethin (Esc to cancel)"
        className="py-2 px-3 w-full font-normal focus:outline-none dark:bg-slate-800 border-2 dark:border-blue-400 rounded-md"
      />
    </div>
  );
};

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const darkTheme = useSelector((state) => state.darkTheme);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setShowSearchBar(false);
        dispatch(setQuery(''));
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <div
      className={
        'px-6 py-4 w-full fixed top-0 text-blue-500 dark:text-blue-400 font-bold flex justify-between dark:bg-slate-800 bg-white'
      }
    >
      <h1 className="text-xl select-none">Memoir</h1>
      <div className="flex gap-4">
        <button onClick={() => setShowSearchBar(true)}>
          <SearchLineIcon className="dark:text-blue-200 text-blue-500" />
        </button>
        {showSearchBar && <SearchBar />}
        <button className="focus:outline-none" onClick={handleToggleTheme}>
          {darkTheme ? (
            <MoonLineIcon className="text-blue-500 dark:text-amber-400" />
          ) : (
            <SunLineIcon className="text-blue-500 dark:text-teal-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
