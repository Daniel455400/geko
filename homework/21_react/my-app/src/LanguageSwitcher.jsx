import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ padding: '10px', background: '#f0f0f0', display: 'flex', gap: '10px' }}>
      <button onClick={() => changeLanguage('hy')}>HY</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
}

export default LanguageSwitcher;