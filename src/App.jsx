/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddNote from './pages/AddNote';
import EditNote from './pages/EditNote';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
    if (isDarkTheme) {
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddNote />} />
        <Route path="edit/:id" element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
