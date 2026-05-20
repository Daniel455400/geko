import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>404</h1>
      <h2>{t('notFound')}</h2>
      <Link to="/">{t('goToHome')}</Link>
    </div>
  );
}

export default NotFound;