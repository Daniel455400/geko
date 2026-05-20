import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n';
import LanguageSwitcher from './LanguageSwitcher';
import Courses from './Courses';
import CourseDetails from './CourseDetails';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;