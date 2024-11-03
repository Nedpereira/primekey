import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Tooltip, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <Button aria-label="Alterar Modo" variant="link" onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <Tooltip hasArrow label={t("color_mode_moon_tooltip")} placement="auto">
          <MoonIcon loading="lazy" boxSize={5} />
        </Tooltip>
      ) : (
        <Tooltip hasArrow label={t("color_mode_sun_tooltip")} placement="auto">
          <SunIcon loading="lazy" boxSize={5} />
        </Tooltip>
      )}
    </Button>
  );
};

export default ColorModeSwitcher;
