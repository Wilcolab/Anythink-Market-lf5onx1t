import { useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <label>
      Language{" "}
      <select
        id="set-language"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </label>
  );
};

export default LanguageSelector;
