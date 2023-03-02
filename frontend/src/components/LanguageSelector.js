import React from "react";

const LanguageSelector = ({ i18n }) => {
  const handleSelection = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <span>Language </span>
      <select
        id="set-language"
        className="form-select"
        aria-label="Default select sample"
        onChange={handleSelection}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
