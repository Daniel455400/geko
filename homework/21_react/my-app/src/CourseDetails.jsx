import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { coursesData } from './Courses';

function CourseDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  
  const course = coursesData.find((item) => item.id === parseInt(id));

  if (!course) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Course not found</h2>
        <Link to="/">{t('backToCourses')}</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '2px solid black', margin: '20px' }}>
      <h2>{course.title}</h2>
      <p>ID: {id}</p>
      <p>{t('teacher')}: {course.teacher}</p>
      <p>Welcome to this course details page!</p>
      <hr />
      <Link to="/">{t('backToCourses')}</Link>
    </div>
  );
}

export default CourseDetails;