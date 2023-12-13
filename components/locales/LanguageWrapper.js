import React from 'react';
import { useSelector } from 'react-redux';

const LanguageWrapper = ({ children, language }) => {

  const { texts } = useSelector((state) => state);

  const fontClass = texts.language === 'EN' ? 'english-font' : '';

  return (
    <div className={fontClass}>
      {children}
    </div>
  );
};

export default LanguageWrapper;