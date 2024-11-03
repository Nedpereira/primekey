import React from "react";
import {
  Flex,
  Image,
  Link,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import ColorModeSwitcher from "../Color-Mode-Switcher";
import logoLight from "../../assets/logo-dark.webp";
import logoDark from "../../assets/logo-light.webp";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <Flex
      px={6}
      py={4}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="https://github.com/Nedpereira">
        <Tooltip hasArrow label={t("developed")} placement="auto">
          <Image
            loading="lazy"
            boxSize="40px"
            objectFit="contain"
            src={colorMode === "light" ? logoDark : logoLight}
            alt="logo primekey"
          />
        </Tooltip>
      </Link>
      <Flex>
        <LanguageSwitcher />
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};

export default Header;
