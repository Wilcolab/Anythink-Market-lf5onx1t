import React from "react";

const LanguageSelector = ({ i18n, t }) => {
  const handleSelection = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <span>{t("header.language")}</span>
      <select
        id="set-language"
        className="form-select"
        onChange={handleSelection}
      >
        <option value="en">{t("header.english")}</option>
        <option value="fr">{t("header.french")}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
