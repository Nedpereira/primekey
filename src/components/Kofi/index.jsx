import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, Tooltip, Box, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import animation from "../../assets/kofi.json";

function Kofi() {
  const { t } = useTranslation();
  return (
    <>
      <Tooltip hasArrow label={t("kofi")} placement="auto">
        <Link aria-label={t("kofi")} href="https://ko-fi.com/securepwd" isExternal>
          <Player
            id="kofi"
            autoplay
            loop
            src={animation}
            style={{ height: "150px", width: "150px" }}
          />
        </Link>
      </Tooltip>
    </>
  );
}

export default Kofi;
