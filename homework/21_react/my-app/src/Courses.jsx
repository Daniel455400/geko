import React from 'react';
import { useTranslation } from 'react-i18next';
import CourseCard from './CourseCard';

export const coursesData = [
  { id: 1, title: 'HTML & CSS HTML Fundamentals', teacher: 'Daniel' },
  { id: 2, title: 'JavaScript Advanced', teacher: 'Alex' },
  { id: 3, title: 'React Router Pro', teacher: 'John' }
];

function Courses() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('title')}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {coursesData.map((course) => (
          <CourseCard 
            key={course.id}
            id={course.id}
            title={course.title}
            teacher={course.teacher}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;