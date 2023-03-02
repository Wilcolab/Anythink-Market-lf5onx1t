import React from "react";

const LanguageSelector = ({ i18n, t }) => {
  return (
    <>
      <span>{t("header.language")}</span>
      <select
        id="set-language"
        className="form-select"
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">
          {t("header.english")}
        </option>
        <option value="fr">{t("header.french")}</option>
      </select>
    </>
  );
};

export default LanguageSelector;
