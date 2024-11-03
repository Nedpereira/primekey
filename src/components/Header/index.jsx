import React from "react";
import { Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import ColorModeSwitcher from "../Color-Mode-Switcher";
import logoLight from "../../assets/logo-dark.webp";
import logoDark from "../../assets/logo-light.webp";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      px={{ base: "4", sm: "10" }}
      py={4}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image
        loading="lazy"
        boxSize={{ base: "32px", sm: "42px" }}
        pr={2}
        objectFit="contain"
        src={colorMode === "light" ? logoDark : logoLight}
        alt="logo primekey"
      />

      <Flex alignItems="center" gap={1}>
        <LanguageSwitcher />
        <ColorModeSwitcher />

        <Link href="https://github.com/Nedpereira/securepwd" isExternal>
          <FaGithub size="22px" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
