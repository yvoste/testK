import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "fr", name: "Français", flag: "🇫🇷" },
        { code: "en", name: "English", flag: "🇬🇧" },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
        // Optionnel: Sauvegarder la préférence dans localStorage
        localStorage.setItem("i18nextLng", lng);
    };

    const currentLanguage =
        languages.find((lang) => lang.code === i18n.language) || languages[0];

    return (
        <div className="language-selector">
            <button
                className="language-selector__current"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="language-flag">{currentLanguage.flag}</span>
                <span className="language-name">{currentLanguage.name}</span>
                <span className="language-arrow">▼</span>
            </button>

            {isOpen && (
                <div className="language-selector__dropdown">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            className={`language-selector__option ${
                                language.code === i18n.language ? "active" : ""
                            }`}
                            onClick={() => changeLanguage(language.code)}
                        >
                            <span className="language-flag">
                                {language.flag}
                            </span>
                            <span className="language-name">
                                {language.name}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
