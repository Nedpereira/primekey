import React from "react";
import { useTranslation } from "react-i18next";
import { Select, Image, Box } from "@chakra-ui/react";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const getFlagCode = (languageCode) => {
    switch (languageCode) {
      case "en":
        return "us";
      case "pt":
        return "br";
      case "es":
        return "es";
      default:
        return languageCode;
    }
  };

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box w="200px">
      <Select
        id="language-select"
        h={8}
        onChange={changeLanguage}
        defaultValue={i18n.language}
        icon={
          <Image
            loading="lazy"
            borderRadius={4}
            objectFit="cover"
            src={`https://flagcdn.com/w40/${getFlagCode(i18n.language)}.png`}
            alt={i18n.language}
          />
        }
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="es">Español</option>
      </Select>
    </Box>
  );
}

export default LanguageSwitcher;
