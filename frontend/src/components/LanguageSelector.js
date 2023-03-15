import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [t, i18n] = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <label>
      {t("header.language")}{" "}
      <select
        id="set-language"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="en">{t("header.english")}</option>
        <option value="fr">{t("header.french")}</option>
      </select>
    </label>
  );
};

export default LanguageSelector;
