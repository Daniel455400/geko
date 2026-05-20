import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CourseCard({ title, teacher, id }) {
  const { t } = useTranslation();

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{t('teacher')}: {teacher}</p>
      <Link to={`/courses/${id}`}>{t('viewDetails')}</Link>
    </div>
  );
}

export default CourseCard;