import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Kofi from "../Kofi";

function AccordionInfo() {
  const { t } = useTranslation();
  return (
    <Flex justifyContent="center" flexDirection="column">
      <Flex mt={20} px={2} justifyContent="center">
        <Accordion w="560px" allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" as="span" flex="1" textAlign="left">
                  {t("what_is_primekey")}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{t("primekey_description")}</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" as="span" flex="1" textAlign="left">
                  {t("how_to_use_primekey")}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {t("using_primekey_instructions")}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" as="span" flex="1" textAlign="left">
                  {t("password_security_verification")}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {t("password_security_verification_description")}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" as="span" flex="1" textAlign="left">
                  {t("benefits_of_primekey")}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{t("primekey_benefits")}</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" as="span" flex="1" textAlign="left">
                  {t("faq")}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text mb={2}>
                <strong>{t("multiple_devices_question")}</strong>{" "}
                {t("multiple_devices_answer")}
              </Text>
              <Text>
                <strong>{t("store_passwords_question")}</strong>{" "}
                {t("store_passwords_answer")}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default AccordionInfo;
