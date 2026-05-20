import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Online Courses",
      teacher: "Teacher",
      viewDetails: "View Details",
      backToCourses: "Back to Courses",
      notFound: "Page Not Found",
      goToHome: "Go to Home Page"
    }
  },
  hy: {
    translation: {
      title: "Առցանց Դասընթացներ",
      teacher: "Դասախոս",
      viewDetails: "Տեսնել Ավելին",
      backToCourses: "Հետ գնալ դասընթացներին",
      notFound: "Էջը չի գտնվել",
      goToHome: "Գնալ գլխավոր էջ"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hy',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;