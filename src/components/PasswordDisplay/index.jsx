import React, { useState } from "react";
import {
  Box,
  Text,
  ButtonGroup,
  IconButton,
  Flex,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useColorMode,
} from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { FaDice } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/react";
import useCustomToast from "../Toast/Index";
import { Tooltip } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { getAnalytics, logEvent } from "firebase/analytics";
import { LockIcon } from "@chakra-ui/icons";
import { firebaseApp } from "../../Firebase/index";

function PasswordDisplay() {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const showToast = useCustomToast();
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("black", "white");

  const [password, setPassword] = useState("8#oH21A");
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    showToast({
      status: "success",
      message: t("copy_showToast"),
      duration: 2,
    });
  };

  const generatePassword = () => {
    const analytics = getAnalytics(firebaseApp);

    const numbers = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%";
    let validChars = "abcdefghijklmnopqrstuvwxyz";

    if (useUppercase) {
      validChars += upperChars;
    }
    if (useNumbers) {
      validChars += numbers;
    }
    if (useSymbols) {
      validChars += symbols;
    }

    let newPassword = "";

    if (useNumbers) {
      newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    if (useSymbols) {
      newPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

    while (newPassword.length < passwordLength) {
      newPassword += validChars.charAt(
        Math.floor(Math.random() * validChars.length)
      );
    }

    newPassword = newPassword
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    setPassword(newPassword);
    setIsPasswordGenerated(true);

    logEvent(analytics, "generate_password");
  };

  const checkPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    const prefix = hashHex.substr(0, 5);
    const suffix = hashHex.substr(5).toUpperCase();

    const response = await fetch(
      `https://api.pwnedpasswords.com/range/${prefix}`
    );
    const text = await response.text();
    const regex = new RegExp(`^${suffix}:`, "m");

    if (regex.test(text)) {
      showToast({
        status: "warning",
        message: t("passwordCompromised"),
        duration: 4,
      });
    } else {
      showToast({
        status: "success",
        message: t("passwordSafe"),
        duration: 4,
      });
    }
  };

  return (
    <Flex justifyContent="center">
      <Box
        maxW={600}
        w="100%"
        p={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Flex width={"100%"} flexDirection="column" color={textColor}>
          <Text fontSize="sm" fontWeight="bold">
            {t("title_password")}
          </Text>

          <Flex width={"100%"} alignItems="center">
            <Tooltip
              hasArrow
              label={t("ficopy_tooltip")}
              bg="gray.300"
              color="black"
            >
              <IconButton
                aria-label="Copiar senha"
                icon={<FiCopy />}
                onClick={copyToClipboard}
              />
            </Tooltip>
            <Text
              w="100%"
              ml={2}
              p={2}
              borderRadius={4}
              bg={bgColor}
              fontSize="lg"
              fontWeight="bold"
              mr={2}
            >
              {password}
            </Text>
            <ButtonGroup isAttached variant="outline">
              <Tooltip
                hasArrow
                label={t("fadice_tooltip")}
                bg="gray.300"
                color="black"
              >
                <IconButton
                  aria-label="Gerar nova senha"
                  icon={<FaDice />}
                  onClick={generatePassword}
                />
              </Tooltip>
            </ButtonGroup>
          </Flex>
        </Flex>
        {isPasswordGenerated && (
          <Flex
            my={2}
            alignItems="center"
            alignSelf="flex-start"
            aria-label="verify-password"
            cursor="pointer"
            px={2}
            py={1}
            borderRadius="md"
            bgColor={colorMode === "dark" ? "gray.700" : "gray.200"}
            onClick={() => checkPassword(password)}
          >
            <LockIcon color="#36a4e7" mr={1} />
            <Text
              aria-label="info-verify-password"
              _hover={{
                textDecoration: "none",
                color: "#36a4e7",
              }}
              fontSize="sm"
              mt={1}
            >
              {t("verifyPassword")}
            </Text>
          </Flex>
        )}
        <Box my={4} minW={50} width={"100%"}>
          <Flex>
            <Tooltip
              hasArrow
              label={t("passwordlength_tooltip")}
              bg="gray.300"
              color="black"
            >
              <Text
                fontSize="md"
                fontWeight="bold"
                px={2}
                mr={2}
                borderRadius={4}
                bg={bgColor}
              >
                {passwordLength}
              </Text>
            </Tooltip>
            <Slider
              id="slider"
              aria-label="Comprimento da senha"
              defaultValue={8}
              min={1}
              max={20}
              colorScheme={"blue"}
              onChangeEnd={(val) => setPasswordLength(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={4} />
            </Slider>
          </Flex>
        </Box>
        <Flex w={"100%"} gap={2} justifyContent="space-between" flexWrap="wrap">
          <Checkbox
            isChecked={useUppercase}
            onChange={(e) => setUseUppercase(e.target.checked)}
            colorScheme="blue"
            fontSize="sm"
            fontWeight="bold"
          >
            {t("uppercase")}
          </Checkbox>
          <Checkbox
            isChecked={useNumbers}
            onChange={(e) => setUseNumbers(e.target.checked)}
            colorScheme="blue"
            fontSize="md"
            fontWeight="bold"
          >
            {t("numbers")}
          </Checkbox>
          <Checkbox
            isChecked={useSymbols}
            onChange={(e) => setUseSymbols(e.target.checked)}
            colorScheme="blue"
            fontSize="md"
            fontWeight="bold"
          >
            {t("symbols")}
          </Checkbox>
        </Flex>
      </Box>
    </Flex>
  );
}

export default PasswordDisplay;
